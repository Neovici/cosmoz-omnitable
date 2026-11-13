import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{$ as t,At as n,B as r,C as i,Ct as a,D as o,F as s,Ft as c,H as l,Jt as u,K as d,L as f,Lt as p,N as m,Nt as h,Ot as g,Qt as _,R as v,T as y,Ut as b,Vt as x,W as S,Wt as C,X as w,Xt as T,Y as E,Yt as ee,Z as te,Zt as D,_ as ne,_t as O,at as re,b as k,c as A,ct as ie,d as ae,dt as j,et as oe,f as se,ft as ce,g as le,gt as ue,ht as de,i as fe,it as pe,jt as me,k as he,l as ge,lt as _e,mt as ve,n as ye,ot as be,p as xe,pt as Se,qt as Ce,r as we,rt as Te,s as Ee,st as De,u as Oe,ut as ke,v as M,vt as N,w as Ae,x as je,xt as Me,y as P,yt as Ne,zt as F}from"./iframe-DA1pKxE6.js";import{A as Pe,B as I,C as Fe,D as Ie,E as Le,F as L,G as Re,H as ze,I as Be,J as Ve,L as He,M as Ue,N as We,O as Ge,P as R,R as Ke,S as qe,T as Je,U as Ye,V as z,W as Xe,_ as Ze,a as Qe,d as $e,f as et,g as tt,h as nt,j as rt,k as it,l as at,m as ot,n as st,q as ct,r as lt,s as ut,t as dt,u as ft,v as pt,w as mt,x as ht,y as gt,z as _t}from"./dist-IUVR350L.js";import{n as vt,t as yt}from"./table-demo-helper-Dj0p9yas.js";var bt;function xt(){return(xt=e((()=>{O(),bt=()=>D`<style>
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
</style>`,customElements.define(`cz-spinner`,N(bt))})))()}var St,Ct;function B(){return(B=e((()=>{m(),ke(),De(),O(),St=j`
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
`,Ct=()=>D`
	<style>
		${St}
	</style>
	${f({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,N(Ct))})))()}var V,wt,Tt,Et,Dt,H;function U(){return(U=e((()=>{z(),V=({valuePath:e},t)=>I(t,e),wt=V,Tt=V,Et=({valuePath:e},t)=>n=>{let r=I(n,e);return r!=null&&r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},Dt=(e,t)=>t===``||t==null?null:t,H=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:`left`},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return V(e,t)}toXlsxValue(e,t){return wt(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return Dt(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return Tt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})))()}var Ot,kt,At,jt,Mt,Nt,Pt;function Ft(){return(Ft=e((()=>{k(),B(),L(),_(),U(),Ot=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),kt=e=>()=>e(e=>({...e,filter:e.inputValue})),At=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},jt=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),Mt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Nt=e=>e!=null&&e!==``,Pt=class extends H(R){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(t!=null&&t!==``)return Et(e,t)}renderCell(e,{item:t}){return D`<span class="default-column">${V(e,t)}</span>`}renderEditCell(e,{item:t},n){return D`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${V(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return D`<cosmoz-input
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
			${E(!e.disabledFiltering,()=>D`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Nt(t)}
						light
						@click=${Mt(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,Pt)})))()}var It,Lt,Rt;function W(){return(W=e((()=>{k(),O(),_(),It=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],Lt=C`
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
`,Rt=e=>{let{label:t,value:n,slot:r}=e;e.toggleAttribute(`has-value`,!!n);let i=D`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${n||``}
	</div>`;return he(i,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,N(Rt,{observedAttributes:It,styleSheets:[Lt]}))})))()}var zt;function Bt(){return(Bt=e((()=>{Ye(),_(),Ue(),W(),zt=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,align:a=`left`,externalValues:o=null})=>{let s={filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0}};return D`
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
	`}})))()}var Vt,Ht;function Ut(){return(Ut=e((()=>{pe(),Ke(),Pe(),Ie(),Vt=e=>e?typeof e.close==`function`?e:Vt(e.parentElement):null,Ht=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:`left`},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=Ge.debounce(this._limitInputDebouncer,_t.after(600),()=>{this._limitInput(),this._updateFilter()}),it(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Vt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)&&(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);(this.getComparableValue(n)!==this.getComparableValue(t,`min`)||this.getComparableValue(r)!==this.getComparableValue(t,`max`))&&this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);(this.getComparableValue(r)!==this.getComparableValue(n,`min`)||this.getComparableValue(i)!==this.getComparableValue(n,`max`))&&(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(re(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})))()}var Wt;function Gt(){return(Gt=e((()=>{L(),_(),Wt=e=>class extends e{static get template(){return Be`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;ee(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>ee(r.render(),r.$.output))}}})))()}var Kt;function qt(){return(qt=e((()=>{k(),L(),M(),_(),Bt(),W(),Ut(),Gt(),Kt=class extends Ht(Wt(R)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return D`
			${E(this.disabled,()=>D`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>D`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${zt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:D`
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Kt)})))()}var G,Jt,Yt,Xt,K,Zt,Qt,$t;function en(){return(en=e((()=>{z(),mt(),G=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=G(t);return i==null?r:n(r,i)},Jt=e=>{let t=G(e);return t==null?null:t.toString()},Yt=({valuePath:e},t)=>{let n=G(e?I(t,e):t);return Jt(n)},Xt=e=>Jt(e)??``,K=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=e?I(n,e):n,i=G(r);if(i!=null)return t===null?i:G(i.toFixed(t))},Zt=Le((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Qt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?I(i,e):i;if(a==null)return``;let o=G(a);if(o!=null)return Zt(t,n,r).format(o)},$t=(e,t)=>n=>{let r=K(e,n);if(r==null)return!1;let i=K({...e,valuePath:`min`},t),a=K({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var q,tn,nn,rn,an,on,sn,cn,ln,un,dn;function fn(){return(fn=e((()=>{z(),en(),q=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=G(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=q(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1),c=o.amount*(e[o.currency]||1);return G(s,c,r)===s?a:o},tn=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=I(n,e));let i=q(t,r);if(i==null)return;let a=G(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},nn=(e,t)=>n=>{let r=tn(e,n);if(r===void 0)return!1;let i=tn({...e,valuePath:`min`},t),a=tn({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))},rn={},an=(e,t)=>{let n=e+(t||``)||``;return rn[n]||(rn[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),rn[n]},on=(e,t,n)=>{let r=q(e,t);return r==null?``:an(r.currency,n).format(r.amount)},sn=({valuePath:e,rates:t,locale:n},r)=>{let i=q(t,e?I(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:on(t,i,n)},cn=e=>e?e.amount+e.currency:``,ln=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},un=({valuePath:e},t)=>e?I(t,e)?.currency:null,dn=({valuePath:e},t)=>e?I(t,e)?.amount:void 0})))()}var pn,mn,hn,gn,_n,vn,yn;function bn(){return(bn=e((()=>{mt(),O(),pn=Symbol(`column`),mn=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},hn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:Je(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,align:e.align,headerAlign:e.headerAlign,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[pn]:e}},gn=e=>e.isOmnitableColumn&&!e.hidden,_n=e=>{let t=e.filter(gn);return mn(t)?t:[]},vn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>hn(e,n)),yn=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=h([]);return c(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(vn(_n(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})))()}var xn,Sn,Cn;function J(){return(J=e((()=>{z(),bn(),xn=(e,t)=>Array.isArray(e)?e.map(e=>I(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,Sn=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return xn(r,n)},Cn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:I(n,i);if(r===a)return;i!==void 0&&ze(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[pn]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})))()}var wn;function Tn(){return(Tn=e((()=>{k(),B(),L(),_(),z(),U(),qt(),fn(),J(),wn=class extends H(R){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell`},headerCellClass:{type:String,value:`amount-header-cell`},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=tn({...e,valuePath:`min`},t),r=tn({...e,valuePath:`max`},t);if(n!=null||r!=null)return nn(e,t)}getString(e,t){return sn(e,t)}toXlsxValue(e,t){return sn(e,t)}getComparableValue(e,t){return tn(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=q(e,t.min),r=q(e,t.max);if(n!=null||r!=null)return cn(n)+`~`+cn(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:ln(n[1]),max:ln(n[2])}:null}renderCell(e,{item:t}){return D`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return D`<cosmoz-input
			compact
			type="number"
			@change=${r=>n({amount:r.target.value,currency:I(t,e.valuePath)?.currency})}
			.value=${dn(e,t)}
		>
			<div slot="suffix">${un(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,rates:a,currency:o,autoupdate:s,autodetect:c,disabledFiltering:l,headerAlign:u,align:d},{filter:f},p,m){return D`<cosmoz-omnitable-amount-range-input
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return Sn(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,wn)})))()}var En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln;function Rn(){return(Rn=e((()=>{fe(),pe(),Ee(),z(),J(),En=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=I(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},Dn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=En(e,t);if(!r?.length)return[];let i=n??`label`,a=e=>String(typeof e==`object`&&e?I(e,i??``)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},On=(e,t,n)=>we(t&&I(e,t)).map(A(n)),kn=({valuePath:e,textProperty:t},n)=>On(n,e,t).filter(e=>e!=null).join(`, `),An=kn,jn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=A(e),s=we(I(a,t));return i.some(t=>s.length===0&&A(r||e)(t)===n||s.some(e=>o(e)===o(t)))},Mn=e=>t=>e(e=>({...e,filter:t})),Nn=e=>t=>e(e=>({...e,headerFocused:t})),Pn=e=>t=>e(e=>({...e,query:t})),Fn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=Dn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},In=(e,t)=>Fn(e,xn(t,e.valuePath)),Ln=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return kn(e,t)}toXlsxValue(e,t){return An(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=I(n,e);return t==null?r:we(r).map(A(t)).sort().join(` `)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return jn(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){let n=e;return console.error(`Failed to deserialize filter value:`,{error:n?.name,message:n?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>Fn(e,await Promise.resolve(re(e.values,...t))):In(e,t)}}})))()}var zn,Bn,Vn;function Hn(){return(Hn=e((()=>{ye(),Fe(),L(),_(),fe(),Ee(),Rn(),U(),O(),z(),bn(),zn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?Oe(t):A(n),a=we(e&&I(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Bn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=A(e),o=A(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=we(I(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Vn=class extends Ln(H(R)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return D`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return D`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${V(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},i,a){return D`<cosmoz-autocomplete-excluding
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
			.itemRenderer=${e[pn]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			@opened-changed=${e=>Nn(i)(e.detail.value)}
			@value-changed=${n(Mn(i))}
			@text-changed=${n(Pn(i))}
			>${E(e.loading,()=>D`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return zn(e,t)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Bn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Vn)})))()}var Un,Wn;function Gn(){return(Gn=e((()=>{ye(),Fe(),L(),_(),fe(),Ee(),Rn(),U(),z(),bn(),Un=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?Oe(t):A(n),a=we(e&&I(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Wn=class extends Ln(H(R)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return D`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return D`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${V(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return D`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[pn]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			.onChange=${Mn(r)}
			@opened-changed=${e=>Nn(r)(e.detail.value)}
			.onText=${Pn(r)}
			>${E(e.loading,()=>D`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Un(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Wn)})))()}var Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar;function or(){return(or=e((()=>{L(),U(),ye(),mt(),z(),_(),Kn=(e,t)=>t.find(({value:t})=>e===t),qn=(e,t,n)=>{let r=Kn(t,n);return r?r.text:e},Jn=(e,t,n,r)=>qn(e,I(t,n),r),Yn=({valuePath:e},t,n)=>Kn(I(t,e),n),Xn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Zn=e=>t=>{e(e=>({...e,headerFocused:t}))},Qn=e=>t=>{e(e=>({...e,query:t}))},$n=e=>t=>e(t?.[0]?.value),er=({valuePath:e,trueLabel:t,falseLabel:n},r)=>I(r,e)?t:n,tr=({valuePath:e},t)=>n=>I(n,e)===t,nr=Je((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),rr=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?I(r,e)?t:n:``,ir=(e,t)=>{try{return JSON.parse(t)}catch{return null}},ar=class extends H(R){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return er(e,t)}renderCell(e,{item:t}){return er(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return D`<cosmoz-autocomplete
			compact
			mode="select"
			.title=${Jn(e.title,t,e.valuePath,nr(r,i))}
			.source=${nr(r,i)}
			.textProperty=${`text`}
			.value=${Yn(e,t,nr(r,i))}
			.onChange=${$n(n)}
			.limit=${1}
			>${E(e.loading,()=>D`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return D`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			variant="inline"
			.label=${e.title}
			.title=${Jn(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${`text`}
			.value=${Kn(t,i)}
			.text=${n}
			.onChange=${Xn(r)}
			@opened-changed=${e=>Zn(r)(e.detail.value)}
			.onText=${Qn(r)}
			.limit=${1}
			>${E(e.loading,()=>D`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return nr(e,t)}getFilterFn(e,t){if(t!=null)return tr(e,t)}toXlsxValue(e,t){return rr(e,t)}deserializeFilter(e,t){return ir(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,ar)})))()}var sr;function cr(){return(cr=e((()=>{Se(),Ut(),sr=e=>class extends Ht(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return ve(e)}}})))()}var lr;function ur(){return(ur=e((()=>{k(),L(),M(),_(),cr(),Bt(),W(),Gt(),lr=class extends sr(Wt(R)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return D`
			${E(this.disabled,()=>D`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>D`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${zt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:D`
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
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;n&&n.match(/^0+/u)?this._limitInputDebouncer.cancel():super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,lr)})))()}var dr,fr,pr,Y,X,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr;function wr(){return(wr=e((()=>{Se(),z(),en(),dr=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},fr=e=>e.length===19?e+dr(e):e,pr=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=fr(t)),t=ce(t),!t)||Number.isNaN(t.getTime())?null:t},Y=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=I(t,e));let r=pr(n);if(r!=null)return G(r.getTime())},X=(e,t,n)=>{let r=pr(e);if(r==null)return null;if(n==null||t==null)return r;let i=X(t);if(i==null)return r;let a=Y({},r),o=Y({},i);return a==null||o==null||n(a,o)===a?r:i},mr=(e,t)=>{if(t==null)return;let n=X(e);if(n!=null)return t.format(n)},hr={},gr=e=>{let t=e||``;return hr[t]||(hr[t]=new Intl.DateTimeFormat(e||void 0)),hr[t]},_r=({valuePath:e,locale:t},n)=>{let r=I(n,e||``);return r===void 0?``:(r=X(r),r===null?`Invalid Date`:mr(r,gr(t)))},vr=e=>{let t=X(e);if(t==null)return null;let n=ve(t);return n==null?null:n.slice(0,10)},yr=({valuePath:e},t)=>vr(I(t,e||``)),br=(e,t)=>{let n=X(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},xr=e=>vr(e)??``,Sr=({valuePath:e},t)=>{if(!e)return``;let n=X(I(t,e));if(!n)return``;let r=X(ve(n));return r?(r.setHours(0,0,0,0),r):``},Cr=(e,t)=>n=>{let r=Y(e,n);if(r==null)return!1;let i=Y({...e,valuePath:`min`},t),a=Y({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var Tr;function Er(){return(Er=e((()=>{k(),L(),_(),U(),ur(),J(),wr(),B(),Tr=class extends H(R){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return Cr(e,t)}getString(e,t){return _r(e,t)}toXlsxValue(e,t){return Sr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return xr(n)+`~`+xr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:X(n[1]),max:X(n[2])}:null}renderCell(e,{item:t}){return D`<div class="omnitable-cell-date">
			${_r(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return D`<cosmoz-input
			compact
			type="date"
			@change=${e=>n(br(e.target.value))}
			.value=${yr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return D`<cosmoz-omnitable-date-range-input
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return Sn(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,Tr)})))()}var Dr;function Or(){return(Or=e((()=>{L(),M(),_(),cr(),Bt(),W(),Gt(),Dr=class extends sr(Wt(R)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return D`
			${E(this.disabled,()=>D`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>D`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${zt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:D`
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
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,Dr)})))()}var kr,Ar,jr,Mr,Nr,Pr;function Fr(){return(Fr=e((()=>{z(),wr(),kr={},Ar=e=>{let t=e||``;return kr[t]||(kr[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),kr[t]},jr=({valuePath:e,locale:t},n)=>{let r=X(I(n,e||``));return r===void 0?``:r===null?`Invalid Date`:mr(r,Ar(t))},Mr=({valuePath:e},t)=>e?I(t,e):``,Nr=e=>{let t=X(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Pr=e=>{if(e!=null&&e!==``&&typeof e==`string`)return X(e.replace(/\./gu,`:`)+`Z`)}})))()}var Ir;function Lr(){return(Lr=e((()=>{qe(),B(),L(),_(),U(),Or(),J(),wr(),Fr(),Ir=class extends H(R){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return Cr(e,t)}getString(e,t){return jr(e,t)}toXlsxValue(e,t){return Mr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return Nr(n)+`~`+Nr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Pr(n[1]),max:Pr(n[2])}:null}renderCell(e,{item:t}){return jr(e,t)}renderEditCell(e,{item:t},n){return D`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(br(e.target.value))}
			.value=${jr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,filterStep:a,disabledFiltering:o,headerAlign:s,align:c},{filter:l},u,d){return D`<cosmoz-omnitable-datetime-range-input
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return Sn(e,t)}},customElements.define(Ir.is,Ir)})))()}var Rr;function zr(){return(zr=e((()=>{ye(),Fe(),L(),_(),Rn(),U(),Rr=class extends Ln(H(R)){renderCell({valuePath:e,textProperty:t},{item:n}){let r=On(n,e,t).map(e=>D`<li>${e}</li>`);return D`
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
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:n},r,i){return D`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${n}
			.onChange=${Mn(r)}
			@opened-changed=${e=>Nn(r)(e.detail.value)}
			.onText=${Pn(r)}
			>${E(e.loading,()=>D`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Rr)})))()}var Br,Vr;function Hr(){return(Hr=e((()=>{ke(),ie(),De(),O(),M(),Br=j`
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
`,Vr=({items:e})=>{let[t,n]=h(!1),r=Array.isArray(e)?e:[],i=F(()=>Math.max(0,r.length-1),[r]);if(r.length===0)return null;let a=r.length>2,o=r[0],s=a&&!t?[]:r.slice(1),c=e=>{e.stopPropagation(),e.preventDefault(),n(e=>!e)};return D`
		<ul>
			<li>
				<span>${o}</span>
			</li>
			<li class="see-more" ?hidden=${!a||t}>
				<a href="#" @click=${c}
					>${P(`and {0} more`,{0:i})}</a
				>
			</li>
			${s.map(e=>D`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!a||!t}>
				<a href="#" @click=${c}>${P(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,N(Vr,{styleSheets:[_e(Br)]}))})))()}var Ur;function Wr(){return(Wr=e((()=>{Hr(),L(),_(),ye(),Rn(),U(),bn(),Ur=class extends Ln(H(R)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return D`<cosmoz-omnitable-column-list-data
			.items=${On(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return D`<cosmoz-input
			compact
			type="text"
			.value=${kn(e,t)}
			@change=${e=>n(e.target.value.split(/,\s*/gu))}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return D`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[pn]?.itemRenderer}
			.value=${t}
			.text=${n}
			.onChange=${Mn(r)}
			@opened-changed=${e=>Nn(r)(e.detail.value)}
			.onText=${Pn(r)}
			>${E(e.loading,()=>D`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Ur)})))()}var Gr;function Kr(){return(Kr=e((()=>{k(),L(),M(),_(),Bt(),W(),Ut(),Gt(),Gr=class extends Ht(Wt(R)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return D`
			${E(this.disabled,()=>D`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>D`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${zt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:D`
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
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Gr)})))()}var qr;function Jr(){return(Jr=e((()=>{k(),B(),L(),_(),U(),z(),Kr(),J(),en(),qr=class extends H(R){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=K({...e,valuePath:`min`},t),r=K({...e,valuePath:`max`},t);if(n!=null||r!=null)return $t(e,t)}getString(e,t){return Qt(e,t)}toXlsxValue({valuePath:e},t){return I(t,e)}getComparableValue(e,t){return K(e,t)}serializeFilter(e,t){if(t==null)return;let n=G(t.min),r=G(t.max);if(n!=null||r!=null)return Xt(n)+`~`+Xt(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:G(n[1]),max:G(n[2])}:null}renderCell(e,{item:t}){return D`<div class="omnitable-cell-number">
			${Qt(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return D`<cosmoz-input
			compact
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Yt(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,maximumFractionDigits:a,minimumFractionDigits:o,autoupdate:s,disabledFiltering:c,headerAlign:l,align:u},{filter:d},f,p){return D`<cosmoz-omnitable-number-range-input
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return Sn(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,qr)})))()}var Yr;function Xr(){return(Xr=e((()=>{k(),L(),M(),_(),cr(),Bt(),W(),Gt(),Yr=class extends sr(Wt(R)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return D`
			${E(this.disabled,()=>D`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>D`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${zt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:D`
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
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Yr)})))()}var Z,Zr,Qr,$r,ei,ti,ni,ri,ii,ai;function oi(){return(oi=e((()=>{Se(),z(),wr(),en(),Z=(e,t,n)=>{let r=typeof e==`string`&&e.length>3&&e.length<=9?fr(`1970-01-01T`+e):e;return X(r,t,n)},Zr={},Qr=e=>{let t=e||``;return Zr[t]||(Zr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Zr[t]},$r=({valuePath:e,locale:t},n)=>{let r=Z(I(n,e||``));return r===void 0?``:r===null?`Invalid Date`:mr(r,Qr(t))},ei=(e,t)=>e.valuePath?$r(e,t):``,ti=e=>{let t=Z(e);if(t==null)return null;let n=ve(t);return n&&n.slice(11,19)},ni=({valuePath:e},t)=>{if(t==null)return;let n=ti(e==null?t:I(t,e));if(n==null)return;let r=Z(fr(`1970-01-01T`+n));return r==null?r:G(r.getTime())},ri=(e,t)=>n=>{let r=ni(e,n);if(r==null)return!1;let i=ni({...e,valuePath:`min`},t),a=ni({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},ii=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},ai=e=>{if(e!=null&&e!==``)return Z(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})))()}var si;function ci(){return(ci=e((()=>{k(),B(),L(),_(),U(),Xr(),J(),oi(),si=class extends H(R){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=ni({...e,valuePath:`min`},t),r=ni({...e,valuePath:`max`},t);if(n!=null||r!=null)return ri(e,t)}getString(e,t){return $r(e,t)}toXlsxValue(e,t){return ei(e,t)}getComparableValue(e,t){return ni(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return ii(n)+`~`+ii(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:ai(n[1]),max:ai(n[2])}:null}renderCell(e,{item:t}){return $r(e,t)}renderEditCell(e,{item:t},n){return D`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${$r(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,locale:r,filterStep:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return D`<cosmoz-omnitable-time-range-input
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return Sn(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,si)})))()}function li(){return(li=e((()=>{Tn(),Hn(),Gn(),or(),Er(),Lr(),zr(),Wr(),Jr(),ci()})))()}var ui;function di(){return(di=e((()=>{O(),_(),ui=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return u;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):u},customElements.define(`cosmoz-omnitable-group-row`,N(ui,{useShadowDOM:!1}))})))()}var fi;function pi(){return(pi=e((()=>{O(),_(),fi=e=>{let{column:t}=e;return b(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),u},customElements.define(`cosmoz-omnitable-resize-nub`,N(fi))})))()}var mi,hi,gi,_i;function vi(){return(vi=e((()=>{Ve(),O(),w(),m(),mi=({column:e,on:t,descending:n,setOn:r,setDescending:i})=>{let{name:a,title:o}=e??{};return D`<cosmoz-button
		variant="tertiary"
		class="sg"
		title=${te(o)}
		data-on=${te(a===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(a),i(!1)),t===`asc`?i(!0):t===`desc`&&(r(),i(!1))}}
	>
		<span>${o}</span> ${a===t?d({width:`12`,height:`12`}):S({width:`12`,height:`12`})}
	</cosmoz-button>`},hi=({columns:e,...t})=>e?.map(e=>mi({column:e,...t})),gi=()=>D`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>hi({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,_i=()=>D`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>hi({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})))()}function yi(e,t,{suffix:n=``,read:r,write:i,ready:a=!0,multi:o}={}){let s=oe({param:t,suffix:n,link:o?wi:Ci,write:i??Te}),c=F(()=>{if(t==null)return!1;if(o){let e=Ze(t+n);return Object.keys(e).length>0}return pt(t+n)!==void 0},[]),[l,u]=h(()=>{if(t==null)return e;if(o){let i=Ze(t+n,r);return Object.keys(i).length>0?i:e}return pt(t+n,r)??e}),d=p(e=>u(t=>{let n=bi(e)?e(t):e;return s.param!=null&&ht(s.link(s.param+s.suffix,n,s.write),null,{notify:!1}),n}),[]);return b(()=>{s.param!=null&&a&&!c&&e!=null&&d(e)},[a]),[l,d]}var bi,xi,Si,Ci,wi;function Ti(){return(Ti=e((()=>{gt(),pe(),t(),tt(),O(),bi=e=>typeof e==`function`,xi=e=>(t,n,r=Te)=>{let i=nt(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},Si=e=>e==null||e===``,Ci=xi((e,t,n,r)=>Si(n(t))?r.delete(e):r.set(e,n(t))),wi=xi((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>Si(n)?r.delete(e+t):r.set(e+t,n))})})))()}var Ei,Di,Oi,ki,Ai;function ji(){return(ji=e((()=>{O(),Ti(),Ei=e=>[!0,`true`,1,`yes`,`on`].includes(e),Di=e=>e===``||(e==null?void 0:Ei(e)),Oi=(e,t,n)=>p(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),ki=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[o,s]=yi(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[c,l]=yi(Di(n.descending),t,{suffix:`-descending`,read:Di,ready:a}),[u,d]=yi(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[f,m]=yi(Di(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:Di,ready:a}),h=F(()=>e.find(e=>e.name===o),[e,o]),g=F(()=>e.find(e=>e.name===u),[e,u]),_={groupOn:u,setGroupOn:Oi(d,`groupOn`,r),groupOnDescending:f,setGroupOnDescending:Oi(m,`groupOnDescending`,r),sortOn:o,setSortOn:Oi(s,`sortOn`,r),descending:c,setDescending:Oi(l,`descending`,r),columns:e},v=F(()=>_,Object.values(_)),y=p(e=>{s(typeof e.sortOn==`string`?e.sortOn:void 0),d(typeof e.groupOn==`string`?e.groupOn:void 0),l(typeof e.descending==`boolean`?e.descending:void 0),m(typeof e.groupOnDescending==`boolean`?e.groupOnDescending:void 0)},[]);return b(()=>void(i.current=y),[]),{...v,sortAndGroup:v,groupOnColumn:g,sortOnColumn:h}},Ai=Ne(void 0),customElements.define(`sort-and-group-provider`,Ai.Provider),customElements.define(`sort-and-group-consumer`,N(({render:e})=>e(x(Ai)),{useShadowDOM:!1}))})))()}var Mi,Ni;function Pi(){return(Pi=e((()=>{O(),se(),pi(),vi(),ji(),Mi=({data:e,columns:t,groupOnColumn:n,filters:r,setFilterState:i,sortAndGroup:{sortOn:a,setSortOn:o,descending:s,setDescending:c}={}})=>ae(t,e=>e.name,t=>[D`<div
				class="cell ${t.headerCellClass} header-cell"
				align="${t.headerAlign??t.align??`left`}"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,r[t.name]??{},e=>i(t.name,e),t.source(t,e))}
				${E(!t.noSort,()=>mi({on:a,setOn:o,descending:s,setDescending:c,column:t}))}
			</div>`,D`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Ni=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let i=x(Ai);return D`
		${E(e,e=>Mi({columns:e,sortAndGroup:i,...r}))}
		${E(!n,()=>D` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,N(Ni,{useShadowDOM:!1}))})))()}var Fi,Ii;function Li(){return(Li=e((()=>{ke(),ie(),De(),O(),Fi=j`
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
`,Ii=({column:e})=>D`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,N(Ii,{styleSheets:[_e(Fi)]}))})))()}var Ri;function zi(){return(zi=e((()=>{O(),_(),Li(),Ri=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>ot(e,e=>D`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,N(Ri,{useShadowDOM:!1}))})))()}var Bi,Vi;function Hi(){return(Hi=e((()=>{O(),se(),Bi=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Vi=({columns:e,groupOnColumn:t,item:n,index:r,selected:i,expanded:a,onItemChange:o})=>ae(e,e=>e.name,e=>D`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				align="${e.align??`left`}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${Bi(e,{item:n,index:r,selected:i,expanded:a},o)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,N(Vi,{useShadowDOM:!1}))})))()}var Ui,Wi;function Gi(){return(Gi=e((()=>{ke(),De(),Ui=j`
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
`,Wi=j`
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

	${Ui}

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
`})))()}var Ki,qi;function Ji(){return(Ji=e((()=>{$e(),Ki=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},qi=(e,t,n)=>{let r=e.map(e=>Ki(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Ki(String(n))}).join(`;`)+`
`);i.unshift(r),et(new File(i,n,{type:`text/csv;charset=utf-8`}))}})))()}var Yi,Xi;function Zi(){return(Zi=e((()=>{ft(),$e(),Yi=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Xi=(e,t,n,r)=>{let i=Yi(e,t),a=new at(n).addSheetFromData(i,r).generate();et(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})))()}var Qi,Q,$i;function $(){return($=e((()=>{Qi=Symbol(`index`),Q=Symbol(`All`),$i=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})))()}var ea;function ta(){return(ta=e((()=>{Ye(),m(),M(),_(),Ji(),Zi(),$(),ea=({columns:e,selectedItems:t,setSelectedItems:n,csvFilename:i,xlsxFilename:a,xlsxSheetname:o,topPlacement:s,enableSelectAll:c,allSelected:l,allItemsCount:u})=>{let d=t===Q,f=d||t.length>0,p=t!==Q&&c&&l,m=t=>D`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${s}
		>
			${r({slot:`button`})}
			<cosmoz-button
				variant="tertiary"
				@click=${()=>qi(e,t,i)}
			>
				${P(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Xi(e,t,a,o)}
			>
				${P(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,h=E(d,()=>u===void 0?P(`All items selected`):P(`All {count} items selected`,{count:u}),()=>P(`{count} selected item`,{count:t===Q?0:t.length}));return D`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${f}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${h}
			${E(p,()=>D`&nbsp;<span
							part="select-all-items"
							class="selectAllItems"
							role="button"
							tabindex="0"
							style="cursor: pointer; color: var(--cz-color-text-brand);"
							@click=${()=>n(Q)}
						>
							${P(`Select all items`)}
						</span>`)}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${E(t!==Q,()=>m(t))}
	</cosmoz-bottom-bar>`}})))()}var na;function ra(){return(ra=e((()=>{_(),na=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:s,setFilterState:c,settingsConfig:l,hideSelectAll:u})=>D`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${E(!u,()=>D`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${E(u,()=>D` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`})))()}var ia,aa,oa;function sa(){return(sa=e((()=>{O(),ia=C`
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
`,aa=(e,t)=>{let n=t==null?void 0:e?.[t];return n==null?``:`width: ${n}px; padding: 0 min(3px, ${n/2}px)`},oa=({settingsConfig:e,widths:t})=>{let{columns:n,collapsed:r}=e,i=n.filter(e=>!r.some(t=>t.name===e.name));return D`<div class="skeleton">
		${Array.from({length:5},()=>D`<div>
					<div class="checkbox"></div>
					${i.map(e=>D`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
								style=${aa(t,e.name)}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,N(oa,{styleSheets:[ia]}))})))()}var ca;function la(){return(la=e((()=>{O(),sa(),st(),M(),_(),ca=(e,t)=>{let{settingsConfig:r}=e,{processedItems:i,dataIsValid:a,filterIsTooStrict:o,loading:s,displayEmptyGroups:c,compareItemsFn:l,selectedItems:u,setSelectedItems:d,renderItem:f,renderGroup:p,error:m,partWidths:h}=t;return D`${E(!s&&!a&&!m,()=>D`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${ut({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${P(`Working set empty`)}</h3>
							<p>${P(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${E(o,()=>D`<div class="tableContent-empty">
					${ut({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
					<div>
						<h3>${P(`Filter too strict`)}</h3>
						<p>${P(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${E(s&&!i.length,()=>D`<div class="tableContent-empty overlay has-skeleton">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${r}
						.widths=${h}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${E(s&&i.length,()=>D`<div class="tableContent-empty overlay spinner"></div>`)}
		${E(m,()=>D`<div class="tableContent-empty overlay">
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
				@selected-items-changed=${n(d)}
				.displayEmptyGroups=${c}
				.compareItemsFn=${l}
				.renderItem=${f}
				.renderGroup=${p}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})))()}var ua,da;function fa(){return(fa=e((()=>{ke(),De(),Gi(),ua=j`
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
	${Ui}
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
`,da=j`
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
`})))()}var pa,ma;function ha(){return(ha=e((()=>{t(),O(),pa=e=>{let t=parseInt(e??``,10);return isFinite(t)?t:void 0},ma=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,o=oe({collapsed:i,settings:n.columns,requestTween:a,setSettings:p(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:p(e=>{let t=e.target instanceof Element?e.target:null;t&&t.closest(`.pull`)&&(o.handle=e.currentTarget instanceof HTMLElement?e.currentTarget:null)},[o]),onDragStart:p(e=>{let t=e.target instanceof HTMLElement?e.target:null,n=pa(t?.dataset.index);if(!t||!o.handle?.contains(t)||n==null)return e.preventDefault();o.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,String(n)),e.dataTransfer.setData(`text/plain`,String(n)),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>{(e.target instanceof HTMLElement?e.target:null)?.classList.remove(`drag`)},{once:!0})},[o]),onDragEnter:p(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:p(e=>{e.preventDefault(),e.currentTarget instanceof HTMLElement&&e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:p(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||t.classList.remove(`dragover`))},[]),onDrop:p(e=>{let t=pa(e.dataTransfer?.getData(`omnitable/sort-index`)),n=e.currentTarget instanceof HTMLElement?e.currentTarget:null,r=pa(n?.dataset.index),{settings:i,setSettings:a,requestTween:s}=o;n?.classList.remove(`dragover`),e.preventDefault();let c=i.slice();c.splice(r+(t>=r?0:-1),0,c.splice(t,1)[0]),s?.(),a(c)},[o]),onToggle:p(e=>{let{settings:t,setSettings:n,requestTween:r}=o,i=t.map(e=>({...e,disabled:e.disabled||o.collapsed?.some(t=>t.name===e.name)})),a=e.target instanceof HTMLInputElement?e.target:null,s=pa((e.target instanceof Element?e.target:null)?.closest(`[data-index]`)?.getAttribute(`data-index`));s!=null&&(i.splice(s,1,{...t[s],disabled:!a?.checked,priority:a?.checked?t.reduce((e,t)=>Math.max(e,t.priority??0),0)+1:t[s]?.priority}),r?.(),n(i))},[o])}}})))()}var ga,_a,va,ya;function ba(){return(ba=e((()=>{Ve(),dt(),Re(),m(),ie(),De(),de(),O(),M(),vi(),fa(),ha(),ga=[ct({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Xe],_a=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:i,onDown:a,onToggle:o,collapsed:s,filters:c})=>(l,u)=>{let d=!!s?.find(e=>e.name===l.name),f=!l.disabled&&!d;return D` <div
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
				aria-label=${P(`Reorder column`)}
				variant="tertiary"
				icon-only
				class="pull"
				>${v({width:`16`,height:`16`})}</cosmoz-button
			>
			<label class="title" ?has-filter=${!ue(c[l.name]?.filter)}
				>${l.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${f}
				@click=${o}
				.indeterminate=${d}
			/>
		</div>`},va=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:a,canReset:o,opened:c,setOpened:l,...u}=ma(e);return D` <div class="headline">
			<span> ${P(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${P(`Close settings`)}"
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
				${P(`Columns`)} ${d({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${c.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(_a(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.sort}
				@click=${()=>l(e=>({...e,sort:!e.sort}))}
			>
				${P(`Sort on`)} ${d({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${c.sort}> ${_i()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.group}
				@click=${()=>l(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${P(`Group on`)} ${d({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${c.group} part="groups groups-heading"
				>${gi()}</cosmoz-collapse
			>
		</div>

		${E(n,()=>D`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${i}
						?disabled=${!o}
					>
						${P(`Reset`)}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${r}
						?disabled=${!a}
					>
						${P(`Save`)}
					</cosmoz-button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,N(va,{styleSheets:[_e(ua)]})),ya=({config:e,newLayout:t})=>D`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${ga}"
	>
		<div title="${P(`Sort and filter`)}" slot="button">
			${E(t,()=>D`<div class="headerDots">...</div>`,()=>D` ${l({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${E(e?.badge,()=>D`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,N(ya,{styleSheets:[_e(da)]}))})))()}var xa,Sa,Ca,wa,Ta;function Ea(){return(Ea=e((()=>{Ee(),xa=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],Sa=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,Ca=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(Sa(t.name))),i=e.filter(e=>e.name!=null&&!t.some(Sa(e.name))&&!n.some(Sa(e.name))),a=n.filter(e=>!t.some(Sa(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},wa=(e,t)=>({...t,...ge(Array.from(xa))(e),columns:e.columns?.map(ge([`name`,`priority`,`width`,`flex`,`disabled`]))??t?.columns}),Ta=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(xa.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?ge(Array.from(xa))(n):{},...t,columns:Ca(e,t?.columns,n?.columns)})})))()}var Da;function Oa(){return(Oa=e((()=>{Da=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})))()}var ka,Aa;function ja(){return(ja=e((()=>{O(),Oa(),ka=Ne(Da),Aa=()=>{let e=x(ka);return F(()=>e(),[e])}})))()}function Ma(){return(Ma=e((()=>{ja()})))()}var Na;function Pa(){return(Pa=e((()=>{O(),Ma(),Ea(),Na=(e,t,n,r)=>{let[i,a]=h(e?void 0:null),{read:o,write:s}=Aa();return b(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:p(async()=>{if(!e)return;let r=wa(t,i);await s(e,r),n(),a(r)},[t,i]),onReset:p(async()=>{n(),e&&i!=null&&(await s(e),a(null)),r?.()},[e,i,s,r]),hasChanges:t!=null,canReset:t!=null||i!=null}}})))()}var Fa;function Ia(){return(Ia=e((()=>{O(),bn(),Ea(),Pa(),Fa=({settingsId:e,host:t})=>{let n=F(()=>Object.fromEntries(xa.map(e=>[e,t[e]])),[]),r=g(),i=p(()=>{r.current?.(n)},[n]),[a,o]=h(),[s,c]=h({columns:!0,sort:!0}),{savedSettings:l,...u}=Na(e,a,o,i),{enabledColumns:d,disabledFiltering:f}=t,m=yn(t,{enabledColumns:d,disabledFiltering:f}),_=F(()=>Ta({columns:m,settings:a,savedSettings:l??void 0,initial:n}),[m,a,l]),v=F(()=>_.columns.map(e=>m.find(t=>t.name===e.name)).filter(e=>e!==void 0),[m,..._.columns.map(e=>e.name)]);return{...u,savedSettings:l,opened:s,setOpened:c,settings:_,columns:v,setSettings:o,resetRef:r}}})))()}function La(){return(La=e((()=>{ba(),Ia()})))()}var Ra,za;function Ba(){return(Ba=e((()=>{Ra=e=>Number.isFinite(e)?e:0,za=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=Ra(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];u>i+(a>=0?o*d:i*a/r)?(s+=i,c+=u,l+=d,n[t]=u):d===0&&(s+=i,c+=i,n[t]=i)}r-=s,a=t-c-r,i-=l,o=Ra(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t],c=a>=0?o*s:i*a/r;n[t]=i+c}return n}})))()}var Va,Ha,Ua,Wa,Ga,Ka,qa;function Ja(){return(Ja=e((()=>{Ba(),$(),Va=(e,t)=>{let n=$i(e,e=>e!=null&&e>0),r=0,i=0;return t.map((t,a)=>{let o=e[a];if(o==null||o===0)return{name:t.name,kind:`hide`};r+=o;let s=Math.round(r),c=s-i;return i=s,{name:t.name,kind:`width`,width:c,lastVisible:a===n}})},Ha=e=>`.cell[name="${e.name}"]{width: ${e.width}px;padding: 0 min(3px, ${e.width/2}px)}`,Ua=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,Wa=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`,Ga=e=>e.map(e=>{if(e.kind===`hide`)return Wa(e.name);let t=Ha(e);return e.lastVisible?`${t}\n${Ua(e.name)}`:t}).join(`
`),Ka=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Ka(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),za(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},qa=(e,t)=>e.length===0?`.cell {display: none;}`:Ga(Va(e,t))})))()}var Ya;function Xa(){return(Xa=e((()=>{O(),Ya=(e,t)=>b(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-104)});return n.observe(e),()=>n.unobserve(e)},[])})))()}var Za;function Qa(){return(Qa=e((()=>{O(),Xa(),Za=e=>{let[t,n]=h(()=>e.getBoundingClientRect().width-104);return Ya(e,n),t}})))()}var $a;function eo(){return(eo=e((()=>{O(),Ja(),$a=({canvasWidth:e,groupOnColumn:t,layoutColumns:n,config:r})=>F(()=>{if(!Array.isArray(r)||e==null||e===0)return[];let i=r.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>n==null?e:{...e,hidden:!n.includes(e.name)}).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Ka(i,e,i.length)},[e,t,r])})))()}var to;function no(){return(no=e((()=>{O(),to=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=F(()=>t<=r,[t,r]),a=F(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i]),o=F(()=>a.slice(1),[a]),s=a[0],c=!!s&&e.renderItem==null;return b(()=>{e.toggleAttribute(`mini`,c)},[c]),{isMini:c&&i,hasMiniColumn:c,miniColumn:s,miniColumns:o}}})))()}var ro;function io(){return(io=e((()=>{O(),ro=({host:e,canvasWidth:t,layout:n,setSettings:r,requestTween:i})=>{let a=g();a.current=e=>{i(),r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},b(()=>{let t=e=>a.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})))()}var ao,oo,so;function co(){return(co=e((()=>{pe(),t(),O(),ao=(e,t)=>{let n=F(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),r()},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);b(()=>{n.start()},t),b(()=>()=>n.stop(),[])},oo=(e=0,t=0)=>Math.abs(e-t)<.1,so=(e,t=1.9,n=be,r)=>{let i=oe({target:e,speedFactor:t,onConverge:r}),a=p(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>oo(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]);ao(a,[e])}})))()}var lo,uo,fo;function po(){return(po=e((()=>{t(),O(),Ja(),Qa(),eo(),no(),io(),co(),lo=e=>{let t=F(()=>new CSSStyleSheet,[]);return b(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},uo=e=>{b(()=>{e.toggleAttribute(`compact`,e.compact===!0)},[e.compact])},fo=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:a})=>{let o=Za(e),{isMini:s,hasMiniColumn:c,miniColumn:l,miniColumns:u}=to({host:e,canvasWidth:o,columns:t});uo(e);let{groupOnColumn:d}=a,f=c?[l.name]:e.headerColumns??null,m=$a({canvasWidth:o,groupOnColumn:d,layoutColumns:f,config:n.columns}),_=lo(e),v=n.columns.filter((e,t)=>m[t]==null&&e.name!==d?.name&&!e.disabled).map(e=>e.name),y=F(()=>v.map(e=>t.find(t=>t.name===e)),[t,v.join()]),[b,x]=h(1),S=p(()=>x(i??1.9),[i]),C=p(()=>x(1),[]),w=oe({columns:n.columns}),T=g({rules:void 0,widths:[]}).current,[E,ee]=h(void 0),te=e=>ee(e.reduce((e,t)=>t.kind===`width`?{...e,[t.name]:t.width}:e,{}));return so(m,b,t=>{let n=Va(t,w.columns),r=qa(t,w.columns)===`.cell {display: none;}`?`empty`:n.map(e=>e.kind).join(`#`)+`#`+(n.findIndex(e=>e.lastVisible)+1);if(T.rules!==r){_.replaceSync(qa(t,w.columns)),T.rules=r,T.widths=n.map(e=>e.kind===`width`?e.width:void 0),te(n);return}let i=_.cssRules,a=!1;n.forEach((e,t)=>{if(e.kind!==`width`||T.widths[t]===e.width)return;let n=i[t];n.style.width=`${e.width}px`,n.style.padding=`0 min(3px, ${e.width/2}px)`,T.widths[t]=e.width,a=!0}),a&&e.loading&&te(n)},C),ro({host:e,canvasWidth:o,layout:m,setSettings:e=>r(e(n)),requestTween:S}),{isMini:s,collapsedColumns:y,miniColumns:u,requestTween:S,partWidths:E}}})))()}var mo;function ho(){return(ho=e((()=>{mo=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})))()}var go;function _o(){return(_o=e((()=>{O(),$(),go=({host:e,selectedItems:t,data:n,dataIsValid:r,columns:i,sortAndGroupOptions:a,collapsedColumns:o,settings:s,filterFunctions:c,settingS:l,filters:u,setFilterState:d,hideSelectAll:f,headerColumns:p,requestTween:m,...h})=>{let g=F(()=>p==null?i:i.filter(e=>p.includes(e.name)),[i,p]),_=t===Q||!!n&&n.length>0&&Array.isArray(t)&&t.length===n.length,v=t=>{if(!(t.target instanceof HTMLInputElement))return;let n=e.shadowRoot.querySelector(`#groupedList`);t.target.checked?n.selectAll():n.deselectAll()},{groupOnColumn:y}=a,b=F(()=>[y,...o,...s.columns.filter(e=>e.disabled)].some(e=>!!e&&!!e.name&&Object.keys(c).includes(e.name)),[c,s,o]);return{allSelected:_,onAllCheckboxChange:v,data:n,dataIsValid:r,columns:g,settingsConfig:F(()=>({...l,collapsed:o,badge:b,filters:u,requestTween:m}),[l,o,b,u,m]),filters:u,groupOnColumn:y,setFilterState:d,hideSelectAll:f,sortAndGroup:a.sortAndGroup,...h}}})))()}var vo,yo;function bo(){return(bo=e((()=>{Ve(),m(),O(),M(),vo=e=>e?`groupRow groupRow-folded`:`groupRow`,yo=(e,t,{selected:n,folded:r,toggleFold:i,onCheckboxChange:a,groupOnColumn:o,dataIsValid:s})=>D` <div
		class="${vo(r)}"
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
			aria-label=${P(`Expand or collapse`)}
			variant="tertiary"
			icon-only
			class="expand"
			?aria-expanded="${r}"
			@click=${i}
		>
			${d({width:`16`,height:`16`})}
		</cosmoz-button>
	</div>`})))()}var xo;function So(){return(So=e((()=>{_(),xo=({item:e,index:t})=>n=>E((n?.length??0)>0,()=>D`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>D`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`)})))()}var Co;function wo(){return(wo=e((()=>{Ve(),m(),de(),O(),M(),So(),Co=(e,t,{selected:n,expanded:r,toggleCollapse:i,columns:a,collapsedColumns:o,miniColumns:s,onItemClick:c,onCheckboxChange:l,onItemChange:u,rowPartFn:f,groupOnColumn:p,dataIsValid:m})=>D`
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
					aria-label=${P(`Expand or collapse`)}
					variant="tertiary"
					icon-only
					class="expand"
					?hidden="${ue(o.length)}"
					?aria-expanded="${r}"
					@click="${i}"
				>
					${d({width:`16`,height:`16`})}
				</cosmoz-button>
			</div>
			${xo({item:e,index:t})(s)}
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
	`})))()}var To,Eo,Do;function Oo(){return(Oo=e((()=>{O(),bo(),wo(),$(),J(),To=e=>e instanceof HTMLInputElement,Eo=e=>e instanceof HTMLElement,Do=({host:e,error:t,dataIsValid:n,processedItems:r,columns:i,collapsedColumns:a,miniColumns:o,sortAndGroupOptions:s,rowPartFn:c,...l})=>{let{loading:u=!1,displayEmptyGroups:d=!1,compareItemsFn:f}=e,m=e.renderItem??Co,h=e.renderGroup??yo,_=g({shiftKey:!1,ctrlKey:!1}),v=p(t=>{if(!To(t.target))return;let n=t.target,r=n.dataItem,i=n.checked,a=e.shadowRoot.querySelector(`#groupedList`);_.current.shiftKey?a.toggleSelectTo(r,i):_.current.ctrlKey?(n.checked=!0,a.selectOnly(r)):a.toggleSelect(r,i),t.preventDefault(),t.stopPropagation()},[]);b(()=>{let e=({shiftKey:e,ctrlKey:t})=>{_.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let y=p(t=>{if(!Eo(t.currentTarget))return;let n=t.currentTarget,r=t.composedPath();r.slice(0,r.indexOf(n)).some(e=>e instanceof Element&&e.matches(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:n.dataItem,index:n.dataIndex}}))},[]),{groupOnColumn:x}=s,S=p((t,n)=>r=>Cn(e,t,n,r),[]);return{...l,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:u,compareItemsFn:f,displayEmptyGroups:d,error:t,renderItem:F(()=>(e,t,r)=>m(e,e[Qi],{...r,columns:i,collapsedColumns:a,miniColumns:o,onItemClick:y,onCheckboxChange:v,onItemChange:S,rowPartFn:c,groupOnColumn:x,dataIsValid:n}),[m,i,a,o,y,v,S,c,x,n]),renderGroup:F(()=>(e,t,r)=>h(e,e[Qi],{...r,columns:i,onCheckboxChange:v,groupOnColumn:x,dataIsValid:n}),[h,i,v,x,n])}}})))()}var ko;function Ao(){return(Ao=e((()=>{ko=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})))()}var jo,Mo,No,Po,Fo,Io;function Lo(){return(Lo=e((()=>{pe(),O(),Ao(),bn(),Ti(),$(),jo=(e,t)=>(n,r)=>ko(e(n),e(r))*(t?-1:1),Mo=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),No=(e,t)=>{e&&t&&Object.entries(t).forEach(([t,n])=>{let r=e[pn];r.__ownChange=!0,Object.assign(r,{[t]:n}),r.__ownChange=!1,r.dispatchEvent(new CustomEvent(`${Mo(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},Po=(e,t)=>Object.assign(e,{[Qi]:t}),Fo=Symbol(`unparsed`),Io=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:o,groupOnDescending:s,sortOnColumn:c,descending:l}=r,u=p(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),d=p(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[Fo]:n}];let i={filter:r.deserializeFilter(r,n)};return No(r,i),[e,i]},[t]),[f,m]=yi({},n,{multi:!0,suffix:`-filter--`,write:u,read:d}),h=p((e,n)=>m(r=>{let i=re(n,r[e]);return No(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,m]),g=F(()=>Object.values(f).map(e=>e.filter),[f]),_=F(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,f[e.name]?.filter)]).filter(e=>!!e[1])),[t,...g]),v=F(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(_).length===0||a?e.slice():e.filter(e=>Object.values(_).every(t=>t(e))),[e,_,a]),y=F(()=>{if(!i&&!o&&c!=null&&c.sortOn!=null)return v.slice().sort(jo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l));if(o!=null&&o.groupOn!=null){let e=v.reduce((e,t)=>{let n=o.getComparableValue({...o,valuePath:o.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(jo(e=>o.getComparableValue({...o,valuePath:o.groupOn},e.items[0]),s)),!c||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(jo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l)),e))}return v},[v,o,s,c,l,i]),x=F(()=>{let e=0,t=0,n=[];return y.forEach(r=>{if(`items`in r&&Array.isArray(r.items))Po(r,t++),r.items.forEach(t=>{Po(t,e++),n.push(t)});else return Po(r,e++),n.push(r)},[]),n},[y]);return b(()=>{m(e=>Object.values(e).some(e=>e[Fo]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>{let n=t[Fo];return n==null?[e,t]:d([e,n])})):e)},[d]),{processedItems:y,visibleData:x,filters:f,filterFunctions:_,setFilterState:h}}})))()}var Ro,zo,Bo;function Vo(){return(Vo=e((()=>{Ae(),je(),O(),Ro=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(e){let n=[];for(let r=e.length-1;r>=0;--r){let i=t(e[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);i>-1&&n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},zo=e=>{let[t,n]=h(!1);return b(()=>{e&&n(!0)},[e]),t},Bo=({host:e,visibleData:t,filters:n,ready:r=!0,...a})=>{let{setFilterState:o}=a,s=F(()=>Ro(e),[]),[c,l]=me(`selectedItems`,[]);y(a,Object.values(a)),y(s,Object.values(s)),b(()=>{let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;o(t.name,e=>({...typeof e==`object`&&e?e:{},...t.state}))};return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),i(`visibleData`,t),i(`sortedFilteredGroupedItems`,a.sortedFilteredGroupedItems),i(`sortOn`,a.sortOn),i(`descending`,a.descending),i(`isMini`,a.isMini),i(`settingsReady`,zo(r));let u=F(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return i(`filters`,u,Object.values(u)),{selectedItems:c,setSelectedItems:l}}})))()}var Ho;function Uo(){return(Uo=e((()=>{La(),po(),ho(),_o(),Oo(),Lo(),Vo(),ji(),Ho=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Fa({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=h!==void 0,_=ki(p,t,{settings:d,setSettings:f,resetRef:m,ready:g}),{processedItems:v,visibleData:y,filters:b,setFilterState:x,filterFunctions:S}=Io({data:r,columns:p,hashParam:t,sortAndGroupOptions:_,noLocalSort:o,noLocalFilter:s}),{isMini:C,collapsedColumns:w,miniColumns:T,requestTween:E,partWidths:ee}=fo({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:_}),te=r&&Array.isArray(r)&&r.length>0,{selectedItems:D,setSelectedItems:ne}=Bo({host:e,visibleData:y,sortedFilteredGroupedItems:v,columns:p,filters:b,setFilterState:x,isMini:C,ready:g,..._}),O=go({host:e,selectedItems:D,sortAndGroupOptions:_,dataIsValid:te,data:r,columns:p,filters:b,collapsedColumns:w,settings:d,filterFunctions:S,settingS:u,setFilterState:x,hideSelectAll:e.hideSelectAll===!0,headerColumns:e.headerColumns??null,requestTween:E});return{header:O,list:Do({host:e,error:c,dataIsValid:te,processedItems:v,selectedItems:D,setSelectedItems:ne,columns:p,collapsedColumns:w,miniColumns:T,sortAndGroupOptions:_,rowPartFn:l,partWidths:ee}),footer:mo({host:e,selectedItems:D,allSelected:O.allSelected,setSelectedItems:ne,columns:p,enableSelectAll:e.enableSelectAll,allItemsCount:e.allItemsCount})}}})))()}var Wo;function Go(){return(Go=e((()=>{O(),_(),Wo=e=>{let{item:t,index:n,renderFn:r}=e;return t==null||n==null||r==null?u:r(t,n)},customElements.define(`cosmoz-grouped-list-row`,N(Wo,{useShadowDOM:!1}))})))()}var Ko,qo,Jo,Yo,Xo,Zo;function Qo(){return(Qo=e((()=>{Ce(),xe(),Ko=40,qo=24,Jo=12,Yo=16,Xo=class extends Me{constructor(...e){super(...e),this._items=[],this._renderRow=()=>{},this._host=null,this._canvas=null,this._clip=null,this._scroller=null,this._pool=[],this._heights=[],this._prefix=[0],this._itemsVersion=``,this._built=!1,this._rafId=null,this._ro=null,this._scrollerTarget=null,this._observing=new WeakSet,this._boundRenderRow=null,this.pumpCount=0,this._onWheel=e=>{let t=this._scroller;if(!t||e.ctrlKey)return;e.preventDefault();let n=1;e.deltaMode===1?n=40:e.deltaMode===2&&(n=t.clientHeight),e.deltaY!==0&&(t.scrollTop+=e.deltaY*n),e.deltaX!==0&&(t.scrollLeft+=e.deltaX*n)},this._onKeydown=e=>{let t=this._scroller;if(!t||e.defaultPrevented||e.ctrlKey||e.altKey||e.metaKey||this._isInteractiveKeyTarget(e))return;let n=null,r=null;switch(e.key){case`ArrowUp`:n=-40;break;case`ArrowDown`:n=40;break;case`PageUp`:n=-Math.round(t.clientHeight*.9);break;case`PageDown`:n=Math.round(t.clientHeight*.9);break;case` `:n=e.shiftKey?-t.clientHeight:t.clientHeight;break;case`Home`:r=0;break;case`End`:r=t.scrollHeight;break;default:return}e.preventDefault(),n==null?r!=null&&(t.scrollTop=r):t.scrollTop+=n},this._activePointer=null,this._dragStartX=0,this._dragStartY=0,this._dragStartScrollTop=0,this._dragStartScrollLeft=0,this._dragScrolling=!1,this._onPointerDown=e=>{if(this._activePointer!=null){this._endPointerDrag();return}if(e.pointerType!==`touch`&&e.pointerType!==`pen`)return;let t=this._scroller;t&&(this._activePointer=e.pointerId,this._dragStartX=e.clientX,this._dragStartY=e.clientY,this._dragStartScrollTop=t.scrollTop,this._dragStartScrollLeft=t.scrollLeft,this._dragScrolling=!1)},this._onPointerMove=e=>{if(e.pointerId!==this._activePointer)return;let t=this._scroller;if(!t)return;let n=e.clientX-this._dragStartX,r=e.clientY-this._dragStartY;if(!this._dragScrolling){if(Math.abs(n)<2&&Math.abs(r)<2)return;this._dragScrolling=!0}e.preventDefault(),t.scrollTop=this._dragStartScrollTop-r,t.scrollLeft=this._dragStartScrollLeft-n},this._onPointerEnd=e=>{e.pointerId===this._activePointer&&this._endPointerDrag()},this._onScroll=()=>{this._pump(),this._rafId??=requestAnimationFrame(()=>{this._rafId=null,this._pump()})},this._appliedTotal=-1,this._anchorIndex=0,this._lastAnchorTop=0,this._boxTop=-1,this._boxLeft=-1,this._boxWidth=-1,this._boxHeight=-1,this._appliedScroll=NaN,this._measuredViewport=0,this._minMeasured=1/0,this._avgRowHeight=Ko,this._measured=new Uint8Array}_debugPump(){let e=document.defaultView;e.__rec=this;let t=this._pool.filter(e=>e.bound!=null).length,n=this._pool.find(e=>e.bound!=null);(e.__recLog??=[]).push({t:`pumpEnd`,items:this._items.length,pumpCount:this.pumpCount,pool:this._pool.length,bound:t,firstBound:n?String(n.bound):`none`,firstBoundItem:n?.boundItem?String(n.boundItem).slice(0,20):`none`,firstVis:n?n.el.style.visibility:`none`,firstIndex:this._firstIndex(this._scroller?.scrollTop??0),scrollTop:this._scroller?.scrollTop})}render(e){return this._items=e.items??[],this._renderRow=e.renderRow,this._built&&this._schedule(),T}update(e,t){let n=t[0];if(!n)return T;this._items=n.items??[],this._renderRow=n.renderRow;let r=document.defaultView;if((r.__recLog??=[]).push({t:`update`,n:this._items.length,scroller:this._scroller?.clientHeight}),!this._built){let t=e;this._build(t.parentNode),this._built=!0}if(this._heights.length!==this._items.length&&(this._heights.length=this._items.length,this._heights.fill(Ko),this._invalidate()),this._measured.length!==this._items.length&&(this._measured=new Uint8Array(this._items.length)),this._boundRenderRow!==this._renderRow){this._boundRenderRow=this._renderRow;for(let e of this._pool){if(e.bound==null)continue;let t=e.bound;e.el.renderFn=(e=>this._renderRow(e,t))}}return this._pump(),T}_build(e){let t=e??document.createElement(`div`);this._host=t,t.style.flexShrink=`0`;let n=document.createElement(`div`);n.className=`glist-recycler-viewport`,n.style.position=`absolute`,n.style.overflow=`hidden`,n.style.touchAction=`none`;let r=document.createElement(`div`);r.className=`glist-recycler-canvas`,r.style.position=`absolute`,r.style.top=`0`,r.style.left=`0`,r.style.width=`100%`,r.style.willChange=`transform`,n.appendChild(r),this._clip=n,this._canvas=r,this._resolveScroller(),this._measureViewport(),this._attachCanvas(),this._ro=new ResizeObserver(e=>this._onResize(e)),this._schedule()}_resolveScroller(){let e=this._host?.parentElement;for(;e;){let t=getComputedStyle(e).overflowY;if(t===`auto`||t===`scroll`||t===`overlay`)break;e=e.parentElement}this._scroller=e??null,e&&(this._scrollerTarget=e,e.addEventListener(`scroll`,this._onScroll,{passive:!0}))}_attachCanvas(){let e=this._clip,t=this._scroller;if(!e||!t)return;let n=t.parentElement;n&&e.parentElement!==n&&n.appendChild(e),e.addEventListener(`wheel`,this._onWheel,{passive:!1}),e.addEventListener(`keydown`,this._onKeydown),e.addEventListener(`pointerdown`,this._onPointerDown),e.addEventListener(`pointermove`,this._onPointerMove),e.addEventListener(`pointerup`,this._onPointerEnd),e.addEventListener(`pointercancel`,this._onPointerEnd),this._syncCanvasBox()}_syncCanvasBox(){let e=this._scroller,t=this._clip;if(!e||!t)return!1;let n=e.offsetTop,r=e.offsetLeft,i=e.clientWidth,a=e.clientHeight;return n===this._boxTop&&r===this._boxLeft&&i===this._boxWidth&&a===this._boxHeight?!1:(this._boxTop=n,this._boxLeft=r,this._boxWidth=i,this._boxHeight=a,t.style.top=`${n}px`,t.style.left=`${r}px`,t.style.width=`${i}px`,t.style.height=`${a}px`,!0)}_isInteractiveKeyTarget(e){let t=e.composedPath()[0]??e.target;return t instanceof Element?t instanceof HTMLElement&&t.isContentEditable?!0:t.matches(`button, input, select, textarea, a[href], [contenteditable], [role="checkbox"], [role="option"], [role="radio"], [role="menuitem"]`):!1}_endPointerDrag(){this._activePointer=null,this._dragScrolling=!1}_measureViewport(){let e=this._scroller?.clientHeight??300,t=Math.max(Yo,Math.ceil(e/this._rowBudget())+24);this._ensurePool(t)}_ensurePool(e){for(;this._pool.length<e;){let e=document.createElement(`cosmoz-grouped-list-row`);e.style.position=`absolute`,e.style.left=`0`,e.style.right=`0`,e.style.top=`0`,e.style.visibility=`hidden`,this._canvas?.appendChild(e),this._pool.push({el:e,height:Ko,bound:void 0})}}_onResize(e){let t=!1;for(let n of e){let e=this._pool.find(e=>e.el===n.target);if(!e)continue;let r=Math.round(e.el.getBoundingClientRect().height);r>0&&(e.h=r);let i=e.bound;if(!(i==null||i<0||i>=this._items.length)&&r>0){r<this._minMeasured&&(this._minMeasured=r);let e=this._measured[i];this._heights[i]!==r&&(this._heights[i]=r,t=!0),this._measured[i]=1,e||(t=!0)}}if(t){this._invalidate(),this._syncBoundTransforms();let e=this._offset(this._anchorIndex)-this._lastAnchorTop;e!==0&&this._scroller&&(this._scroller.scrollTop+=e,this._lastAnchorTop+=e),this._schedule()}}_syncBoundTransforms(){for(let e of this._pool){if(e.bound==null){e.off=0;continue}let t=this._offset(e.bound);t!==e.off&&(e.el.style.transform=`translate3d(0, ${t}px, 0)`,e.off=t)}}_logTotalChange(e,t){if(e===this._appliedTotal)return;let n=this._appliedTotal;this._appliedTotal=e,document.defaultView.__recTotal?.(e,n,t)}_invalidate(){let e=0,t=0;for(let n=0;n<this._items.length;n++)this._measured[n]&&(e+=this._heights[n]??Ko,t++);t>0&&(this._avgRowHeight=e/t),this._prefix.length=0,this._prefix.push(0);for(let e=0;e<this._items.length;e++)this._prefix.push((this._prefix[e]??0)+(this._measured[e]?this._heights[e]??Ko:this._avgRowHeight));this._host&&(this._host.style.height=`${this._prefix[this._items.length]??0}px`)}_offset(e){return this._prefix[e]??0}_firstIndex(e){let t=this._items.length,n=0,r=Math.max(0,t-1),i=0;for(;n<=r;){let t=Math.floor((n+r)/2);(this._prefix[t]??0)<=e?(i=t,n=t+1):r=t-1}return i}_schedule(){this._rafId??=requestAnimationFrame(()=>{this._rafId=null,this._pump()})}_pump(){this.pumpCount=(this.pumpCount??0)+1;let e=this._items.length;this._prefix.length!==e+1&&this._invalidate();let t=this._scroller?.scrollTop??0,n=this._scroller?.clientHeight??300;(this._syncCanvasBox()||this._scroller?.clientHeight!==this._measuredViewport)&&(this._measuredViewport=this._scroller?.clientHeight??0,this._measureViewport()),this._canvas&&this._appliedScroll!==t&&(this._appliedScroll=t,this._canvas.style.transform=`translate3d(0, ${-t}px, 0)`);let r=Math.max(0,this._firstIndex(Math.max(0,t))-Jo),i=this._offset(this._anchorIndex??r);this._anchorIndex=this._firstIndex(Math.max(0,t)),this._lastAnchorTop=i;let a=this._prefix[e]??0;this._logTotalChange(a,`pump`),this._host&&this._host.style.height!==`${a}px`&&(this._host.style.height=`${a}px`),this._canvas&&this._canvas.style.height!==`${a}px`&&(this._canvas.style.height=`${a}px`);let o=Math.min(e-r,Math.ceil(n/this._rowBudget())+24),s=r+o-1;this._ensurePool(o),this._debugPump();let c=new Set;for(let e=r;e<=s;e++)c.add(e);let l=[],u=new Set;for(let e of this._pool)e.bound!=null&&c.has(e.bound)?u.add(e.bound):l.push(e);let d=[];for(let e=r;e<=s;e++)u.has(e)||d.push(e);for(let e of d){let t=l.pop()??this._allocateSlot();this._bind(t,e)}let f=null,p=document.activeElement;for(let e of this._pool)if((e.bound==null||!c.has(e.bound))&&e.el.style.visibility!==`hidden`){if(p!=null&&e.el.contains(p)){let t=p;f=this._nearestFocusable(e.bound,t)??this._nearestFocusable(this._firstVisibleIndex(),t)}e.el.style.visibility=`hidden`,e.bound=void 0,e.off=0,e.el.style.transform=``}f&&f.focus();for(let e of this._pool){if(e.bound==null)continue;let t=this._items[e.bound];t!==void 0&&e.boundItem!==t&&this._bind(e,e.bound)}}_nearestFocusable(e,t){if(e==null)return null;let n=Array.from(t.classList),r=null,i=1/0;for(let a of this._pool){if(a.bound==null||a.el.style.visibility===`hidden`||a.bound===e)continue;let o=Array.from(a.el.querySelectorAll(`input,button,select,textarea,a[href],[tabindex]`)),s=o.find(e=>e.tagName===t.tagName&&n.every(t=>e.classList.contains(t)))??(n.length===0&&o[0])??null;if(!s)continue;let c=Math.abs(a.bound-e);c<i&&(r=s,i=c)}return r}_firstVisibleIndex(){let e=this._scroller?.scrollTop??0;return this._firstIndex(e)}_rowBudget(){return Math.max(qo,this._minMeasured)}_allocateSlot(){let e=document.createElement(`cosmoz-grouped-list-row`);e.style.position=`absolute`,e.style.left=`0`,e.style.right=`0`,e.style.top=`0`,e.style.visibility=`hidden`,this._canvas?.appendChild(e);let t={el:e,height:Ko,bound:void 0};return this._pool.push(t),this._ro&&this._ro.observe(e),t}_bind(e,t){let n=this._items[t];if(e.bound===t&&e.boundItem===n)return;e.h!=null&&!this._measured[t]&&(this._measured[t]=1,this._heights[t]!==e.h&&(this._heights[t]=e.h),this._invalidate(),this._syncBoundTransforms()),e.bound=t,e.boundItem=n,e.el.index=t,e.el.item=n,e.wrapper=(t=>this._renderRow(t,e.bound)),e.el.renderFn=e.wrapper,e.el.style.transform=`translate3d(0, ${this._offset(t)}px, 0)`,e.off=this._offset(t),e.el.style.visibility=`visible`;let r=e.el.parentElement;if(r){let n=null;for(let i of r.children){let r=i.index;if(i===e.el)break;if(typeof r==`number`&&r>t){n=i;break}}r.insertBefore(e.el,n)}this._ro&&!this._observing.has(e.el)&&(this._observing.add(e.el),this._ro.observe(e.el))}disconnected(){this._rafId!=null&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._ro?.disconnect(),this._scroller?.removeEventListener(`scroll`,this._onScroll),this._clip?.removeEventListener(`wheel`,this._onWheel),this._clip?.removeEventListener(`keydown`,this._onKeydown),this._clip?.removeEventListener(`pointerdown`,this._onPointerDown),this._clip?.removeEventListener(`pointermove`,this._onPointerMove),this._clip?.removeEventListener(`pointerup`,this._onPointerEnd),this._clip?.removeEventListener(`pointercancel`,this._onPointerEnd),this._endPointerDrag()}reconnected(){this._ro?.disconnect(),this._ro=new ResizeObserver(e=>this._onResize(e));for(let e of this._pool)e.bound!=null&&this._ro.observe(e.el);this._resolveScroller(),this._attachCanvas(),this._schedule()}},Zo=a(Xo)})))()}var $o,es,ts,ns,rs,is,as,os,ss;function cs(){return(cs=e((()=>{$o={group:Symbol(`group`)},es=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),ts=(e,t)=>!!es(e,t).expanded,ns=(e,t)=>!!es(e,t).folded,rs=e=>e?e.items instanceof Array:!1,is=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},as=(e,t,n)=>{if(Array.isArray(e))return is(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?es(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[$o.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},os=(e,...t)=>typeof e==`function`?e(...t):e,ss=(e,t)=>e===t})))()}var ls;function us(){return(us=e((()=>{O(),cs(),ls=()=>{let[e,t]=h(()=>[new WeakMap]);return{setItemState:p((e,n)=>t(([t])=>{let r=es(e,t);return Object.assign(r,os(n,r)),[t]}),[]),state:e[0],signal:e}}})))()}var ds;function fs(){return(fs=e((()=>{O(),us(),cs(),ds=()=>{let{setItemState:e,state:t,signal:n}=ls();return{state:t,signal:n,toggleFold:p((t,n)=>{rs(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:p((t,n)=>{rs(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})))()}var ps;function ms(){return(ms=e((()=>{O(),$(),cs(),ps=({compareItemsFn:e,data:t,flatData:n})=>{let[r,i]=me(`selectedItems`,()=>[]),[a,o]=h(),s=p(e=>r===Q||r.includes(e),[r]),c=p(e=>r===Q||(e?.items?.every(s)??!1),[r,s]),l=p(e=>s(e)||c(e),[s,c]),u=p(e=>{let t=e.items??[e];i(e=>e===Q?e:[...e,...t.filter(t=>!e.includes(t))]),o(e)},[]),d=p(e=>{let t=e.items??[e];i(e=>e===Q?(n??[]).filter(e=>!rs(e)).filter(e=>!t.includes(e)):e.filter(e=>!t.includes(e))),o(e)},[n]),f=p(e=>{i(e.items?.slice()||[e]),o(e)},[]),m=p(()=>{i(t.flatMap(e=>e.items||e)),o(void 0)},[t]),g=p(()=>{i([]),o(void 0)},[]),_=p((e,t=!l(e))=>t?u(e):d(e),[l]),v=p((t,r)=>{if(!n)return;let i=a?n.findIndex(t=>e(t,a)):-1;if(i<0)return _(t,r);let[s,c]=[i,n.indexOf(t)].sort((e,t)=>e-t);n.slice(s,c+1).forEach((e,t,n)=>{t>0&&t<n.length-1&&rs(e)||_(e,r)}),o(t)},[n,e,_]);return b(()=>i(t=>t!==Q&&t.length>0&&n?n.filter(n=>t.find(t=>e(n,t))):t),[n]),{selectedItems:r,isItemSelected:s,isGroupSelected:c,isSelected:l,select:u,deselect:d,selectOnly:f,selectAll:m,deselectAll:g,toggleSelect:_,toggleSelectTo:v}}})))()}var hs,gs,_s;function vs(){return(vs=e((()=>{Ae(),O(),Go(),Qo(),fs(),ms(),cs(),hs={host:{position:`relative`,display:`flex`,flexDirection:`column`}},gs=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=ss}=e,{toggleFold:o,toggleCollapse:s,state:l,signal:u}=ds(),d=F(()=>as(t,i,l),[t,i,u]),{selectedItems:f,isItemSelected:m,isGroupSelected:h,isSelected:g,select:_,deselect:v,selectOnly:b,selectAll:x,deselectAll:S,toggleSelect:C,toggleSelectTo:w}=ps({compareItemsFn:a,data:t,flatData:d}),T=p((e,t)=>Array.isArray(e.items)?r(e,t,{selected:h(e),folded:ns(e,l),toggleSelect:t=>C(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:m(e),expanded:ts(e,l),toggleSelect:t=>C(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>s(e)}),[n,r,f,C,u]);c(()=>{Object.assign(e.style,hs.host)},[]);let E={toggleFold:o,toggleCollapse:s,isItemSelected:m,isGroupSelected:h,isSelected:g,select:_,deselect:v,selectOnly:b,selectAll:x,deselectAll:S,toggleSelect:C,toggleSelectTo:w};return y(E,Object.values(E)),{renderRow:T,flatData:d}},_s=({renderRow:e,flatData:t})=>Zo({items:t,renderRow:(t,n)=>e(t,n)})})))()}var ys;function bs(){return(bs=e((()=>{O(),vs(),ys=e=>_s(gs(e)),customElements.define(`cosmoz-grouped-list`,N(ys,{useShadowDOM:!1}))})))()}function xs(){return(xs=e((()=>{bs()})))()}var Ss,Cs,ws;function Ts(){return(Ts=e((()=>{We(),Ft(),li(),di(),Pi(),zi(),Hi(),O(),He(),_(),ne(),Gi(),ta(),ra(),la(),Uo(),$(),xs(),bo(),wo(),Ss=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,Cs=e=>{let{header:t,list:n,footer:r}=Ho(e),i=n.loading&&n.processedItems.length>0,a=r.selectedItems===Q||r.selectedItems.length>0;return D`
		<style>
			${le([],()=>Ss(Wi))}
		</style>

		<div class="mainContainer${a?` bottombar-active`:``}">
			${na(t)}
			<div
				class="tableContent${i?` has-spinner`:``}"
				id="tableContent"
			>
				${ca(t,n)}
			</div>
			${ea(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,N(Cs,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`compact`,`inline`,`enable-select-all`]})),ws=`
	<slot name="actions" slot="actions"></slot>
`,D(Object.assign([ws],{raw:[ws]})),Be(Object.assign([ws],{raw:[ws]}))})))()}var Es,Ds,Os,ks,As;function js(){return(js=e((()=>{_(),Ve(),st(),xt(),Ts(),vt(),Es={title:`Components/ComsmozOmnitableFullDemo`,component:`cosmoz-omnitable`,tags:[`autodocs`],args:{loading:!1,locale:`en`,sortOn:``,groupOn:``,descending:!1,groupOnDescending:!1,hashParam:``,settingsId:``,selectedItems:[],disabledFiltering:!1,enableSelectAll:!1,allItemsCount:1e4},argTypes:{loading:{control:`boolean`,description:`Show loading state`,table:{defaultValue:{summary:`false`}}},locale:{control:`select`,options:[`en`,`fr`,`sv`],description:`Language locale`,table:{defaultValue:{summary:`en`}}},selectedItems:{control:`object`,description:`Show selected items`},allItemsCount:{control:`number`,description:`Total number of items`},data:{control:`object`,description:`Show specified items`},sortOn:{control:`text`,description:`Column property name to sort on (e.g., "amount", "date", "id")`},groupOn:{control:`text`,description:`Column property name to group on (e.g., "amount", "date", "id")`},descending:{control:`boolean`,description:`Sort on descending`},groupOnDescending:{control:`boolean`,description:`Group on descending`},hashParam:{control:`text`,description:`Hash parameter for URL state management`},settingsId:{control:`text`,description:`ID for storing table settings`},disabledFiltering:{control:`boolean`,description:`Disable filter inputs in all column headers`,table:{defaultValue:{summary:`false`}}}},render:e=>D`
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
                    ${Qe({styles:`vertical-align: middle; fill: currentColor;`})}
                    <span>Remove items</span>
                </cosmoz-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log(`Current hash:`,window.location.hash)}},Ds={args:{data:yt(10,10,10)}},Os={args:{data:yt(2,2,10)}},ks={args:{data:[]}},As=[`TableWithLargeData`,`TableWithSmallData`,`TableWithNoData`],Ds.parameters={...Ds.parameters,docs:{...Ds.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...Ds.parameters?.docs?.source}}},Os.parameters={...Os.parameters,docs:{...Os.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...Os.parameters?.docs?.source}}},ks.parameters={...ks.parameters,docs:{...ks.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...ks.parameters?.docs?.source}}}})))()}js();export{Ds as TableWithLargeData,ks as TableWithNoData,Os as TableWithSmallData,As as __namedExportsOrder,Es as default};