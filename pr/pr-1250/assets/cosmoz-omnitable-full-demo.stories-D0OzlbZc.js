import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{$ as t,$t as n,At as r,B as i,C as a,Ct as o,D as s,E as c,F as l,Ft as u,Gt as d,H as f,J as p,K as m,Kt as h,L as g,Lt as _,Mt as v,Nt as y,Q as b,Qt as x,S,T as C,Tt as w,Ut as T,Vt as E,W as ee,Xt as D,Yt as te,Z as O,Zt as ne,_t as re,at as ie,b as k,bt as A,c as j,ct as ae,d as oe,dt as se,en as M,f as ce,ft as le,gt as ue,h as de,ht as fe,i as pe,it as me,j as he,k as ge,l as _e,lt as ve,m as ye,mt as be,n as xe,nt as Se,ot as Ce,p as we,pt as Te,r as Ee,rt as De,s as Oe,st as ke,tt as Ae,u as je,ut as Me,v as Ne,vt as Pe,x as N,xt as Fe,y as Ie,yt as P,z as Le,zt as F}from"./iframe-w7uw_U8C.js";import{A as Re,B as I,C as ze,D as Be,E as Ve,F as L,G as He,H as Ue,I as We,J as Ge,L as Ke,M as qe,N as Je,O as Ye,P as R,R as Xe,S as Ze,T as Qe,U as $e,V as z,W as et,X as tt,Y as nt,_ as rt,a as it,d as at,f as ot,g as st,h as ct,j as lt,k as ut,l as dt,m as ft,n as pt,q as mt,r as ht,s as gt,t as _t,u as vt,v as yt,w as bt,x as xt,y as St,z as Ct}from"./dist-D0uimvS7.js";import{n as wt,t as Tt}from"./table-demo-helper-Dj0p9yas.js";var Et;function Dt(){return(Dt=e((()=>{P(),Et=()=>n`<style>
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
</style>`,customElements.define(`cz-spinner`,A(Et))})))()}var Ot,kt;function At(){return(At=e((()=>{l(),le(),ve(),P(),Ot=Te`
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
`,kt=()=>n`
	<style>
		${Ot}
	</style>
	${Le({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,A(kt))})))()}var B,jt,Mt,Nt,Pt,V;function H(){return(H=e((()=>{z(),B=({valuePath:e},t)=>I(t,e),jt=B,Mt=B,Nt=({valuePath:e},t)=>n=>{let r=I(n,e);return r!=null&&r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},Pt=(e,t)=>t===``||t==null?null:t,V=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:`left`},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return B(e,t)}toXlsxValue(e,t){return jt(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return Pt(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return Mt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})))()}var Ft,It,Lt,Rt,zt,Bt,Vt;function Ht(){return(Ht=e((()=>{S(),At(),L(),M(),H(),Ft=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),It=e=>()=>e(e=>({...e,filter:e.inputValue})),Lt=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},Rt=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),zt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Bt=e=>e!=null&&e!==``,Vt=class extends V(R){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(t!=null&&t!==``)return Nt(e,t)}renderCell(e,{item:t}){return n`<span class="default-column">${B(e,t)}</span>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${B(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:r,headerFocused:i},a){return n`<cosmoz-input
			variant="inline"
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${r??t}
			@value-changed=${Ft(a)}
			focused=${i}
			@focused-changed=${Rt(a)}
			@keydown=${Lt(a)}
			@blur=${It(a)}
		>
			${O(!e.disabledFiltering,()=>n`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Bt(t)}
						light
						@click=${zt(a)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,Vt)})))()}var Ut,Wt,Gt;function Kt(){return(Kt=e((()=>{S(),P(),M(),Ut=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],Wt=h`
	${ge}

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
`,Gt=e=>{let{label:t,value:r,slot:i}=e;e.toggleAttribute(`has-value`,!!r);let a=n`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${i}
	>
		${r||``}
	</div>`;return he(a,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,A(Gt,{observedAttributes:Ut,styleSheets:[Wt]}))})))()}var qt;function Jt(){return(Jt=e((()=>{$e(),M(),qe(),Kt(),qt=({title:e,tooltip:t=``,filterText:r=``,onOpenedChanged:i,content:a,align:o=`left`,externalValues:s=null})=>{let c={filtered:!!r,...s!=null&&{[`external-values-${s}`]:!0}};return n`
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
			class=${lt({...c,dropdown:!0})}
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
	`}})))()}var Yt,Xt;function Zt(){return(Zt=e((()=>{Ce(),Xe(),Re(),Be(),Yt=e=>e?typeof e.close==`function`?e:Yt(e.parentElement):null,Xt=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:`left`},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=Ye.debounce(this._limitInputDebouncer,Ct.after(600),()=>{this._limitInput(),this._updateFilter()}),ut(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Yt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)&&(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);(this.getComparableValue(n)!==this.getComparableValue(t,`min`)||this.getComparableValue(r)!==this.getComparableValue(t,`max`))&&this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);(this.getComparableValue(r)!==this.getComparableValue(n,`min`)||this.getComparableValue(i)!==this.getComparableValue(n,`max`))&&(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(ke(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})))()}var Qt;function $t(){return($t=e((()=>{L(),M(),Qt=e=>class extends e{static get template(){return We`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;ne(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>ne(r.render(),r.$.output))}}})))()}var en;function tn(){return(tn=e((()=>{S(),L(),k(),M(),Jt(),Kt(),Zt(),$t(),en=class extends Xt(Qt(R)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return n`
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
					${qt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:n`
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,en)})))()}var U,nn,rn,an,on,sn,cn,ln;function un(){return(un=e((()=>{bt(),z(),U=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=U(t);return i==null?r:n(r,i)},nn=e=>{let t=U(e);return t==null?null:t.toString()},rn=({valuePath:e},t)=>{let n=U(e?I(t,e):t);return nn(n)},an=e=>nn(e)??``,on=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=e?I(n,e):n,i=U(r);if(i!=null)return t===null?i:U(i.toFixed(t))},sn=Ve((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),cn=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?I(i,e):i;if(a==null)return``;let o=U(a);if(o!=null)return sn(t,n,r).format(o)},ln=(e,t)=>n=>{let r=on(e,n);if(r==null)return!1;let i=on({...e,valuePath:`min`},t),a=on({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var W,G,dn,fn,pn,mn,hn,gn,_n,vn,yn;function bn(){return(bn=e((()=>{z(),un(),W=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=U(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=W(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1),c=o.amount*(e[o.currency]||1);return U(s,c,r)===s?a:o},G=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=I(n,e));let i=W(t,r);if(i==null)return;let a=U(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},dn=(e,t)=>n=>{let r=G(e,n);if(r===void 0)return!1;let i=G({...e,valuePath:`min`},t),a=G({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))},fn={},pn=(e,t)=>{let n=e+(t||``)||``;return fn[n]||(fn[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),fn[n]},mn=(e,t,n)=>{let r=W(e,t);return r==null?``:pn(r.currency,n).format(r.amount)},hn=({valuePath:e,rates:t,locale:n},r)=>{let i=W(t,e?I(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:mn(t,i,n)},gn=e=>e?e.amount+e.currency:``,_n=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},vn=({valuePath:e},t)=>e?I(t,e)?.currency:null,yn=({valuePath:e},t)=>e?I(t,e)?.amount:void 0})))()}var K,xn,Sn,Cn,wn,Tn,En;function q(){return(q=e((()=>{bt(),P(),K=Symbol(`column`),xn=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},Sn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:Qe(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,align:e.align,headerAlign:e.headerAlign,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[K]:e}},Cn=e=>e.isOmnitableColumn&&!e.hidden,wn=e=>{let t=e.filter(Cn);return xn(t)?t:[]},Tn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>Sn(e,n)),En=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=u([]);return _(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(Tn(wn(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})))()}var Dn,On,kn;function J(){return(J=e((()=>{z(),q(),Dn=(e,t)=>Array.isArray(e)?e.map(e=>I(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,On=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return Dn(r,n)},kn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:I(n,i);if(r===a)return;i!==void 0&&Ue(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[K]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})))()}var An;function jn(){return(jn=e((()=>{S(),At(),L(),M(),z(),H(),tn(),bn(),J(),An=class extends V(R){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell`},headerCellClass:{type:String,value:`amount-header-cell`},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=G({...e,valuePath:`min`},t),r=G({...e,valuePath:`max`},t);if(n!=null||r!=null)return dn(e,t)}getString(e,t){return hn(e,t)}toXlsxValue(e,t){return hn(e,t)}getComparableValue(e,t){return G(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=W(e,t.min),r=W(e,t.max);if(n!=null||r!=null)return gn(n)+`~`+gn(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:_n(n[1]),max:_n(n[2])}:null}renderCell(e,{item:t}){return n`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="number"
			@change=${n=>r({amount:n.target.value,currency:I(t,e.valuePath)?.currency})}
			.value=${yn(e,t)}
		>
			<div slot="suffix">${vn(e,t)}</div>
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return On(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,An)})))()}var Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un;function Wn(){return(Wn=e((()=>{pe(),Ce(),Oe(),z(),J(),Mn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=I(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},Nn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=Mn(e,t);if(!r?.length)return[];let i=n??`label`,a=e=>String(typeof e==`object`&&e?I(e,i??``)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},Pn=(e,t,n)=>Ee(t&&I(e,t)).map(j(n)),Fn=({valuePath:e,textProperty:t},n)=>Pn(n,e,t).filter(e=>e!=null).join(`, `),In=Fn,Ln=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=j(e),s=Ee(I(a,t));return i.some(t=>s.length===0&&j(r||e)(t)===n||s.some(e=>o(e)===o(t)))},Rn=e=>t=>e(e=>({...e,filter:t})),zn=e=>t=>e(e=>({...e,headerFocused:t})),Bn=e=>t=>e(e=>({...e,query:t})),Vn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=Nn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Hn=(e,t)=>Vn(e,Dn(t,e.valuePath)),Un=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Fn(e,t)}toXlsxValue(e,t){return In(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=I(n,e);return t==null?r:Ee(r).map(j(t)).sort().join(` `)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Ln(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){let n=e;return console.error(`Failed to deserialize filter value:`,{error:n?.name,message:n?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>Vn(e,await Promise.resolve(ke(e.values,...t))):Hn(e,t)}}})))()}var Gn,Kn,qn;function Jn(){return(Jn=e((()=>{xe(),ze(),L(),M(),pe(),Oe(),Wn(),H(),P(),z(),q(),Gn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?je(t):j(n),a=Ee(e&&I(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Kn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=j(e),o=j(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=Ee(I(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},qn=class extends Un(V(R)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return n`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${B(e,t)}
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
			.itemRenderer=${e[K]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			@opened-changed=${e=>zn(i)(e.detail.value)}
			@value-changed=${v(Rn(i))}
			@text-changed=${v(Bn(i))}
			>${O(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return Gn(e,t)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Kn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,qn)})))()}var Yn,Xn;function Zn(){return(Zn=e((()=>{xe(),ze(),L(),M(),pe(),Oe(),Wn(),H(),z(),q(),Yn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?je(t):j(n),a=Ee(e&&I(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Xn=class extends Un(V(R)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return n`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${B(e,t)}
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
			.itemRenderer=${e[K]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			.onChange=${Rn(i)}
			@opened-changed=${e=>zn(i)(e.detail.value)}
			.onText=${Bn(i)}
			>${O(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Yn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Xn)})))()}var Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr;function fr(){return(fr=e((()=>{L(),H(),xe(),bt(),z(),M(),Qn=(e,t)=>t.find(({value:t})=>e===t),$n=(e,t,n)=>{let r=Qn(t,n);return r?r.text:e},er=(e,t,n,r)=>$n(e,I(t,n),r),tr=({valuePath:e},t,n)=>Qn(I(t,e),n),nr=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},rr=e=>t=>{e(e=>({...e,headerFocused:t}))},ir=e=>t=>{e(e=>({...e,query:t}))},ar=e=>t=>e(t?.[0]?.value),or=({valuePath:e,trueLabel:t,falseLabel:n},r)=>I(r,e)?t:n,sr=({valuePath:e},t)=>n=>I(n,e)===t,cr=Qe((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),lr=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?I(r,e)?t:n:``,ur=(e,t)=>{try{return JSON.parse(t)}catch{return null}},dr=class extends V(R){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return or(e,t)}renderCell(e,{item:t}){return or(e,t)}renderEditCell(e,{item:t},r){let{trueLabel:i,falseLabel:a}=e;return n`<cosmoz-autocomplete
			compact
			mode="select"
			.title=${er(e.title,t,e.valuePath,cr(i,a))}
			.source=${cr(i,a)}
			.textProperty=${`text`}
			.value=${tr(e,t,cr(i,a))}
			.onChange=${ar(r)}
			.limit=${1}
			>${O(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:r},i,a){return n`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			variant="inline"
			.label=${e.title}
			.title=${er(e.title,t,e.valuePath,a)}
			.source=${a}
			.textProperty=${`text`}
			.value=${Qn(t,a)}
			.text=${r}
			.onChange=${nr(i)}
			@opened-changed=${e=>rr(i)(e.detail.value)}
			.onText=${ir(i)}
			.limit=${1}
			>${O(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return cr(e,t)}getFilterFn(e,t){if(t!=null)return sr(e,t)}toXlsxValue(e,t){return lr(e,t)}deserializeFilter(e,t){return ur(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,dr)})))()}var pr;function mr(){return(mr=e((()=>{fe(),Zt(),pr=e=>class extends Xt(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return ue(e)}}})))()}var hr;function gr(){return(gr=e((()=>{S(),L(),k(),M(),mr(),Jt(),Kt(),$t(),hr=class extends pr(Qt(R)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return n`
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
					${qt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:n`
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
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;n&&n.match(/^0+/u)?this._limitInputDebouncer.cancel():super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,hr)})))()}var _r,vr,yr,Y,X,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr;function Ar(){return(Ar=e((()=>{fe(),z(),un(),_r=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},vr=e=>e.length===19?e+_r(e):e,yr=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=vr(t)),t=be(t),!t)||Number.isNaN(t.getTime())?null:t},Y=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=I(t,e));let r=yr(n);if(r!=null)return U(r.getTime())},X=(e,t,n)=>{let r=yr(e);if(r==null)return null;if(n==null||t==null)return r;let i=X(t);if(i==null)return r;let a=Y({},r),o=Y({},i);return a==null||o==null||n(a,o)===a?r:i},br=(e,t)=>{if(t==null)return;let n=X(e);if(n!=null)return t.format(n)},xr={},Sr=e=>{let t=e||``;return xr[t]||(xr[t]=new Intl.DateTimeFormat(e||void 0)),xr[t]},Cr=({valuePath:e,locale:t},n)=>{let r=I(n,e||``);return r===void 0?``:(r=X(r),r===null?`Invalid Date`:br(r,Sr(t)))},wr=e=>{let t=X(e);if(t==null)return null;let n=ue(t);return n==null?null:n.slice(0,10)},Tr=({valuePath:e},t)=>wr(I(t,e||``)),Er=(e,t)=>{let n=X(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},Dr=e=>wr(e)??``,Or=({valuePath:e},t)=>{if(!e)return``;let n=X(I(t,e));if(!n)return``;let r=X(ue(n));return r?(r.setHours(0,0,0,0),r):``},kr=(e,t)=>n=>{let r=Y(e,n);if(r==null)return!1;let i=Y({...e,valuePath:`min`},t),a=Y({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var jr;function Mr(){return(Mr=e((()=>{S(),L(),M(),H(),gr(),J(),Ar(),At(),jr=class extends V(R){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return kr(e,t)}getString(e,t){return Cr(e,t)}toXlsxValue(e,t){return Or(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return Dr(n)+`~`+Dr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:X(n[1]),max:X(n[2])}:null}renderCell(e,{item:t}){return n`<div class="omnitable-cell-date">
			${Cr(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="date"
			@change=${e=>r(Er(e.target.value))}
			.value=${Tr(e,t)}
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return On(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,jr)})))()}var Nr;function Pr(){return(Pr=e((()=>{L(),k(),M(),mr(),Jt(),Kt(),$t(),Nr=class extends pr(Qt(R)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return n`
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
					${qt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:n`
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
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,Nr)})))()}var Fr,Ir,Lr,Rr,zr,Br;function Vr(){return(Vr=e((()=>{z(),Ar(),Fr={},Ir=e=>{let t=e||``;return Fr[t]||(Fr[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),Fr[t]},Lr=({valuePath:e,locale:t},n)=>{let r=X(I(n,e||``));return r===void 0?``:r===null?`Invalid Date`:br(r,Ir(t))},Rr=({valuePath:e},t)=>e?I(t,e):``,zr=e=>{let t=X(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Br=e=>{if(e!=null&&e!==``&&typeof e==`string`)return X(e.replace(/\./gu,`:`)+`Z`)}})))()}var Hr;function Ur(){return(Ur=e((()=>{Ze(),At(),L(),M(),H(),Pr(),J(),Ar(),Vr(),Hr=class extends V(R){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return kr(e,t)}getString(e,t){return Lr(e,t)}toXlsxValue(e,t){return Rr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return zr(n)+`~`+zr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Br(n[1]),max:Br(n[2])}:null}renderCell(e,{item:t}){return Lr(e,t)}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="text"
			@change=${e=>r(Er(e.target.value))}
			.value=${Lr(e,t)}
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return On(e,t)}},customElements.define(Hr.is,Hr)})))()}var Wr;function Gr(){return(Gr=e((()=>{xe(),ze(),L(),M(),Wn(),H(),Wr=class extends Un(V(R)){renderCell({valuePath:e,textProperty:t},{item:r}){let i=Pn(r,e,t).map(e=>n`<li>${e}</li>`);return n`
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
			.onChange=${Rn(i)}
			@opened-changed=${e=>zn(i)(e.detail.value)}
			.onText=${Bn(i)}
			>${O(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Wr)})))()}var Kr,qr;function Jr(){return(Jr=e((()=>{le(),Me(),ve(),P(),k(),Kr=Te`
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
`,qr=({items:e})=>{let[t,r]=u(!1),i=Array.isArray(e)?e:[],a=E(()=>Math.max(0,i.length-1),[i]);if(i.length===0)return null;let o=i.length>2,s=i[0],c=o&&!t?[]:i.slice(1),l=e=>{e.stopPropagation(),e.preventDefault(),r(e=>!e)};return n`
		<ul>
			<li>
				<span>${s}</span>
			</li>
			<li class="see-more" ?hidden=${!o||t}>
				<a href="#" @click=${l}
					>${N(`and {0} more`,{0:a})}</a
				>
			</li>
			${c.map(e=>n`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!o||!t}>
				<a href="#" @click=${l}>${N(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,A(qr,{styleSheets:[se(Kr)]}))})))()}var Yr;function Xr(){return(Xr=e((()=>{Jr(),L(),M(),xe(),Wn(),H(),q(),Yr=class extends Un(V(R)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:r}){return n`<cosmoz-omnitable-column-list-data
			.items=${Pn(r,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="text"
			.value=${Fn(e,t)}
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
			.itemRenderer=${e[K]?.itemRenderer}
			.value=${t}
			.text=${r}
			.onChange=${Rn(i)}
			@opened-changed=${e=>zn(i)(e.detail.value)}
			.onText=${Bn(i)}
			>${O(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Yr)})))()}var Zr;function Qr(){return(Qr=e((()=>{S(),L(),k(),M(),Jt(),Kt(),Zt(),$t(),Zr=class extends Xt(Qt(R)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return n`
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
					${qt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:n`
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
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Zr)})))()}var $r;function ei(){return(ei=e((()=>{S(),At(),L(),M(),H(),z(),Qr(),J(),un(),$r=class extends V(R){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=on({...e,valuePath:`min`},t),r=on({...e,valuePath:`max`},t);if(n!=null||r!=null)return ln(e,t)}getString(e,t){return cn(e,t)}toXlsxValue({valuePath:e},t){return I(t,e)}getComparableValue(e,t){return on(e,t)}serializeFilter(e,t){if(t==null)return;let n=U(t.min),r=U(t.max);if(n!=null||r!=null)return an(n)+`~`+an(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:U(n[1]),max:U(n[2])}:null}renderCell(e,{item:t}){return n`<div class="omnitable-cell-number">
			${cn(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="number"
			@change=${e=>r(e.target.value)}
			.value=${rn(e,t)}
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return On(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,$r)})))()}var ti;function ni(){return(ni=e((()=>{S(),L(),k(),M(),mr(),Jt(),Kt(),$t(),ti=class extends pr(Qt(R)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return n`
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
					${qt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:n`
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
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,ti)})))()}var Z,ri,ii,ai,oi,si,ci,li,ui,di;function fi(){return(fi=e((()=>{fe(),z(),Ar(),un(),Z=(e,t,n)=>{let r=typeof e==`string`&&e.length>3&&e.length<=9?vr(`1970-01-01T`+e):e;return X(r,t,n)},ri={},ii=e=>{let t=e||``;return ri[t]||(ri[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),ri[t]},ai=({valuePath:e,locale:t},n)=>{let r=Z(I(n,e||``));return r===void 0?``:r===null?`Invalid Date`:br(r,ii(t))},oi=(e,t)=>e.valuePath?ai(e,t):``,si=e=>{let t=Z(e);if(t==null)return null;let n=ue(t);return n&&n.slice(11,19)},ci=({valuePath:e},t)=>{if(t==null)return;let n=si(e==null?t:I(t,e));if(n==null)return;let r=Z(vr(`1970-01-01T`+n));return r==null?r:U(r.getTime())},li=(e,t)=>n=>{let r=ci(e,n);if(r==null)return!1;let i=ci({...e,valuePath:`min`},t),a=ci({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},ui=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},di=e=>{if(e!=null&&e!==``)return Z(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})))()}var pi;function mi(){return(mi=e((()=>{S(),At(),L(),M(),H(),ni(),J(),fi(),pi=class extends V(R){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=ci({...e,valuePath:`min`},t),r=ci({...e,valuePath:`max`},t);if(n!=null||r!=null)return li(e,t)}getString(e,t){return ai(e,t)}toXlsxValue(e,t){return oi(e,t)}getComparableValue(e,t){return ci(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return ui(n)+`~`+ui(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:di(n[1]),max:di(n[2])}:null}renderCell(e,{item:t}){return ai(e,t)}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${ai(e,t)}
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return On(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,pi)})))()}function hi(){return(hi=e((()=>{jn(),Jn(),Zn(),fr(),Mr(),Ur(),Gr(),Xr(),ei(),mi()})))()}var gi;function _i(){return(_i=e((()=>{P(),M(),gi=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return D;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):D},customElements.define(`cosmoz-omnitable-group-row`,A(gi,{useShadowDOM:!1}))})))()}var vi;function yi(){return(yi=e((()=>{P(),M(),vi=e=>{let{column:t}=e;return d(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),D},customElements.define(`cosmoz-omnitable-resize-nub`,A(vi))})))()}var bi,xi,Si,Ci;function wi(){return(wi=e((()=>{tt(),P(),b(),l(),bi=({column:e,on:r,descending:i,setOn:a,setDescending:o})=>{let{name:s,title:c}=e??{};return n`<cosmoz-button
		variant="tertiary"
		class="sg"
		title=${t(c)}
		data-on=${t(s===r&&(i?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(a(s),o(!1)),t===`asc`?o(!0):t===`desc`&&(a(),o(!1))}}
	>
		<span>${c}</span> ${s===r?p({width:`12`,height:`12`}):m({width:`12`,height:`12`})}
	</cosmoz-button>`},xi=({columns:e,...t})=>e?.map(e=>bi({column:e,...t})),Si=()=>n`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>xi({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,Ci=()=>n`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>xi({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})))()}function Ti(e,t,{suffix:n=``,read:r,write:i,ready:a=!0,multi:o}={}){let s=Se({param:t,suffix:n,link:o?Ai:ki,write:i??ie}),c=E(()=>{if(t==null)return!1;if(o){let e=rt(t+n);return Object.keys(e).length>0}return yt(t+n)!==void 0},[]),[l,f]=u(()=>{if(t==null)return e;if(o){let i=rt(t+n,r);return Object.keys(i).length>0?i:e}return yt(t+n,r)??e}),p=F(e=>f(t=>{let n=Ei(e)?e(t):e;return s.param!=null&&xt(s.link(s.param+s.suffix,n,s.write),null,{notify:!1}),n}),[]);return d(()=>{s.param!=null&&a&&!c&&e!=null&&p(e)},[a]),[l,p]}var Ei,Di,Oi,ki,Ai;function ji(){return(ji=e((()=>{St(),Ce(),Ae(),st(),P(),Ei=e=>typeof e==`function`,Di=e=>(t,n,r=ie)=>{let i=ct(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},Oi=e=>e==null||e===``,ki=Di((e,t,n,r)=>Oi(n(t))?r.delete(e):r.set(e,n(t))),Ai=Di((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>Oi(n)?r.delete(e+t):r.set(e+t,n))})})))()}var Mi,Ni,Pi,Fi,Ii;function Li(){return(Li=e((()=>{P(),ji(),Mi=e=>[!0,`true`,1,`yes`,`on`].includes(e),Ni=e=>e===``||(e==null?void 0:Mi(e)),Pi=(e,t,n)=>F(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),Fi=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[o,s]=Ti(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[c,l]=Ti(Ni(n.descending),t,{suffix:`-descending`,read:Ni,ready:a}),[u,f]=Ti(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[p,m]=Ti(Ni(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:Ni,ready:a}),h=E(()=>e.find(e=>e.name===o),[e,o]),g=E(()=>e.find(e=>e.name===u),[e,u]),_={groupOn:u,setGroupOn:Pi(f,`groupOn`,r),groupOnDescending:p,setGroupOnDescending:Pi(m,`groupOnDescending`,r),sortOn:o,setSortOn:Pi(s,`sortOn`,r),descending:c,setDescending:Pi(l,`descending`,r),columns:e},v=E(()=>_,Object.values(_)),y=F(e=>{s(typeof e.sortOn==`string`?e.sortOn:void 0),f(typeof e.groupOn==`string`?e.groupOn:void 0),l(typeof e.descending==`boolean`?e.descending:void 0),m(typeof e.groupOnDescending==`boolean`?e.groupOnDescending:void 0)},[]);return d(()=>void(i.current=y),[]),{...v,sortAndGroup:v,groupOnColumn:g,sortOnColumn:h}},Ii=Fe(void 0),customElements.define(`sort-and-group-provider`,Ii.Provider),customElements.define(`sort-and-group-consumer`,A(({render:e})=>e(T(Ii)),{useShadowDOM:!1}))})))()}var Ri,zi;function Bi(){return(Bi=e((()=>{P(),ye(),yi(),wi(),Li(),Ri=({data:e,columns:t,groupOnColumn:r,filters:i,setFilterState:a,sortAndGroup:{sortOn:o,setSortOn:s,descending:c,setDescending:l}={}})=>we(t,e=>e.name,t=>[n`<div
				class="cell ${t.headerCellClass} header-cell"
				align="${t.headerAlign??t.align??`left`}"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===r}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,i[t.name]??{},e=>a(t.name,e),t.source(t,e))}
				${O(!t.noSort,()=>bi({on:o,setOn:s,descending:c,setDescending:l,column:t}))}
			</div>`,n`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),zi=({columns:e,settingsConfig:t,hideSelectAll:r,...i})=>{let a=T(Ii);return n`
		${O(e,e=>Ri({columns:e,sortAndGroup:a,...i}))}
		${O(!r,()=>n` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,A(zi,{useShadowDOM:!1}))})))()}var Vi,Hi;function Ui(){return(Ui=e((()=>{le(),Me(),ve(),P(),Vi=Te`
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
`,Hi=({column:e})=>n`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,A(Hi,{styleSheets:[se(Vi)]}))})))()}var Wi;function Gi(){return(Gi=e((()=>{P(),M(),Ui(),Wi=({columns:e,item:t,selected:r,expanded:i,groupOnColumn:a})=>ft(e,e=>n`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===a}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:r,expanded:i})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,A(Wi,{useShadowDOM:!1}))})))()}var Ki,qi;function Ji(){return(Ji=e((()=>{P(),ye(),Ki=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),qi=({columns:e,groupOnColumn:t,item:r,index:i,selected:a,expanded:o,onItemChange:s})=>we(e,e=>e.name,e=>n`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				align="${e.align??`left`}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,r)}"
				name="${e.name}"
			>
				${Ki(e,{item:r,index:i,selected:a,expanded:o},s)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,A(qi,{useShadowDOM:!1}))})))()}var Yi,Xi;function Zi(){return(Zi=e((()=>{le(),ve(),Yi=Te`
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
`,Xi=Te`
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
	.mainContainer.has-selection .tableContent-scroller {
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

	${Yi}

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

	/* Per-row action menu: one solid raised popover at the pointer or the
	   consumer's own button. */
	.row-menu {
		position: fixed;
		inset: auto;
		margin: 0;
		min-width: 220px;
		max-width: 320px;
		max-height: min(420px, calc(100dvh - 16px));
		overflow-y: auto;
		box-sizing: border-box;
		padding: var(--cz-spacing);
		border: 0;
		border-radius: var(--cz-radius-lg);
		background: var(--cz-color-bg-primary);
		box-shadow:
			var(--cz-shadow-raised, 0 0 0 1px var(--cz-color-border-secondary)),
			var(--cz-shadow-lg);
		color: var(--cz-color-text-primary);
		font-family: inherit;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		outline: none;
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
`})))()}var Qi,$i;function ea(){return(ea=e((()=>{at(),Qi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},$i=(e,t,n)=>{let r=e.map(e=>Qi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Qi(String(n))}).join(`;`)+`
`);i.unshift(r),ot(new File(i,n,{type:`text/csv;charset=utf-8`}))}})))()}var ta,na;function ra(){return(ra=e((()=>{vt(),at(),ta=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},na=(e,t,n,r)=>{let i=ta(e,t),a=new dt(n).addSheetFromData(i,r).generate();ot(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})))()}var ia,Q,aa;function $(){return($=e((()=>{ia=Symbol(`index`),Q=Symbol(`All`),aa=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})))()}var oa;function sa(){return(sa=e((()=>{$e(),l(),k(),M(),ea(),ra(),$(),oa=({columns:e,selectedItems:t,setSelectedItems:r,csvFilename:i,xlsxFilename:a,xlsxSheetname:o,topPlacement:s,enableSelectAll:c,allSelected:l,allItemsCount:u})=>{let d=t===Q,p=d||t.length>0,m=t!==Q&&c&&l,h=t=>n`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${s}
		>
			${f({slot:`button`})}
			<cosmoz-button
				variant="tertiary"
				@click=${()=>$i(e,t,i)}
			>
				${N(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				variant="tertiary"
				@click=${()=>na(e,t,a,o)}
			>
				${N(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,g=O(d,()=>u===void 0?N(`All items selected`):N(`All {count} items selected`,{count:u}),()=>N(`{count} selected item`,{count:t===Q?0:t.length}));return n`<cosmoz-bottom-bar
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
							${N(`Select all items`)}
						</span>`)}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${O(t!==Q,()=>h(t))}
	</cosmoz-bottom-bar>`}})))()}var ca;function la(){return(la=e((()=>{M(),ca=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:r,dataIsValid:i,data:a,columns:o,filters:s,groupOnColumn:c,setFilterState:l,settingsConfig:u,hideSelectAll:d})=>n`<sort-and-group-provider .value=${r}>
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
	</sort-and-group-provider>`})))()}var ua,da,fa;function pa(){return(pa=e((()=>{P(),ua=h`
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
`,da=(e,t)=>{let n=t==null?void 0:e?.[t];return n==null?``:`width: ${n}px; padding: 0 min(3px, ${n/2}px)`},fa=({settingsConfig:e,widths:t})=>{let{columns:r,collapsed:i}=e,a=r.filter(e=>!i.some(t=>t.name===e.name));return n`<div class="skeleton">
		${Array.from({length:5},()=>n`<div>
					<div class="checkbox"></div>
					${a.map(e=>n`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
								style=${da(t,e.name)}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,A(fa,{styleSheets:[ua]}))})))()}var ma;function ha(){return(ha=e((()=>{P(),pa(),pt(),k(),M(),ma=(e,t)=>{let{settingsConfig:r}=e,{processedItems:i,dataIsValid:a,filterIsTooStrict:o,loading:s,displayEmptyGroups:c,compareItemsFn:l,selectedItems:u,setSelectedItems:d,renderItem:f,renderGroup:p,error:m,partWidths:h}=t;return n`${O(!s&&!a&&!m,()=>n`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${gt({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${N(`Working set empty`)}</h3>
							<p>${N(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${O(o,()=>n`<div class="tableContent-empty">
					${gt({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
					<div>
						<h3>${N(`Filter too strict`)}</h3>
						<p>${N(`No matches for selection`)}</p>
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
					${ht({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
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
				@selected-items-changed=${v(d)}
				.displayEmptyGroups=${c}
				.compareItemsFn=${l}
				.renderItem=${f}
				.renderGroup=${p}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})))()}var ga,_a;function va(){return(va=e((()=>{le(),ve(),Zi(),ga=Te`
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
	${Yi}
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
`,_a=Te`
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
`})))()}var ya,ba;function xa(){return(xa=e((()=>{Ae(),P(),ya=e=>{let t=parseInt(e??``,10);return isFinite(t)?t:void 0},ba=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,o=Se({collapsed:i,settings:n.columns,requestTween:a,setSettings:F(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:F(e=>{let t=e.target instanceof Element?e.target:null;t&&t.closest(`.pull`)&&(o.handle=e.currentTarget instanceof HTMLElement?e.currentTarget:null)},[o]),onDragStart:F(e=>{let t=e.target instanceof HTMLElement?e.target:null,n=ya(t?.dataset.index);if(!t||!o.handle?.contains(t)||n==null)return e.preventDefault();o.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,String(n)),e.dataTransfer.setData(`text/plain`,String(n)),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>{(e.target instanceof HTMLElement?e.target:null)?.classList.remove(`drag`)},{once:!0})},[o]),onDragEnter:F(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:F(e=>{e.preventDefault(),e.currentTarget instanceof HTMLElement&&e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:F(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||t.classList.remove(`dragover`))},[]),onDrop:F(e=>{let t=ya(e.dataTransfer?.getData(`omnitable/sort-index`)),n=e.currentTarget instanceof HTMLElement?e.currentTarget:null,r=ya(n?.dataset.index),{settings:i,setSettings:a,requestTween:s}=o;n?.classList.remove(`dragover`),e.preventDefault();let c=i.slice();c.splice(r+(t>=r?0:-1),0,c.splice(t,1)[0]),s?.(),a(c)},[o]),onToggle:F(e=>{let{settings:t,setSettings:n,requestTween:r}=o,i=t.map(e=>({...e,disabled:e.disabled||o.collapsed?.some(t=>t.name===e.name)})),a=e.target instanceof HTMLInputElement?e.target:null,s=ya((e.target instanceof Element?e.target:null)?.closest(`[data-index]`)?.getAttribute(`data-index`));s!=null&&(i.splice(s,1,{...t[s],disabled:!a?.checked,priority:a?.checked?t.reduce((e,t)=>Math.max(e,t.priority??0),0)+1:t[s]?.priority}),r?.(),n(i))},[o])}}})))()}var Sa,Ca,wa,Ta;function Ea(){return(Ea=e((()=>{tt(),_t(),He(),l(),Me(),ve(),re(),P(),k(),wi(),va(),xa(),Sa=[mt({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...et],Ca=({onDragStart:e,onDragEnter:t,onDragOver:r,onDragLeave:a,onDrop:o,onDown:s,onToggle:c,collapsed:l,filters:u})=>(d,f)=>{let p=!!l?.find(e=>e.name===d.name),m=!d.disabled&&!p;return n` <div
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
				aria-label=${N(`Reorder column`)}
				variant="tertiary"
				icon-only
				class="pull"
				>${i({width:`16`,height:`16`})}</cosmoz-button
			>
			<label class="title" ?has-filter=${!Pe(u[d.name]?.filter)}
				>${d.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${m}
				@click=${c}
				.indeterminate=${p}
			/>
		</div>`},wa=e=>{let{settings:t,settingsId:r,onSave:i,onReset:a,hasChanges:o,canReset:s,opened:c,setOpened:l,...u}=ba(e);return n` <div class="headline">
			<span> ${N(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${N(`Close settings`)}"
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
				${N(`Columns`)} ${p({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${c.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(Ca(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.sort}
				@click=${()=>l(e=>({...e,sort:!e.sort}))}
			>
				${N(`Sort on`)} ${p({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${c.sort}> ${Ci()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.group}
				@click=${()=>l(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${N(`Group on`)} ${p({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${c.group} part="groups groups-heading"
				>${Si()}</cosmoz-collapse
			>
		</div>

		${O(r,()=>n`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${a}
						?disabled=${!s}
					>
						${N(`Reset`)}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${i}
						?disabled=${!o}
					>
						${N(`Save`)}
					</cosmoz-button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,A(wa,{styleSheets:[se(ga)]})),Ta=({config:e,newLayout:t})=>n`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${Sa}"
	>
		<div title="${N(`Sort and filter`)}" slot="button">
			${O(t,()=>n`<div class="headerDots">...</div>`,()=>n` ${ee({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${O(e?.badge,()=>n`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,A(Ta,{styleSheets:[se(_a)]}))})))()}var Da,Oa,ka,Aa,ja;function Ma(){return(Ma=e((()=>{Oe(),Da=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],Oa=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,ka=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(Oa(t.name))),i=e.filter(e=>e.name!=null&&!t.some(Oa(e.name))&&!n.some(Oa(e.name))),a=n.filter(e=>!t.some(Oa(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},Aa=(e,t)=>({...t,..._e(Array.from(Da))(e),columns:e.columns?.map(_e([`name`,`priority`,`width`,`flex`,`disabled`]))??t?.columns}),ja=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(Da.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?_e(Array.from(Da))(n):{},...t,columns:ka(e,t?.columns,n?.columns)})})))()}var Na;function Pa(){return(Pa=e((()=>{Na=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})))()}var Fa,Ia;function La(){return(La=e((()=>{P(),Pa(),Fa=Fe(Na),Ia=()=>{let e=T(Fa);return E(()=>e(),[e])}})))()}function Ra(){return(Ra=e((()=>{La()})))()}var za;function Ba(){return(Ba=e((()=>{P(),Ra(),Ma(),za=(e,t,n,r)=>{let[i,a]=u(e?void 0:null),{read:o,write:s}=Ia();return d(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:F(async()=>{if(!e)return;let r=Aa(t,i);await s(e,r),n(),a(r)},[t,i]),onReset:F(async()=>{n(),e&&i!=null&&(await s(e),a(null)),r?.()},[e,i,s,r]),hasChanges:t!=null,canReset:t!=null||i!=null}}})))()}var Va;function Ha(){return(Ha=e((()=>{P(),q(),Ma(),Ba(),Va=({settingsId:e,host:t})=>{let n=E(()=>Object.fromEntries(Da.map(e=>[e,t[e]])),[]),i=r(),a=F(()=>{i.current?.(n)},[n]),[o,s]=u(),[c,l]=u({columns:!0,sort:!0}),{savedSettings:d,...f}=za(e,o,s,a),{enabledColumns:p,disabledFiltering:m}=t,h=En(t,{enabledColumns:p,disabledFiltering:m}),g=E(()=>ja({columns:h,settings:o,savedSettings:d??void 0,initial:n}),[h,o,d]),_=E(()=>g.columns.map(e=>h.find(t=>t.name===e.name)).filter(e=>e!==void 0),[h,...g.columns.map(e=>e.name)]);return{...f,savedSettings:d,opened:c,setOpened:l,settings:g,columns:_,setSettings:s,resetRef:i}}})))()}function Ua(){return(Ua=e((()=>{Ea(),Ha()})))()}var Wa,Ga;function Ka(){return(Ka=e((()=>{Wa=e=>Number.isFinite(e)?e:0,Ga=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=Wa(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];u>i+(a>=0?o*d:i*a/r)?(s+=i,c+=u,l+=d,n[t]=u):d===0&&(s+=i,c+=i,n[t]=i)}r-=s,a=t-c-r,i-=l,o=Wa(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t],c=a>=0?o*s:i*a/r;n[t]=i+c}return n}})))()}var qa,Ja,Ya,Xa,Za,Qa,$a;function eo(){return(eo=e((()=>{Ka(),$(),qa=(e,t)=>{let n=aa(e,e=>e!=null&&e>0),r=0,i=0;return t.map((t,a)=>{let o=e[a];if(o==null||o===0)return{name:t.name,kind:`hide`};r+=o;let s=Math.round(r),c=s-i;return i=s,{name:t.name,kind:`width`,width:c,lastVisible:a===n}})},Ja=e=>`.cell[name="${e.name}"]{width: ${e.width}px;padding: 0 min(3px, ${e.width/2}px)}`,Ya=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,Xa=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`,Za=e=>e.map(e=>{if(e.kind===`hide`)return Xa(e.name);let t=Ja(e);return e.lastVisible?`${t}\n${Ya(e.name)}`:t}).join(`
`),Qa=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Qa(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Ga(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},$a=(e,t)=>e.length===0?`.cell {display: none;}`:Za(qa(e,t))})))()}var to;function no(){return(no=e((()=>{P(),to=(e,t)=>d(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-104)});return n.observe(e),()=>n.unobserve(e)},[])})))()}var ro;function io(){return(io=e((()=>{P(),no(),ro=e=>{let[t,n]=u(()=>e.getBoundingClientRect().width-104);return to(e,n),t}})))()}var ao;function oo(){return(oo=e((()=>{P(),eo(),ao=({canvasWidth:e,groupOnColumn:t,layoutColumns:n,config:r})=>E(()=>{if(!Array.isArray(r)||e==null||e===0)return[];let i=r.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>n==null?e:{...e,hidden:!n.includes(e.name)}).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Qa(i,e,i.length)},[e,t,r])})))()}var so;function co(){return(co=e((()=>{P(),so=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=E(()=>t<=r,[t,r]),a=E(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i]),o=E(()=>a.slice(1),[a]),s=a[0],c=!!s&&e.renderItem==null;return d(()=>{e.toggleAttribute(`mini`,c)},[c]),{isMini:c&&i,hasMiniColumn:c,miniColumn:s,miniColumns:o}}})))()}var lo;function uo(){return(uo=e((()=>{P(),lo=({host:e,canvasWidth:t,layout:n,setSettings:i,requestTween:a})=>{let o=r();o.current=e=>{a(),i(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},d(()=>{let t=e=>o.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})))()}var fo,po,mo;function ho(){return(ho=e((()=>{Ce(),Ae(),P(),fo=(e,t)=>{let n=E(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),r()},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);d(()=>{n.start()},t),d(()=>()=>n.stop(),[])},po=(e=0,t=0)=>Math.abs(e-t)<.1,mo=(e,t=1.9,n=ae,r)=>{let i=Se({target:e,speedFactor:t,onConverge:r}),a=F(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>po(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]);fo(a,[e])}})))()}var go,_o,vo;function yo(){return(yo=e((()=>{Ae(),P(),eo(),io(),oo(),co(),uo(),ho(),go=e=>{let t=E(()=>new CSSStyleSheet,[]);return d(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},_o=e=>{d(()=>{e.toggleAttribute(`compact`,e.compact===!0)},[e.compact])},vo=({host:e,columns:t,settings:n,setSettings:i,resizeSpeedFactor:a,sortAndGroupOptions:o})=>{let s=ro(e),{isMini:c,hasMiniColumn:l,miniColumn:d,miniColumns:f}=so({host:e,canvasWidth:s,columns:t});_o(e);let{groupOnColumn:p}=o,m=l?[d.name]:e.headerColumns??null,h=ao({canvasWidth:s,groupOnColumn:p,layoutColumns:m,config:n.columns}),g=go(e),_=n.columns.filter((e,t)=>h[t]==null&&e.name!==p?.name&&!e.disabled).map(e=>e.name),v=E(()=>_.map(e=>t.find(t=>t.name===e)),[t,_.join()]),[y,b]=u(1),x=F(()=>b(a??1.9),[a]),S=F(()=>b(1),[]),C=Se({columns:n.columns}),w=r({rules:void 0,widths:[]}).current,[T,ee]=u(void 0),D=e=>ee(e.reduce((e,t)=>t.kind===`width`?{...e,[t.name]:t.width}:e,{}));return mo(h,y,t=>{let n=qa(t,C.columns),r=$a(t,C.columns)===`.cell {display: none;}`?`empty`:n.map(e=>e.kind).join(`#`)+`#`+(n.findIndex(e=>e.lastVisible)+1);if(w.rules!==r){g.replaceSync($a(t,C.columns)),w.rules=r,w.widths=n.map(e=>e.kind===`width`?e.width:void 0),D(n);return}let i=g.cssRules,a=!1;n.forEach((e,t)=>{if(e.kind!==`width`||w.widths[t]===e.width)return;let n=i[t];n.style.width=`${e.width}px`,n.style.padding=`0 min(3px, ${e.width/2}px)`,w.widths[t]=e.width,a=!0}),a&&e.loading&&D(n)},S),lo({host:e,canvasWidth:s,layout:h,setSettings:e=>i(e(n)),requestTween:x}),{isMini:c,collapsedColumns:v,miniColumns:f,requestTween:x,partWidths:T}}})))()}var bo;function xo(){return(xo=e((()=>{bo=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})))()}var So;function Co(){return(Co=e((()=>{P(),$(),So=({host:e,selectedItems:t,data:n,dataIsValid:r,columns:i,sortAndGroupOptions:a,collapsedColumns:o,settings:s,filterFunctions:c,settingS:l,filters:u,setFilterState:d,hideSelectAll:f,headerColumns:p,requestTween:m,...h})=>{let g=E(()=>p==null?i:i.filter(e=>p.includes(e.name)),[i,p]),_=t===Q||!!n&&n.length>0&&Array.isArray(t)&&t.length===n.length,v=t=>{if(!(t.target instanceof HTMLInputElement))return;let n=e.shadowRoot.querySelector(`#groupedList`);t.target.checked?n.selectAll():n.deselectAll()},{groupOnColumn:y}=a,b=E(()=>[y,...o,...s.columns.filter(e=>e.disabled)].some(e=>!!e&&!!e.name&&Object.keys(c).includes(e.name)),[c,s,o]);return{allSelected:_,onAllCheckboxChange:v,data:n,dataIsValid:r,columns:g,settingsConfig:E(()=>({...l,collapsed:o,badge:b,filters:u,requestTween:m}),[l,o,b,u,m]),filters:u,groupOnColumn:y,setFilterState:d,hideSelectAll:f,sortAndGroup:a.sortAndGroup,...h}}})))()}var wo,To;function Eo(){return(Eo=e((()=>{tt(),l(),P(),k(),wo=e=>e?`groupRow groupRow-folded`:`groupRow`,To=(e,t,{selected:r,folded:i,toggleFold:a,onCheckboxChange:o,groupOnColumn:s,dataIsValid:c})=>n` <div
		class="${wo(i)}"
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
			aria-label=${N(`Expand or collapse`)}
			variant="tertiary"
			icon-only
			class="expand"
			?aria-expanded="${i}"
			@click=${a}
		>
			${p({width:`16`,height:`16`})}
		</cosmoz-button>
	</div>`})))()}var Do;function Oo(){return(Oo=e((()=>{M(),Do=({item:e,index:t})=>r=>O((r?.length??0)>0,()=>n`
				<div class="itemRow-minis" part="item-minis">
					${r.map(r=>n`<div
								class="itemRow-mini"
								part="item-mini item-mini-${r.name}"
							>
								${(r.renderMini??r.renderCell)(r,{item:e,index:t})}
							</div>`)}
				</div>
			`)})))()}var ko;function Ao(){return(Ao=e((()=>{tt(),l(),re(),P(),k(),Oo(),ko=(e,t,{selected:r,expanded:i,toggleCollapse:a,columns:o,collapsedColumns:s,miniColumns:c,onItemClick:l,onCheckboxChange:u,onItemChange:d,rowPartFn:f,groupOnColumn:m,dataIsValid:h,onRowContextMenu:g})=>n`
	<div
		?selected=${r}
		part="${[`itemRow`,`itemRow-${t}`,f?.(e,t)].filter(Boolean).join(` `)}"
		.dataIndex=${t}
		.dataItem=${e}
		class="itemRow"
		@click=${l}
		@contextmenu=${g}
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
				aria-label=${N(`Expand or collapse`)}
				variant="tertiary"
				icon-only
				class="expand"
				?hidden="${Pe(s.length)}"
				?aria-expanded="${i}"
				@click="${a}"
			>
				${p({width:`16`,height:`16`})}
			</cosmoz-button>
		</div>
		${Do({item:e,index:t})(c)}
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
`})))()}var jo,Mo,No,Po;function Fo(){return(Fo=e((()=>{P(),M(),De(),Ge(),jo=4,Mo=(e=document)=>{let t=e.activeElement;return t?.shadowRoot?.activeElement?Mo(t.shadowRoot):t},No=e=>[e,...e.querySelectorAll(`*`)].flatMap(e=>[...e.getAttribute(`role`)===`menuitem`?[e]:[],...e.shadowRoot?[...e.shadowRoot.children].flatMap(No):[]]),Po=(e,t,i)=>{let[a,o]=u(),s=r(),c=r(t),l=r({at:0}),f=e.rowMenu;c.current=t;let p=F((e,t)=>{let n=e.dataItem,r=c.current,i=Array.isArray(r)&&r.length>1&&r.includes(n);o({...t,items:i?r:[n],opener:Mo()??void 0})},[]),m=F(e=>{e.stopPropagation();let t=e.currentTarget,n=e.composedPath().find(e=>e.dataItem),{trigger:r,at:i}=l.current;if(!n||r===t&&performance.now()-i<500)return;let{left:a,bottom:o}=t.getBoundingClientRect();p(n,{x:a,y:o+jo,trigger:t})},[p]),h=F(e=>{e.composedPath().some(e=>e instanceof Element&&e.matches(`a[href]`))||document.getSelection()?.type===`Range`||(e.preventDefault(),p(e.currentTarget,{x:e.clientX,y:e.clientY}))},[p]);return d(()=>o(void 0),[i]),d(()=>{let t=s.current;if(!a||!t)return;t.showPopover(),t.focus(),a.trigger?.setAttribute(`aria-expanded`,`true`);let{width:n,height:r}=t.getBoundingClientRect(),i=a.y+r>innerHeight?a.y-r-jo:a.y;t.style.left=`${Math.max(jo,Math.min(a.x,innerWidth-n-jo))}px`,t.style.top=`${Math.max(jo,i)}px`;let o=e=>!e.composedPath().includes(t)&&t.hidePopover(),c=e.shadowRoot;return c.addEventListener(`scroll`,o,!0),()=>{c.removeEventListener(`scroll`,o,!0),a.trigger?.removeAttribute(`aria-expanded`)}},[a]),{onRowMenu:f?m:void 0,onRowContextMenu:f?h:void 0,renderRowMenu:()=>a&&f?n`<div
					popover="auto"
					class="row-menu"
					part="row-menu"
					role="menu"
					tabindex="-1"
					style=${nt({left:`${a.x}px`,top:`${a.y}px`})}
					${me(e=>s.current=e)}
					@keydown=${e=>{if(e.defaultPrevented)return;let t=No(s.current),n=t.length-1,r=t.indexOf(Mo()),i={ArrowDown:r<n?r+1:0,ArrowUp:r>0?r-1:n,Home:0,End:n}[e.key],a=i===void 0?void 0:t[i];a&&(e.preventDefault(),a.focus())}}
					@beforetoggle=${e=>{e.newState===`closed`&&(l.current={trigger:a.trigger,at:performance.now()},a.hadFocus=!!s.current?.matches(`:focus-within`))}}
					@toggle=${e=>{if(e.newState!==`closed`)return;let t=Mo(),n=!t||t===document.body||!!s.current?.matches(`:focus-within`);a.hadFocus&&n&&(a.trigger??a.opener)?.focus(),o(void 0)}}
					@click=${e=>{e.composedPath().some(e=>e instanceof Element&&e.getAttribute(`role`)===`menuitem`)&&s.current?.hidePopover()}}
				>
					${f(a.items)}
				</div>`:D}}})))()}var Io,Lo,Ro;function zo(){return(zo=e((()=>{P(),Eo(),Ao(),Fo(),$(),J(),Io=e=>e instanceof HTMLInputElement,Lo=e=>e instanceof HTMLElement,Ro=({host:e,error:t,dataIsValid:n,processedItems:i,columns:a,collapsedColumns:o,miniColumns:s,sortAndGroupOptions:c,rowPartFn:l,selectedItems:u,...f})=>{let{loading:p=!1,displayEmptyGroups:m=!1,compareItemsFn:h}=e,g=e.renderItem??ko,_=e.renderGroup??To,v=r({shiftKey:!1,ctrlKey:!1}),y=F(t=>{if(!Io(t.target))return;let n=t.target,r=n.dataItem,i=n.checked,a=e.shadowRoot.querySelector(`#groupedList`);v.current.shiftKey?a.toggleSelectTo(r,i):v.current.ctrlKey?(n.checked=!0,a.selectOnly(r)):a.toggleSelect(r,i),t.preventDefault(),t.stopPropagation()},[]);d(()=>{let e=({shiftKey:e,ctrlKey:t})=>{v.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let b=F(t=>{if(!Lo(t.currentTarget))return;let n=t.currentTarget,r=t.composedPath();r.slice(0,r.indexOf(n)).some(e=>e instanceof Element&&e.matches(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:n.dataItem,index:n.dataIndex}}))},[]),{onRowMenu:x,onRowContextMenu:S,renderRowMenu:C}=Po(e,u,i),{groupOnColumn:w}=c,T=F((t,n)=>r=>kn(e,t,n,r),[]);return{...f,selectedItems:u,renderRowMenu:C,processedItems:i,dataIsValid:n,filterIsTooStrict:n&&i.length<1,loading:p,compareItemsFn:h,displayEmptyGroups:m,error:t,renderItem:E(()=>(e,t,r)=>g(e,e[ia],{...r,columns:a,collapsedColumns:o,miniColumns:s,onItemClick:b,onCheckboxChange:y,onItemChange:T,rowPartFn:l,groupOnColumn:w,dataIsValid:n,onRowMenu:x,onRowContextMenu:S}),[g,x,S,a,o,s,b,y,T,l,w,n]),renderGroup:E(()=>(e,t,r)=>_(e,e[ia],{...r,columns:a,onCheckboxChange:y,groupOnColumn:w,dataIsValid:n}),[_,a,y,w,n])}}})))()}var Bo;function Vo(){return(Vo=e((()=>{Bo=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})))()}var Ho,Uo,Wo,Go,Ko,qo;function Jo(){return(Jo=e((()=>{Ce(),P(),Vo(),q(),ji(),$(),Ho=(e,t)=>(n,r)=>Bo(e(n),e(r))*(t?-1:1),Uo=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),Wo=(e,t)=>{e&&t&&Object.entries(t).forEach(([t,n])=>{let r=e[K];r.__ownChange=!0,Object.assign(r,{[t]:n}),r.__ownChange=!1,r.dispatchEvent(new CustomEvent(`${Uo(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},Go=(e,t)=>Object.assign(e,{[ia]:t}),Ko=Symbol(`unparsed`),qo=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:o,groupOnDescending:s,sortOnColumn:c,descending:l}=r,u=F(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),f=F(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[Ko]:n}];let i={filter:r.deserializeFilter(r,n)};return Wo(r,i),[e,i]},[t]),[p,m]=Ti({},n,{multi:!0,suffix:`-filter--`,write:u,read:f}),h=F((e,n)=>m(r=>{let i=ke(n,r[e]);return Wo(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,m]),g=E(()=>Object.values(p).map(e=>e.filter),[p]),_=E(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,p[e.name]?.filter)]).filter(e=>!!e[1])),[t,...g]),v=E(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(_).length===0||a?e.slice():e.filter(e=>Object.values(_).every(t=>t(e))),[e,_,a]),y=E(()=>{if(!i&&!o&&c!=null&&c.sortOn!=null)return v.slice().sort(Ho(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l));if(o!=null&&o.groupOn!=null){let e=v.reduce((e,t)=>{let n=o.getComparableValue({...o,valuePath:o.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(Ho(e=>o.getComparableValue({...o,valuePath:o.groupOn},e.items[0]),s)),!c||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(Ho(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l)),e))}return v},[v,o,s,c,l,i]),b=E(()=>{let e=0,t=0,n=[];return y.forEach(r=>{if(`items`in r&&Array.isArray(r.items))Go(r,t++),r.items.forEach(t=>{Go(t,e++),n.push(t)});else return Go(r,e++),n.push(r)},[]),n},[y]);return d(()=>{m(e=>Object.values(e).some(e=>e[Ko]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>{let n=t[Ko];return n==null?[e,t]:f([e,n])})):e)},[f]),{processedItems:y,visibleData:b,filters:p,filterFunctions:_,setFilterState:h}}})))()}var Yo,Xo,Zo;function Qo(){return(Qo=e((()=>{c(),a(),P(),Yo=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(e){let n=[];for(let r=e.length-1;r>=0;--r){let i=t(e[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);i>-1&&n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},Xo=e=>{let[t,n]=u(!1);return d(()=>{e&&n(!0)},[e]),t},Zo=({host:e,visibleData:t,filters:n,ready:r=!0,...i})=>{let{setFilterState:a}=i,o=E(()=>Yo(e),[]),[c,l]=y(`selectedItems`,[]);s(i,Object.values(i)),s(o,Object.values(o)),d(()=>{let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;a(t.name,e=>({...typeof e==`object`&&e?e:{},...t.state}))};return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),C(`visibleData`,t),C(`sortedFilteredGroupedItems`,i.sortedFilteredGroupedItems),C(`sortOn`,i.sortOn),C(`descending`,i.descending),C(`isMini`,i.isMini),C(`settingsReady`,Xo(r));let u=E(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return C(`filters`,u,Object.values(u)),{selectedItems:c,setSelectedItems:l}}})))()}var $o;function es(){return(es=e((()=>{Ua(),yo(),xo(),Co(),zo(),Jo(),Qo(),Li(),$o=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Va({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=h!==void 0,_=Fi(p,t,{settings:d,setSettings:f,resetRef:m,ready:g}),{processedItems:v,visibleData:y,filters:b,setFilterState:x,filterFunctions:S}=qo({data:r,columns:p,hashParam:t,sortAndGroupOptions:_,noLocalSort:o,noLocalFilter:s}),{isMini:C,collapsedColumns:w,miniColumns:T,requestTween:E,partWidths:ee}=vo({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:_}),D=r&&Array.isArray(r)&&r.length>0,{selectedItems:te,setSelectedItems:O}=Zo({host:e,visibleData:y,sortedFilteredGroupedItems:v,columns:p,filters:b,setFilterState:x,isMini:C,ready:g,..._}),ne=So({host:e,selectedItems:te,sortAndGroupOptions:_,dataIsValid:D,data:r,columns:p,filters:b,collapsedColumns:w,settings:d,filterFunctions:S,settingS:u,setFilterState:x,hideSelectAll:e.hideSelectAll===!0,headerColumns:e.headerColumns??null,requestTween:E});return{header:ne,list:Ro({host:e,error:c,dataIsValid:D,processedItems:v,selectedItems:te,setSelectedItems:O,columns:p,collapsedColumns:w,miniColumns:T,sortAndGroupOptions:_,rowPartFn:l,partWidths:ee}),footer:bo({host:e,selectedItems:te,allSelected:ne.allSelected,setSelectedItems:O,columns:p,enableSelectAll:e.enableSelectAll,allItemsCount:e.allItemsCount})}}})))()}var ts;function ns(){return(ns=e((()=>{P(),M(),ts=e=>{let{item:t,index:n,renderFn:r}=e;return t==null||n==null||r==null?D:r(t,n)},customElements.define(`cosmoz-grouped-list-row`,A(ts,{useShadowDOM:!1}))})))()}var rs,is,as,os,ss,cs;function ls(){return(ls=e((()=>{ce(),te(),de(),rs=40,is=24,as=12,os=16,ss=class extends o{constructor(...e){super(...e),this._items=[],this._renderRow=()=>{},this._host=null,this._canvas=null,this._clip=null,this._scroller=null,this._pool=[],this._heights=[],this._prefix=[0],this._itemsVersion=``,this._built=!1,this._rafId=null,this._ro=null,this._scrollerTarget=null,this._observing=new WeakSet,this._boundRenderRow=null,this.pumpCount=0,this._onScroll=()=>{this._pump(),this._rafId??=requestAnimationFrame(()=>{this._rafId=null,this._pump()})},this._appliedTotal=-1,this._anchorIndex=0,this._lastAnchorTop=0,this._boxTop=-1,this._boxLeft=-1,this._boxWidth=-1,this._boxHeight=-1,this._appliedScroll=NaN,this._measuredViewport=0,this._minMeasured=1/0,this._avgRowHeight=rs,this._measured=new Uint8Array,this._visibilityRange=null}render(e){return this._items=e.items??[],this._renderRow=e.renderRow,this._built&&this._schedule(),x}update(e,t){let n=t[0];if(!n)return x;this._items=n.items??[],this._renderRow=n.renderRow;let r=document.defaultView;if((r.__recLog??=[]).push({t:`update`,n:this._items.length,scroller:this._scroller?.clientHeight}),!this._built){let t=e;this._build(t.parentNode),this._built=!0}if(this._heights.length!==this._items.length&&(this._heights.length=this._items.length,this._heights.fill(rs),this._invalidate()),this._measured.length!==this._items.length&&(this._measured=new Uint8Array(this._items.length)),this._boundRenderRow!==this._renderRow){this._boundRenderRow=this._renderRow;for(let e of this._pool){if(e.bound==null)continue;let t=e.bound;e.el.renderFn=(e=>this._renderRow(e,t))}}return this._pump(),x}_build(e){let t=e??document.createElement(`div`);this._host=t,t.style.flexShrink=`0`;let n=document.createElement(`div`);n.className=`glist-recycler-viewport`,n.style.position=`sticky`,n.style.top=`0`,n.style.overflow=`hidden`,n.style.flex=`none`;let r=document.createElement(`div`);r.className=`glist-recycler-canvas`,r.style.position=`absolute`,r.style.top=`0`,r.style.left=`0`,r.style.width=`100%`,r.style.willChange=`transform`,n.appendChild(r),this._clip=n,this._canvas=r,this._resolveScroller(),this._measureViewport(),this._attachCanvas(),this._ro=new ResizeObserver(e=>this._onResize(e)),this._scrollerRO?.disconnect(),this._scrollerRO=new ResizeObserver(()=>this._syncCanvasBox()),this._scroller&&this._scrollerRO.observe(this._scroller),this._schedule()}_resolveScroller(){let e=this._host?.parentElement;for(;e;){let t=getComputedStyle(e).overflowY;if(t===`auto`||t===`scroll`||t===`overlay`)break;e=e.parentElement}this._scroller=e??null,e&&(this._scrollerTarget=e,e.addEventListener(`scroll`,this._onScroll,{passive:!0}))}_attachCanvas(){let e=this._clip;e&&this._host&&e.parentElement!==this._host&&this._host.appendChild(e)}_syncCanvasBox(){let e=this._scroller,t=this._clip;if(!t)return!1;if(!e)return t.style.position=`relative`,t.style.width=`100%`,t.style.height=`${this._prefix[this._items.length]??0}px`,!0;let n=e.clientWidth,r=e.clientHeight;return n===this._boxWidth&&r===this._boxHeight?!1:(this._boxWidth=n,this._boxHeight=r,t.style.position=`sticky`,t.style.top=`0`,t.style.width=`${n}px`,t.style.height=`${r}px`,!0)}_measureViewport(){let e=this._scroller?.clientHeight??300,t=Math.min(this._items.length,Math.max(os,Math.ceil(e/this._rowBudget())+24));this._ensurePool(t)}_ensurePool(e){for(;this._pool.length<e;){let e=document.createElement(`cosmoz-grouped-list-row`);e.style.position=`absolute`,e.style.left=`0`,e.style.right=`0`,e.style.top=`0`,e.style.visibility=`hidden`,this._canvas?.appendChild(e),this._pool.push({el:e,height:rs,bound:void 0})}}_onResize(e){let t=!1;for(let n of e){let e=this._pool.find(e=>e.el===n.target);if(!e)continue;let r=Math.round(e.el.getBoundingClientRect().height);r>0&&(e.h=r);let i=e.bound;if(!(i==null||i<0||i>=this._items.length)&&r>0){r<this._minMeasured&&(this._minMeasured=r);let e=this._measured[i];this._heights[i]!==r&&(this._heights[i]=r,t=!0),this._measured[i]=1,e||(t=!0)}}if(t){this._invalidate(),this._syncBoundTransforms();let e=this._offset(this._anchorIndex)-this._lastAnchorTop;e!==0&&this._scroller&&(this._scroller.scrollTop+=e,this._lastAnchorTop+=e),this._schedule()}}_syncBoundTransforms(){for(let e of this._pool){if(e.bound==null){e.off=0;continue}let t=this._offset(e.bound);t!==e.off&&(e.el.style.transform=`translate(0, ${t}px)`,e.off=t)}}_logTotalChange(e,t){if(e===this._appliedTotal)return;let n=this._appliedTotal;this._appliedTotal=e,document.defaultView.__recTotal?.(e,n,t)}_invalidate(){let e=0,t=0;for(let n=0;n<this._items.length;n++)this._measured[n]&&(e+=this._heights[n]??rs,t++);t>0&&(this._avgRowHeight=e/t),this._prefix.length=0,this._prefix.push(0);for(let e=0;e<this._items.length;e++)this._prefix.push((this._prefix[e]??0)+(this._measured[e]?this._heights[e]??rs:this._avgRowHeight));this._host&&(this._host.style.height=`${this._prefix[this._items.length]??0}px`)}_offset(e){return this._prefix[e]??0}_firstIndex(e){let t=this._items.length,n=0,r=Math.max(0,t-1),i=0;for(;n<=r;){let t=Math.floor((n+r)/2);(this._prefix[t]??0)<=e?(i=t,n=t+1):r=t-1}return i}_schedule(){this._rafId??=requestAnimationFrame(()=>{this._rafId=null,this._pump()})}_pump(){this.pumpCount=(this.pumpCount??0)+1;let e=this._items.length;this._prefix.length!==e+1&&this._invalidate(),!this._scroller&&this._host?.isConnected&&(this._resolveScroller(),this._scroller&&(this._attachCanvas(),this._scrollerRO?.observe(this._scroller)));let t=this._scroller?.scrollTop??0,n=this._scroller?.clientHeight??300;(this._syncCanvasBox()||this._scroller?.clientHeight!==this._measuredViewport)&&(this._measuredViewport=this._scroller?.clientHeight??0,this._measureViewport()),this._canvas&&this._appliedScroll!==t&&(this._appliedScroll=t,this._canvas.style.transform=`translate3d(0, ${-t}px, 0)`);let r=this._scroller==null,i=r?0:Math.max(0,this._firstIndex(Math.max(0,t))-as),a=this._offset(this._anchorIndex??i);this._anchorIndex=this._firstIndex(Math.max(0,t)),this._lastAnchorTop=a;let o=this._prefix[e]??0;this._logTotalChange(o,`pump`),this._host&&this._host.style.height!==`${o}px`&&(this._host.style.height=`${o}px`),this._canvas&&this._canvas.style.height!==`${o}px`&&(this._canvas.style.height=`${o}px`);let s=r?e:Math.min(e-i,Math.ceil(n/this._rowBudget())+24),c=i+s-1;this._ensurePool(s),window.__rec=this;let l=new Set;for(let e=i;e<=c;e++)l.add(e);let u=[],d=new Set;for(let e of this._pool)e.bound!=null&&l.has(e.bound)?d.add(e.bound):u.push(e);let f=[];for(let e=i;e<=c;e++)d.has(e)||f.push(e);let p=[];for(let e of f){let t=u.pop()??this._allocateSlot();this._bind(t,e),p.push(t)}let m=null,h=document.activeElement;for(let e of this._pool)if((e.bound==null||!l.has(e.bound))&&e.el.style.visibility!==`hidden`){if(h!=null&&e.el.contains(h)){let t=h;m=this._nearestFocusable(e.bound,t)??this._nearestFocusable(this._firstVisibleIndex(),t)}e.el.style.visibility=`hidden`,e.bound=void 0,e.boundItem=void 0,e.off=0,e.el.style.transform=``,e.el.item=void 0,e.el.index=void 0,e.el.renderFn=void 0}m&&m.focus();for(let e of this._pool){if(e.bound==null)continue;let t=this._items[e.bound];t!==void 0&&e.boundItem!==t&&this._bind(e,e.bound)}let g=r?0:this._firstIndex(this._scroller?.scrollTop??0),_=r?Math.max(this._items.length-1,0):Math.min(this._firstIndex((this._scroller?.scrollTop??0)+(this._scroller?.clientHeight??0))-1,this._items.length-1);{let e={first:g,last:Math.max(_,g)},t=this._visibilityRange;(t==null||t.first!==e.first||t.last!==e.last)&&(this._visibilityRange=e,this._host?.dispatchEvent(new oe(e)))}this._repairDomOrder(p,d)}_repairDomOrder(e,t){if(!this._canvas||e.length===0)return;let n=-1/0,r=1/0;for(let e of t)e>n&&(n=e),e<r&&(r=e);let i=e.every(e=>(e.bound??n)>n),a=t.size>0&&e.every(e=>(e.bound??r)<r);if(i){for(let t of e)this._canvas.lastElementChild!==t.el&&this._canvas.appendChild(t.el);return}if(a){for(let t=e.length-1;t>=0;t--){let n=e[t].el;this._canvas.firstElementChild!==n&&this._canvas.insertBefore(n,this._canvas.firstElementChild)}return}let o=this._pool.filter(e=>e.bound!=null&&e.el.style.visibility!==`hidden`).sort((e,t)=>(e.bound??0)-(t.bound??0)),s=null;for(let e of o){let t=e.el;s===null?(this._canvas.firstElementChild!==t&&this._canvas.insertBefore(t,this._canvas.firstElementChild),s=t):(s.nextElementSibling!==t&&this._canvas.insertBefore(t,s.nextElementSibling),s=t)}}_nearestFocusable(e,t){if(e==null)return null;let n=Array.from(t.classList),r=null,i=1/0;for(let a of this._pool){if(a.bound==null||a.el.style.visibility===`hidden`||a.bound===e)continue;let o=Array.from(a.el.querySelectorAll(`input,button,select,textarea,a[href],[tabindex]`)),s=o.find(e=>e.tagName===t.tagName&&n.every(t=>e.classList.contains(t)))??(n.length===0&&o[0])??null;if(!s)continue;let c=Math.abs(a.bound-e);c<i&&(r=s,i=c)}return r}_firstVisibleIndex(){let e=this._scroller?.scrollTop??0;return this._firstIndex(e)}_rowBudget(){return Math.max(is,this._minMeasured)}_allocateSlot(){let e=document.createElement(`cosmoz-grouped-list-row`);e.style.position=`absolute`,e.style.left=`0`,e.style.right=`0`,e.style.top=`0`,e.style.visibility=`hidden`,this._canvas?.appendChild(e);let t={el:e,height:rs,bound:void 0};return this._pool.push(t),this._ro&&this._ro.observe(e),t}_bind(e,t){let n=this._items[t];(e.bound!==t||e.boundItem!==n)&&(e.h!=null&&!this._measured[t]&&(this._measured[t]=1,this._heights[t]!==e.h&&(this._heights[t]=e.h),this._invalidate(),this._syncBoundTransforms()),e.bound=t,e.boundItem=n,e.el.index=t,e.el.item=n,e.wrapper=(t=>this._renderRow(t,e.bound)),e.el.renderFn=e.wrapper,e.el.style.transform=`translate(0, ${this._offset(t)}px)`,e.off=this._offset(t),e.el.style.visibility=`visible`,this._ro&&!this._observing.has(e.el)&&(this._observing.add(e.el),this._ro.observe(e.el)))}disconnected(){this._rafId!=null&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._ro?.disconnect(),this._scroller?.removeEventListener(`scroll`,this._onScroll)}reconnected(){this._ro?.disconnect(),this._ro=new ResizeObserver(e=>this._onResize(e));for(let e of this._pool)e.bound!=null&&this._ro.observe(e.el);this._resolveScroller(),this._attachCanvas(),this._schedule()}},cs=w(ss)})))()}var us,ds,fs,ps,ms,hs,gs,_s,vs;function ys(){return(ys=e((()=>{us={group:Symbol(`group`)},ds=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),fs=(e,t)=>!!ds(e,t).expanded,ps=(e,t)=>!!ds(e,t).folded,ms=e=>e?e.items instanceof Array:!1,hs=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},gs=(e,t,n)=>{if(Array.isArray(e))return hs(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?ds(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[us.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},_s=(e,...t)=>typeof e==`function`?e(...t):e,vs=(e,t)=>e===t})))()}var bs;function xs(){return(xs=e((()=>{P(),ys(),bs=()=>{let[e,t]=u(()=>[new WeakMap]);return{setItemState:F((e,n)=>t(([t])=>{let r=ds(e,t);return Object.assign(r,_s(n,r)),[t]}),[]),state:e[0],signal:e}}})))()}var Ss;function Cs(){return(Cs=e((()=>{P(),xs(),ys(),Ss=()=>{let{setItemState:e,state:t,signal:n}=bs();return{state:t,signal:n,toggleFold:F((t,n)=>{ms(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:F((t,n)=>{ms(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})))()}var ws;function Ts(){return(Ts=e((()=>{P(),$(),ys(),ws=({compareItemsFn:e,data:t,flatData:n})=>{let[r,i]=y(`selectedItems`,()=>[]),[a,o]=u(),s=F(e=>r===Q||r.includes(e),[r]),c=F(e=>r===Q||(e?.items?.every(s)??!1),[r,s]),l=F(e=>s(e)||c(e),[s,c]),f=F(e=>{let t=e.items??[e];i(e=>e===Q?e:[...e,...t.filter(t=>!e.includes(t))]),o(e)},[]),p=F(e=>{let t=e.items??[e];i(e=>e===Q?(n??[]).filter(e=>!ms(e)).filter(e=>!t.includes(e)):e.filter(e=>!t.includes(e))),o(e)},[n]),m=F(e=>{i(e.items?.slice()||[e]),o(e)},[]),h=F(()=>{i(t.flatMap(e=>e.items||e)),o(void 0)},[t]),g=F(()=>{i([]),o(void 0)},[]),_=F((e,t=!l(e))=>t?f(e):p(e),[l]),v=F((t,r)=>{if(!n)return;let i=a?n.findIndex(t=>e(t,a)):-1;if(i<0)return _(t,r);let[s,c]=[i,n.indexOf(t)].sort((e,t)=>e-t);n.slice(s,c+1).forEach((e,t,n)=>{t>0&&t<n.length-1&&ms(e)||_(e,r)}),o(t)},[n,e,_]);return d(()=>i(t=>t!==Q&&t.length>0&&n?n.filter(n=>t.find(t=>e(n,t))):t),[n]),{selectedItems:r,isItemSelected:s,isGroupSelected:c,isSelected:l,select:f,deselect:p,selectOnly:m,selectAll:h,deselectAll:g,toggleSelect:_,toggleSelectTo:v}}})))()}var Es,Ds,Os;function ks(){return(ks=e((()=>{c(),P(),ns(),ls(),Cs(),Ts(),ys(),Es={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Ds=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=vs}=e,{toggleFold:o,toggleCollapse:c,state:l,signal:u}=Ss(),d=E(()=>gs(t,i,l),[t,i,u]),{selectedItems:f,isItemSelected:p,isGroupSelected:m,isSelected:h,select:g,deselect:v,selectOnly:y,selectAll:b,deselectAll:x,toggleSelect:S,toggleSelectTo:C}=ws({compareItemsFn:a,data:t,flatData:d}),w=F((e,t)=>Array.isArray(e.items)?r(e,t,{selected:m(e),folded:ps(e,l),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:p(e),expanded:fs(e,l),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>c(e)}),[n,r,f,S,u]);_(()=>{Object.assign(e.style,Es.host)},[]);let T={toggleFold:o,toggleCollapse:c,isItemSelected:p,isGroupSelected:m,isSelected:h,select:g,deselect:v,selectOnly:y,selectAll:b,deselectAll:x,toggleSelect:S,toggleSelectTo:C};return s(T,Object.values(T)),{renderRow:w,flatData:d}},Os=({renderRow:e,flatData:t})=>cs({items:t,renderRow:e})})))()}var As;function js(){return(js=e((()=>{P(),ks(),As=e=>Os(Ds(e)),customElements.define(`cosmoz-grouped-list`,A(As,{useShadowDOM:!1}))})))()}function Ms(){return(Ms=e((()=>{js()})))()}var Ns,Ps,Fs;function Is(){return(Is=e((()=>{Je(),Ht(),hi(),_i(),Bi(),Gi(),Ji(),P(),Ke(),M(),qe(),Ie(),Zi(),sa(),la(),ha(),es(),$(),Ms(),Eo(),Ao(),Ns=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,Ps=e=>{let{header:t,list:r,footer:i}=$o(e),a=r.loading&&r.processedItems.length>0,o=i.selectedItems===Q||i.selectedItems.length>0;return n`
		<style>
			${Ne([],()=>Ns(Xi))}
		</style>

		<div
			class=${lt({mainContainer:!0,"has-selection":o})}
		>
			${ca(t)}
			<div
				class=${lt({tableContent:!0,"has-spinner":a})}
				id="tableContent"
			>
				${ma(t,r)}
			</div>
			${oa(i)}
		</div>
		${r.renderRowMenu()}

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,A(Ps,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`compact`,`inline`,`enable-select-all`]})),Fs=`
	<slot name="actions" slot="actions"></slot>
`,n(Object.assign([Fs],{raw:[Fs]})),We(Object.assign([Fs],{raw:[Fs]}))})))()}var Ls,Rs,zs,Bs,Vs;function Hs(){return(Hs=e((()=>{M(),tt(),pt(),Dt(),Is(),wt(),Ls={title:`Components/ComsmozOmnitableFullDemo`,component:`cosmoz-omnitable`,tags:[`autodocs`],args:{loading:!1,locale:`en`,sortOn:``,groupOn:``,descending:!1,groupOnDescending:!1,hashParam:``,settingsId:``,selectedItems:[],disabledFiltering:!1,enableSelectAll:!1,allItemsCount:1e4},argTypes:{loading:{control:`boolean`,description:`Show loading state`,table:{defaultValue:{summary:`false`}}},locale:{control:`select`,options:[`en`,`fr`,`sv`],description:`Language locale`,table:{defaultValue:{summary:`en`}}},selectedItems:{control:`object`,description:`Show selected items`},allItemsCount:{control:`number`,description:`Total number of items`},data:{control:`object`,description:`Show specified items`},sortOn:{control:`text`,description:`Column property name to sort on (e.g., "amount", "date", "id")`},groupOn:{control:`text`,description:`Column property name to group on (e.g., "amount", "date", "id")`},descending:{control:`boolean`,description:`Sort on descending`},groupOnDescending:{control:`boolean`,description:`Group on descending`},hashParam:{control:`text`,description:`Hash parameter for URL state management`},settingsId:{control:`text`,description:`ID for storing table settings`},disabledFiltering:{control:`boolean`,description:`Disable filter inputs in all column headers`,table:{defaultValue:{summary:`false`}}}},render:e=>n`
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
                    ${it({styles:`vertical-align: middle; fill: currentColor;`})}
                    <span>Remove items</span>
                </cosmoz-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log(`Current hash:`,window.location.hash)}},Rs={args:{data:Tt(10,10,10)}},zs={args:{data:Tt(2,2,10)}},Bs={args:{data:[]}},Vs=[`TableWithLargeData`,`TableWithSmallData`,`TableWithNoData`],Rs.parameters={...Rs.parameters,docs:{...Rs.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...Rs.parameters?.docs?.source}}},zs.parameters={...zs.parameters,docs:{...zs.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...zs.parameters?.docs?.source}}},Bs.parameters={...Bs.parameters,docs:{...Bs.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...Bs.parameters?.docs?.source}}}})))()}Hs();export{Rs as TableWithLargeData,Bs as TableWithNoData,zs as TableWithSmallData,Vs as __namedExportsOrder,Ls as default};