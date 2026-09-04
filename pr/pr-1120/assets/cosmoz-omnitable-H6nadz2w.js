import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,D as r,Et as i,F as a,Ft as o,Ht as s,I as c,J as l,Jt as u,K as d,L as f,Lt as p,M as m,N as h,Nt as g,O as _,Ot as v,S as y,V as b,Vt as x,W as S,Xt as C,Y as ee,Z as te,Zt as w,_ as T,_t as E,a as ne,b as re,ct as ie,d as ae,f as oe,ft as se,g as ce,gt as le,h as ue,i as de,j as D,jt as O,k,kt as fe,m as A,mt as pe,ot as j,p as me,qt as he,rt as ge,st as _e,t as ve,tt as ye,v as be,vt as M,w as xe,x as Se,y as Ce,yt as we,z as Te,zt as Ee}from"./dist-Bd_7_9uE.js";import{$ as De,A as Oe,C as ke,D as Ae,E as je,F as N,H as Me,I as Ne,L as Pe,M as Fe,N as Ie,O as P,P as F,Q as Le,R as Re,S as ze,T as Be,U as Ve,V as He,X as Ue,Y as We,Z as Ge,_ as Ke,a as qe,b as Je,c as Ye,d as Xe,et as Ze,f as Qe,g as $e,h as et,j as tt,k as I,l as nt,n as rt,o as it,p as at,q as ot,r as st,t as ct,u as lt,v as ut,w as dt,x as ft,y as pt,z as mt}from"./dist-YimCk_fg.js";var ht,gt;function L(){return(L=e((()=>{S(),se(),E(),ht=le`
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
`,gt=()=>C`
	<style>
		${ht}
	</style>
	${l({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,M(gt))})))()}var R,_t,vt,yt,bt,z;function B(){return(B=e((()=>{N(),R=({valuePath:e},t)=>F(t,e),_t=R,vt=R,yt=({valuePath:e},t)=>n=>{let r=F(n,e);return r!=null&&r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},bt=(e,t)=>t===``||t==null?null:t,z=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:`left`},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return R(e,t)}toXlsxValue(e,t){return _t(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return bt(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return vt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})))()}var xt,St,Ct,wt,Tt,Et,Dt;function Ot(){return(Ot=e((()=>{m(),L(),I(),w(),B(),xt=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),St=e=>()=>e(e=>({...e,filter:e.inputValue})),Ct=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},wt=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),Tt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Et=e=>e!=null&&e!==``,Dt=class extends z(P){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(t!=null&&t!==``)return yt(e,t)}renderCell(e,{item:t}){return C`<span class="default-column">${R(e,t)}</span>`}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			variant="inline"
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${R(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return C`<cosmoz-input
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
			${j(!e.disabledFiltering,()=>C`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Et(t)}
						light
						@click=${Tt(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,Dt)})))()}var kt,At,jt;function V(){return(V=e((()=>{m(),E(),w(),kt=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],At=s`
	${Te}

	label {
		text-align: left;
	}

	.wrap {
		height: 40px;
	}

	#input {
		margin-top: -4px;
	}
`,jt=e=>{let{label:t,value:n,slot:r}=e;e.toggleAttribute(`has-value`,!!n);let i=C`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${n||``}
	</div>`;return b(i,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,M(jt,{observedAttributes:kt,styleSheets:[At]}))})))()}var Mt;function Nt(){return(Nt=e((()=>{Pe(),w(),je(),V(),Mt=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,align:a=`left`,externalValues:o=null})=>{let s={filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0}};return C`
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
			class=${Be({...s,dropdown:!0})}
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
	`}})))()}var Pt,Ft;function It(){return(It=e((()=>{be(),Fe(),dt(),ft(),Pt=e=>e?typeof e.close==`function`?e:Pt(e.parentElement):null,Ft=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:`left`},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=ze.debounce(this._limitInputDebouncer,Ie.after(600),()=>{this._limitInput(),this._updateFilter()}),ke(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Pt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)&&(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);(this.getComparableValue(n)!==this.getComparableValue(t,`min`)||this.getComparableValue(r)!==this.getComparableValue(t,`max`))&&this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);(this.getComparableValue(r)!==this.getComparableValue(n,`min`)||this.getComparableValue(i)!==this.getComparableValue(n,`max`))&&(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(Ce(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})))()}var Lt;function Rt(){return(Rt=e((()=>{I(),w(),Lt=e=>class extends e{static get template(){return Oe`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;u(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>u(r.render(),r.$.output))}}})))()}var zt;function Bt(){return(Bt=e((()=>{m(),I(),k(),w(),Nt(),V(),It(),Rt(),zt=class extends Ft(Lt(P)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return C`
			${j(this.disabled,()=>C`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>C`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Mt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:C`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${D(`Minimum amount`)}
								label=${D(`Min amount`)}
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
								title=${D(`Maximum amount`)}
								label=${D(`Max amount`)}
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,zt)})))()}var H,Vt,Ht,Ut,U,Wt,Gt,Kt;function qt(){return(qt=e((()=>{N(),ut(),H=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=H(t);return i==null?r:n(r,i)},Vt=e=>{let t=H(e);return t==null?null:t.toString()},Ht=({valuePath:e},t)=>{let n=H(e?F(t,e):t);return Vt(n)},Ut=e=>Vt(e)??``,U=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=e?F(n,e):n,i=H(r);if(i!=null)return t===null?i:H(i.toFixed(t))},Wt=Je((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Gt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?F(i,e):i;if(a==null)return``;let o=H(a);if(o!=null)return Wt(t,n,r).format(o)},Kt=(e,t)=>n=>{let r=U(e,n);if(r==null)return!1;let i=U({...e,valuePath:`min`},t),a=U({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var W,G,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn;function rn(){return(rn=e((()=>{N(),qt(),W=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=H(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=W(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1),c=o.amount*(e[o.currency]||1);return H(s,c,r)===s?a:o},G=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=F(n,e));let i=W(t,r);if(i==null)return;let a=H(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},Jt=(e,t)=>n=>{let r=G(e,n);if(r===void 0)return!1;let i=G({...e,valuePath:`min`},t),a=G({...e,valuePath:`max`},t);return i===void 0||a===void 0||!(r<i||r>a)},Yt={},Xt=(e,t)=>{let n=e+(t||``)||``;return Yt[n]||(Yt[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),Yt[n]},Zt=(e,t,n)=>{let r=W(e,t);return r==null?``:Xt(r.currency,n).format(r.amount)},Qt=({valuePath:e,rates:t,locale:n},r)=>{let i=W(t,e?F(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:Zt(t,i,n)},$t=e=>e?e.amount+e.currency:``,en=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},tn=({valuePath:e},t)=>e?F(t,e)?.currency:null,nn=({valuePath:e},t)=>e?F(t,e)?.amount:void 0})))()}var K,an,on,sn,cn,ln,un;function q(){return(q=e((()=>{ut(),E(),K=Symbol(`column`),an=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},on=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:pt(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,align:e.align,headerAlign:e.headerAlign,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[K]:e}},sn=e=>e.isOmnitableColumn&&!e.hidden,cn=e=>{let t=e.filter(sn);return an(t)?t:[]},ln=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>on(e,n)),un=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=O([]);return g(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(ln(cn(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})))()}var dn,fn,pn;function J(){return(J=e((()=>{N(),q(),dn=(e,t)=>Array.isArray(e)?e.map(e=>F(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,fn=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return dn(r,n)},pn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:F(n,i);if(r===a)return;i!==void 0&&Ne(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[K]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})))()}var mn;function hn(){return(hn=e((()=>{m(),L(),I(),w(),N(),B(),Bt(),rn(),J(),mn=class extends z(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell`},headerCellClass:{type:String,value:`amount-header-cell`},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=G({...e,valuePath:`min`},t),r=G({...e,valuePath:`max`},t);if(n!=null||r!=null)return Jt(e,t)}getString(e,t){return Qt(e,t)}toXlsxValue(e,t){return Qt(e,t)}getComparableValue(e,t){return G(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=W(e,t.min),r=W(e,t.max);if(n!=null||r!=null)return $t(n)+`~`+$t(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:en(n[1]),max:en(n[2])}:null}renderCell(e,{item:t}){return C`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="number"
			@change=${r=>n({amount:r.target.value,currency:F(t,e.valuePath)?.currency})}
			.value=${nn(e,t)}
		>
			<div slot="suffix">${tn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,rates:a,currency:o,autoupdate:s,autodetect:c,disabledFiltering:l,headerAlign:u,align:d},{filter:f},p,m){return C`<cosmoz-omnitable-amount-range-input
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return fn(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,mn)})))()}var gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn;function On(){return(On=e((()=>{ne(),be(),me(),N(),J(),gn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=F(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},_n=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=gn(e,t);if(!r?.length)return[];let i=n??`label`,a=e=>String(typeof e==`object`&&e?F(e,i??``)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},vn=(e,t,n)=>de(t&&F(e,t)).map(A(n)),yn=({valuePath:e,textProperty:t},n)=>vn(n,e,t).filter(e=>e!=null).join(`, `),bn=yn,xn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=A(e),s=de(F(a,t));return i.some(t=>s.length===0&&A(r||e)(t)===n||s.some(e=>o(e)===o(t)))},Sn=e=>t=>e(e=>({...e,filter:t})),Cn=e=>t=>e(e=>({...e,headerFocused:t})),wn=e=>t=>e(e=>({...e,query:t})),Tn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=_n(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},En=(e,t)=>Tn(e,dn(t,e.valuePath)),Dn=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return yn(e,t)}toXlsxValue(e,t){return bn(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=F(n,e);return t==null?r:de(r).map(A(t)).sort().join(` `)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return xn(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){let n=e;return console.error(`Failed to deserialize filter value:`,{error:n?.name,message:n?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>Tn(e,await Promise.resolve(Ce(e.values,...t))):En(e,t)}}})))()}var kn,An,jn;function Mn(){return(Mn=e((()=>{ve(),Ke(),I(),w(),ne(),me(),On(),B(),E(),N(),q(),kn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ce(t):A(n),a=de(e&&F(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},An=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=A(e),o=A(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=de(F(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},jn=class extends Dn(z(P)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return C`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${R(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return C`<cosmoz-autocomplete-excluding
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
			@opened-changed=${e=>Cn(r)(e.detail.value)}
			@value-changed=${v(Sn(r))}
			@text-changed=${v(wn(r))}
			>${j(e.loading,()=>C`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return kn(e,t)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return An(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,jn)})))()}var Nn,Pn;function Fn(){return(Fn=e((()=>{ve(),Ke(),I(),w(),ne(),me(),On(),B(),N(),q(),Nn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ce(t):A(n),a=de(e&&F(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Pn=class extends Dn(z(P)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return C`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${R(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return C`<cosmoz-autocomplete-ui
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
			.onChange=${Sn(r)}
			@opened-changed=${e=>Cn(r)(e.detail.value)}
			.onText=${wn(r)}
			>${j(e.loading,()=>C`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Nn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Pn)})))()}var In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn;function Xn(){return(Xn=e((()=>{I(),B(),ve(),ut(),N(),w(),In=(e,t)=>t.find(({value:t})=>e===t),Ln=(e,t,n)=>{let r=In(t,n);return r?r.text:e},Rn=(e,t,n,r)=>Ln(e,F(t,n),r),zn=({valuePath:e},t,n)=>In(F(t,e),n),Bn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Vn=e=>t=>{e(e=>({...e,headerFocused:t}))},Hn=e=>t=>{e(e=>({...e,query:t}))},Un=e=>t=>e(t?.[0]?.value),Wn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>F(r,e)?t:n,Gn=({valuePath:e},t)=>n=>F(n,e)===t,Kn=pt((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),qn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?F(r,e)?t:n:``,Jn=(e,t)=>{try{return JSON.parse(t)}catch{return null}},Yn=class extends z(P){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Wn(e,t)}renderCell(e,{item:t}){return Wn(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return C`<cosmoz-autocomplete
			variant="inline"
			.title=${Rn(e.title,t,e.valuePath,Kn(r,i))}
			.source=${Kn(r,i)}
			.textProperty=${`text`}
			.value=${zn(e,t,Kn(r,i))}
			.onChange=${Un(n)}
			.limit=${1}
			>${j(e.loading,()=>C`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return C`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			variant="inline"
			.label=${e.title}
			.title=${Rn(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${`text`}
			.value=${In(t,i)}
			.text=${n}
			.onChange=${Bn(r)}
			@opened-changed=${e=>Vn(r)(e.detail.value)}
			.onText=${Hn(r)}
			.limit=${1}
			>${j(e.loading,()=>C`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return Kn(e,t)}getFilterFn(e,t){if(t!=null)return Gn(e,t)}toXlsxValue(e,t){return qn(e,t)}deserializeFilter(e,t){return Jn(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,Yn)})))()}var Zn;function Qn(){return(Qn=e((()=>{Ge(),It(),Zn=e=>class extends Ft(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return Le(e)}}})))()}var $n;function er(){return(er=e((()=>{m(),I(),k(),w(),Qn(),Nt(),V(),Rt(),$n=class extends Zn(Lt(P)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return C`
			${j(this.disabled,()=>C`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>C`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Mt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:C`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${D(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${D(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;if(n&&n.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,$n)})))()}var tr,nr,rr,Y,X,ir,ar,or,sr,cr,lr,ur,dr,fr,pr;function mr(){return(mr=e((()=>{Ge(),N(),qt(),tr=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},nr=e=>e.length===19?e+tr(e):e,rr=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=nr(t)),t=Ue(t),!t)||Number.isNaN(t.getTime())?null:t},Y=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=F(t,e));let r=rr(n);if(r!=null)return H(r.getTime())},X=(e,t,n)=>{let r=rr(e);if(r==null)return null;if(n==null||t==null)return r;let i=X(t);if(i==null)return r;let a=Y({},r),o=Y({},i);return a==null||o==null||n(a,o)===a?r:i},ir=(e,t)=>{if(t==null)return;let n=X(e);if(n!=null)return t.format(n)},ar={},or=e=>{let t=e||``;return ar[t]||(ar[t]=new Intl.DateTimeFormat(e||void 0)),ar[t]},sr=({valuePath:e,locale:t},n)=>{let r=F(n,e||``);return r===void 0?``:(r=X(r),r===null?`Invalid Date`:ir(r,or(t)))},cr=e=>{let t=X(e);if(t==null)return null;let n=Le(t);return n==null?null:n.slice(0,10)},lr=({valuePath:e},t)=>cr(F(t,e||``)),ur=(e,t)=>{let n=X(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},dr=e=>cr(e)??``,fr=({valuePath:e},t)=>{if(!e)return``;let n=X(F(t,e));if(!n)return``;let r=X(Le(n));return r?(r.setHours(0,0,0,0),r):``},pr=(e,t)=>n=>{let r=Y(e,n);if(r==null)return!1;let i=Y({...e,valuePath:`min`},t),a=Y({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var hr;function gr(){return(gr=e((()=>{m(),I(),w(),B(),er(),J(),mr(),L(),hr=class extends z(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return pr(e,t)}getString(e,t){return sr(e,t)}toXlsxValue(e,t){return fr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return dr(n)+`~`+dr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:X(n[1]),max:X(n[2])}:null}renderCell(e,{item:t}){return C`<div class="omnitable-cell-date">
			${sr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="date"
			@change=${e=>n(ur(e.target.value))}
			.value=${lr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return C`<cosmoz-omnitable-date-range-input
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return fn(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,hr)})))()}var _r;function vr(){return(vr=e((()=>{I(),k(),w(),Qn(),Nt(),V(),Rt(),_r=class extends Zn(Lt(P)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return C`
			${j(this.disabled,()=>C`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>C`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Mt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:C`
							<h3>${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${D(`From date`)}
								time-label=${D(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${D(`To date`)}
								time-label=${D(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,_r)})))()}var yr,br,xr,Sr,Cr,wr;function Tr(){return(Tr=e((()=>{N(),mr(),yr={},br=e=>{let t=e||``;return yr[t]||(yr[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),yr[t]},xr=({valuePath:e,locale:t},n)=>{let r=X(F(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ir(r,br(t))},Sr=({valuePath:e},t)=>e?F(t,e):``,Cr=e=>{let t=X(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},wr=e=>{if(e!=null&&e!==``&&typeof e==`string`)return X(e.replace(/\./gu,`:`)+`Z`)}})))()}var Er;function Dr(){return(Dr=e((()=>{$e(),L(),I(),w(),B(),vr(),J(),mr(),Tr(),Er=class extends z(P){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return pr(e,t)}getString(e,t){return xr(e,t)}toXlsxValue(e,t){return Sr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return Cr(n)+`~`+Cr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:wr(n[1]),max:wr(n[2])}:null}renderCell(e,{item:t}){return xr(e,t)}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="text"
			@change=${e=>n(ur(e.target.value))}
			.value=${xr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,filterStep:a,disabledFiltering:o,headerAlign:s,align:c},{filter:l},u,d){return C`<cosmoz-omnitable-datetime-range-input
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return fn(e,t)}},customElements.define(Er.is,Er)})))()}var Or;function kr(){return(kr=e((()=>{ve(),Ke(),I(),w(),On(),B(),Or=class extends Dn(z(P)){renderCell({valuePath:e,textProperty:t},{item:n}){let r=vn(n,e,t).map(e=>C`<li>${e}</li>`);return C`
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
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:n},r,i){return C`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${n}
			.onChange=${Sn(r)}
			@opened-changed=${e=>Cn(r)(e.detail.value)}
			.onText=${wn(r)}
			>${j(e.loading,()=>C`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Or)})))()}var Ar,jr;function Mr(){return(Mr=e((()=>{se(),E(),k(),Ar=le`
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
`,jr=({items:e})=>{let[t,n]=O(!1),r=Array.isArray(e)?e:[],i=p(()=>Math.max(0,r.length-1),[r]);if(r.length===0)return null;let a=r.length>2,o=r[0],s=a&&!t?[]:r.slice(1),c=e=>{e.stopPropagation(),e.preventDefault(),n(e=>!e)};return C`
		<ul>
			<li>
				<span>${o}</span>
			</li>
			<li class="see-more" ?hidden=${!a||t}>
				<a href="#" @click=${c}
					>${D(`and {0} more`,{0:i})}</a
				>
			</li>
			${s.map(e=>C`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!a||!t}>
				<a href="#" @click=${c}>${D(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,M(jr,{styleSheets:[pe(Ar)]}))})))()}var Nr;function Pr(){return(Pr=e((()=>{Mr(),I(),w(),ve(),On(),B(),q(),Nr=class extends Dn(z(P)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return C`<cosmoz-omnitable-column-list-data
			.items=${vn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="text"
			.value=${yn(e,t)}
			@change=${e=>n(e.target.value.split(/,\s*/gu))}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return C`<cosmoz-autocomplete-ui
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
			.onChange=${Sn(r)}
			@opened-changed=${e=>Cn(r)(e.detail.value)}
			.onText=${wn(r)}
			>${j(e.loading,()=>C`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Nr)})))()}var Fr;function Ir(){return(Ir=e((()=>{m(),I(),k(),w(),Nt(),V(),It(),Rt(),Fr=class extends Ft(Lt(P)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return C`
			${j(this.disabled,()=>C`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>C`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Mt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:C`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${D(`From`)}
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
								label=${D(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Fr)})))()}var Lr;function Rr(){return(Rr=e((()=>{m(),L(),I(),w(),B(),N(),Ir(),J(),qt(),Lr=class extends z(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=U({...e,valuePath:`min`},t),r=U({...e,valuePath:`max`},t);if(n!=null||r!=null)return Kt(e,t)}getString(e,t){return Gt(e,t)}toXlsxValue({valuePath:e},t){return F(t,e)}getComparableValue(e,t){return U(e,t)}serializeFilter(e,t){if(t==null)return;let n=H(t.min),r=H(t.max);if(n!=null||r!=null)return Ut(n)+`~`+Ut(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:H(n[1]),max:H(n[2])}:null}renderCell(e,{item:t}){return C`<div class="omnitable-cell-number">
			${Gt(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Ht(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,maximumFractionDigits:a,minimumFractionDigits:o,autoupdate:s,disabledFiltering:c,headerAlign:l,align:u},{filter:d},f,p){return C`<cosmoz-omnitable-number-range-input
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return fn(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Lr)})))()}var zr;function Br(){return(Br=e((()=>{m(),I(),k(),w(),Qn(),Nt(),V(),Rt(),zr=class extends Zn(Lt(P)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return C`
			${j(this.disabled,()=>C`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>C`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Mt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:C`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${D(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${D(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,zr)})))()}var Z,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr;function Xr(){return(Xr=e((()=>{Ge(),N(),mr(),qt(),Z=(e,t,n)=>{let r=typeof e==`string`&&e.length>3&&e.length<=9?nr(`1970-01-01T`+e):e;return X(r,t,n)},Vr={},Hr=e=>{let t=e||``;return Vr[t]||(Vr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Vr[t]},Ur=({valuePath:e,locale:t},n)=>{let r=Z(F(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ir(r,Hr(t))},Wr=(e,t)=>e.valuePath?Ur(e,t):``,Gr=e=>{let t=Z(e);if(t==null)return null;let n=Le(t);return n&&n.slice(11,19)},Kr=({valuePath:e},t)=>{if(t==null)return;let n=Gr(e==null?t:F(t,e));if(n==null)return;let r=Z(nr(`1970-01-01T`+n));return r==null?r:H(r.getTime())},qr=(e,t)=>n=>{let r=Kr(e,n);if(r==null)return!1;let i=Kr({...e,valuePath:`min`},t),a=Kr({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},Jr=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},Yr=e=>{if(e!=null&&e!==``)return Z(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})))()}var Zr;function Qr(){return(Qr=e((()=>{m(),L(),I(),w(),B(),Br(),J(),Xr(),Zr=class extends z(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=Kr({...e,valuePath:`min`},t),r=Kr({...e,valuePath:`max`},t);if(n!=null||r!=null)return qr(e,t)}getString(e,t){return Ur(e,t)}toXlsxValue(e,t){return Wr(e,t)}getComparableValue(e,t){return Kr(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return Jr(n)+`~`+Jr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Yr(n[1]),max:Yr(n[2])}:null}renderCell(e,{item:t}){return Ur(e,t)}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${Ur(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,locale:r,filterStep:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return C`<cosmoz-omnitable-time-range-input
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return fn(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,Zr)})))()}function $r(){return($r=e((()=>{hn(),Mn(),Fn(),Xn(),gr(),Dr(),kr(),Pr(),Rr(),Qr()})))()}var ei;function ti(){return(ti=e((()=>{E(),w(),ei=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return he;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):he},customElements.define(`cosmoz-omnitable-group-row`,M(ei,{useShadowDOM:!1}))})))()}var ni;function ri(){return(ri=e((()=>{E(),w(),ni=e=>{let{column:t}=e;return x(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),he},customElements.define(`cosmoz-omnitable-resize-nub`,M(ni))})))()}var ii,ai,oi,si;function ci(){return(ci=e((()=>{E(),_e(),S(),ii=({column:e,on:t,descending:n,setOn:r,setDescending:i})=>{let{name:a,title:o}=e??{};return C`<button
		class="sg"
		title=${ie(o)}
		data-on=${ie(a===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(a),i(!1)),t===`asc`?i(!0):t===`desc`&&(r(),i(!1))}}
	>
		<span>${o}</span> ${a===t?ge({width:`12`,height:`12`}):ye({width:`12`,height:`12`})}
	</button>`},ai=({columns:e,...t})=>e?.map(e=>ii({column:e,...t})),oi=()=>C`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>ai({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,si=()=>C`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>ai({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})))()}function li(e,t,{suffix:n=``,read:r,write:i,ready:a=!0,multi:s}={}){let c=oe({param:t,suffix:n,link:s?pi:fi,write:i??T}),l=p(()=>{if(t==null)return!1;if(s){let e=Xe(t+n);return Object.keys(e).length>0}return Qe(t+n)!==void 0},[]),[u,d]=O(()=>{if(t==null)return e;if(s){let i=Xe(t+n,r);return Object.keys(i).length>0?i:e}return Qe(t+n,r)??e}),f=o(e=>d(t=>{let n=Ce(e,t);return c.param!=null&&et(c.link(c.param+c.suffix,n,c.write),null,{notify:!1}),n}),[]);return x(()=>{c.param!=null&&a&&!l&&e!=null&&f(e)},[a]),[u,f]}var ui,di,fi,pi;function mi(){return(mi=e((()=>{at(),be(),ae(),lt(),E(),ui=e=>(t,n,r=T)=>{let i=nt(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},di=e=>e==null||e===``,fi=ui((e,t,n,r)=>di(n(t))?r.delete(e):r.set(e,n(t))),pi=ui((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>di(n)?r.delete(e+t):r.set(e+t,n))})})))()}var hi,gi,_i,vi,yi;function bi(){return(bi=e((()=>{E(),mi(),hi=e=>[!0,`true`,1,`yes`,`on`].includes(e),gi=e=>e===``||(e==null?void 0:hi(e)),_i=(e,t,n)=>o(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),vi=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[s,c]=li(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[l,u]=li(gi(n.descending),t,{suffix:`-descending`,read:gi,ready:a}),[d,f]=li(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[m,h]=li(gi(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:gi,ready:a}),g=p(()=>e.find(e=>e.name===s),[e,s]),_=p(()=>e.find(e=>e.name===d),[e,d]),v={groupOn:d,setGroupOn:_i(f,`groupOn`,r),groupOnDescending:m,setGroupOnDescending:_i(h,`groupOnDescending`,r),sortOn:s,setSortOn:_i(c,`sortOn`,r),descending:l,setDescending:_i(u,`descending`,r),columns:e},y=p(()=>v,Object.values(v)),b=o(e=>{c(typeof e.sortOn==`string`?e.sortOn:void 0),f(typeof e.groupOn==`string`?e.groupOn:void 0),u(typeof e.descending==`boolean`?e.descending:void 0),h(typeof e.groupOnDescending==`boolean`?e.groupOnDescending:void 0)},[]);return x(()=>void(i.current=b),[]),{...y,sortAndGroup:y,groupOnColumn:_,sortOnColumn:g}},yi=we(void 0),customElements.define(`sort-and-group-provider`,yi.Provider),customElements.define(`sort-and-group-consumer`,M(({render:e})=>e(Ee(yi)),{useShadowDOM:!1}))})))()}var xi,Si;function Ci(){return(Ci=e((()=>{E(),xe(),ri(),ci(),bi(),xi=({data:e,columns:t,groupOnColumn:r,filters:i,setFilterState:a,sortAndGroup:{sortOn:o,setSortOn:s,descending:c,setDescending:l}={}})=>n(t,e=>e.name,t=>[C`<div
				class="cell ${t.headerCellClass} header-cell"
				align="${t.headerAlign??t.align??`left`}"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===r}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,i[t.name]??{},e=>a(t.name,e),t.source(t,e))}
				${j(!t.noSort,()=>ii({on:o,setOn:s,descending:c,setDescending:l,column:t}))}
			</div>`,C`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Si=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let i=Ee(yi);return C`
		${j(e,e=>xi({columns:e,sortAndGroup:i,...r}))}
		${j(!n,()=>C` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,M(Si,{useShadowDOM:!1}))})))()}var wi,Ti;function Ei(){return(Ei=e((()=>{se(),E(),wi=le`
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
`,Ti=({column:e})=>C`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,M(Ti,{styleSheets:[pe(wi)]}))})))()}var Di;function Oi(){return(Oi=e((()=>{E(),w(),Ei(),Di=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>Ye(e,e=>C`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,M(Di,{useShadowDOM:!1}))})))()}var ki,Ai;function ji(){return(ji=e((()=>{E(),xe(),ki=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Ai=({columns:e,groupOnColumn:t,item:r,index:i,selected:a,expanded:o,onItemChange:s})=>n(e,e=>e.name,e=>C`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				align="${e.align??`left`}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,r)}"
				name="${e.name}"
			>
				${ki(e,{item:r,index:i,selected:a,expanded:o},s)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,M(Ai,{useShadowDOM:!1}))})))()}var Mi,Ni;function Pi(){return(Pi=e((()=>{se(),Mi=le`
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
		content: "";
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
		width: 10px;
		height: 2px;
		left: 4px;
		top: 8px;
		background-color: var(--cz-color-text-brand);
	}
`,Ni=le`
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
	.sg:not([data-on="desc"]) {
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
`})))()}var Fi,Ii;function Li(){return(Li=e((()=>{qe(),Fi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Ii=(e,t,n)=>{let r=e.map(e=>Fi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Fi(String(n))}).join(`;`)+`
`);i.unshift(r),it(new File(i,n,{type:`text/csv;charset=utf-8`}))}})))()}var Ri,zi;function Bi(){return(Bi=e((()=>{rt(),qe(),Ri=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},zi=(e,t,n,r)=>{let i=Ri(e,t),a=new st(n).addSheetFromData(i,r).generate();it(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})))()}var Vi,Q,Hi;function $(){return($=e((()=>{Vi=Symbol(`index`),Q=Symbol(`All`),Hi=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})))()}var Ui;function Wi(){return(Wi=e((()=>{Pe(),S(),k(),w(),Li(),Bi(),$(),Ui=({columns:e,selectedItems:t,setSelectedItems:n,csvFilename:r,xlsxFilename:i,xlsxSheetname:a,topPlacement:o,enableSelectAll:s,allSelected:c,allItemsCount:l})=>{let u=t===Q,d=u||t.length>0,f=t!==Q&&s&&c,p=t=>C`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${o}
		>
			${te({slot:`button`})}
			<cosmoz-button
				@click=${()=>Ii(e,t,r)}
			>
				${D(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				@click=${()=>zi(e,t,i,a)}
			>
				${D(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,m=j(u,()=>l===void 0?D(`All items selected`):D(`All {count} items selected`,{count:l}),()=>D(`{count} selected item`,{count:t===Q?0:t.length}));return C`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${d}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${m}
			${j(f,()=>C`&nbsp;<span
							part="select-all-items"
							class="selectAllItems"
							role="button"
							tabindex="0"
							style="cursor: pointer; color: white;"
							@click=${()=>n(Q)}
						>
							${D(`Select all items`)}
						</span>`)}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${j(t!==Q,()=>p(t))}
	</cosmoz-bottom-bar>`}})))()}var Gi;function Ki(){return(Ki=e((()=>{w(),Gi=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:s,setFilterState:c,settingsConfig:l,hideSelectAll:u})=>C`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${j(!u,()=>C`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${j(u,()=>C` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`})))()}var qi,Ji;function Yi(){return(Yi=e((()=>{E(),qi=s`
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
`,Ji=({settingsConfig:e})=>{let{columns:t,collapsed:n}=e,r=t.filter(e=>!n.some(t=>t.name===e.name));return C`<div class="skeleton">
		${Array.from({length:5},()=>C`<div>
					<div class="checkbox"></div>
					${r.map(e=>C`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,M(Ji,{styleSheets:[qi]}))})))()}var Xi;function Zi(){return(Zi=e((()=>{E(),Yi(),Me(),k(),w(),Xi=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:i,filterIsTooStrict:a,loading:o,displayEmptyGroups:s,compareItemsFn:c,selectedItems:l,setSelectedItems:u,renderItem:d,renderGroup:f,error:p}=t;return C`${j(!o&&!i&&!p,()=>C`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${ot({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${D(`Working set empty`)}</h3>
							<p>${D(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${j(a,()=>C`<div class="tableContent-empty">
					${ot({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div>
						<h3>${D(`Filter too strict`)}</h3>
						<p>${D(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${j(o&&!r.length,()=>C`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${j(o&&r.length,()=>C`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${j(p,()=>C`<div class="tableContent-empty overlay">
					${Ve({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${D(`Error loading data`)}</h3>
						<p>${p.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				.selectedItems=${l}
				@selected-items-changed=${v(u)}
				.displayEmptyGroups=${s}
				.compareItemsFn=${c}
				.renderItem=${d}
				.renderGroup=${f}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})))()}var Qi,$i;function ea(){return(ea=e((()=>{se(),Pi(),Qi=le`
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
`,$i=le`
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
`})))()}var ta,na;function ra(){return(ra=e((()=>{ae(),E(),ta=e=>{let t=parseInt(e??``,10);return isFinite(t)?t:void 0},na=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,s=oe({collapsed:i,settings:n.columns,requestTween:a,setSettings:o(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:o(e=>{let t=e.target instanceof Element?e.target:null;t&&t.closest(`.pull`)&&(s.handle=e.currentTarget instanceof HTMLElement?e.currentTarget:null)},[s]),onDragStart:o(e=>{let t=e.target instanceof HTMLElement?e.target:null,n=ta(t?.dataset.index);if(!t||!s.handle?.contains(t)||n==null)return e.preventDefault();s.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,String(n)),e.dataTransfer.setData(`text/plain`,String(n)),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>{(e.target instanceof HTMLElement?e.target:null)?.classList.remove(`drag`)},{once:!0})},[s]),onDragEnter:o(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:o(e=>{e.preventDefault(),e.currentTarget instanceof HTMLElement&&e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:o(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||t.classList.remove(`dragover`))},[]),onDrop:o(e=>{let t=ta(e.dataTransfer?.getData(`omnitable/sort-index`)),n=e.currentTarget instanceof HTMLElement?e.currentTarget:null,r=ta(n?.dataset.index),{settings:i,setSettings:a,requestTween:o}=s;n?.classList.remove(`dragover`),e.preventDefault();let c=i.slice();c.splice(r+(t>=r?0:-1),0,c.splice(t,1)[0]),o?.(),a(c)},[s]),onToggle:o(e=>{let{settings:t,setSettings:n,requestTween:r}=s,i=t.map(e=>({...e,disabled:e.disabled||s.collapsed?.some(t=>t.name===e.name)})),a=e.target instanceof HTMLInputElement?e.target:null,o=ta((e.target instanceof Element?e.target:null)?.closest(`[data-index]`)?.getAttribute(`data-index`));o!=null&&(i.splice(o,1,{...t[o],disabled:!a?.checked,priority:a?.checked?t.reduce((e,t)=>Math.max(e,t.priority??0),0)+1:t[o]?.priority}),r?.(),n(i))},[s])}}})))()}var ia,aa,oa,sa;function ca(){return(ca=e((()=>{We(),ct(),mt(),S(),se(),De(),E(),k(),ci(),ea(),ra(),ia=[He({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Re],aa=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:i,onDown:a,onToggle:o,collapsed:s,filters:c})=>(l,u)=>{let d=!!s?.find(e=>e.name===l.name),f=!l.disabled&&!d;return C` <div
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
			<button class="pull">${ee({width:`16`,height:`16`})}</button>
			<label class="title" ?has-filter=${!Ze(c[l.name]?.filter)}
				>${l.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${f}
				@click=${o}
				.indeterminate=${d}
			/>
		</div>`},oa=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:a,opened:o,setOpened:s,...c}=na(e);return C` <div class="headline">
			<span> ${D(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${D(`Close settings`)}"
				@click=${e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t?.focus(),t?.blur()}}
			>
				${d({width:`16`,height:`16`})}
			</cosmoz-button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${o.columns}
				@click=${()=>s(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${D(`Columns`)} ${ge({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${o.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(aa(c))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${o.sort}
				@click=${()=>s(e=>({...e,sort:!e.sort}))}
			>
				${D(`Sort on`)} ${ge({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${o.sort}> ${si()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${o.group}
				@click=${()=>s(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${D(`Group on`)} ${ge({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${o.group} part="groups groups-heading"
				>${oi()}</cosmoz-collapse
			>
		</div>

		${j(n,()=>C`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${i}
						?disabled=${!a}
					>
						${D(`Reset`)}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${r}
						?disabled=${!a}
					>
						${D(`Save`)}
					</cosmoz-button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,M(oa,{styleSheets:[pe(Qi)]})),sa=({config:e,newLayout:n})=>C`
	<cosmoz-dropdown
		.placement="${n?`bottom-start`:`bottom-end`}"
		.middleware="${ia}"
	>
		<div title="${D(`Sort and filter`)}" slot="button">
			${j(n,()=>C`<div class="headerDots">...</div>`,()=>C` ${t({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${j(e?.badge,()=>C`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,M(sa,{styleSheets:[pe($i)]}))})))()}var la,ua,da,fa,pa;function ma(){return(ma=e((()=>{me(),la=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],ua=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,da=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(ua(t.name))),i=e.filter(e=>e.name!=null&&!t.some(ua(e.name))&&!n.some(ua(e.name))),a=n.filter(e=>!t.some(ua(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},fa=(e,t)=>({...t,...ue(Array.from(la))(e),columns:e.columns?.map(ue([`name`,`priority`,`width`,`flex`,`disabled`]))}),pa=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(la.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?ue(Array.from(la))(n):{},...t,columns:da(e,t?.columns,n?.columns)})})))()}var ha;function ga(){return(ga=e((()=>{ha=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})))()}var _a,va;function ya(){return(ya=e((()=>{E(),ga(),_a=we(ha),va=()=>{let e=Ee(_a);return p(()=>e(),[e])}})))()}function ba(){return(ba=e((()=>{ya()})))()}var xa;function Sa(){return(Sa=e((()=>{E(),ba(),ma(),xa=(e,t,n,r)=>{let[i,a]=O(e?void 0:null),{read:s,write:c}=va();return x(async()=>{e&&a(await s(e))},[e,s]),{settingsId:e,savedSettings:i,onSave:o(async()=>{if(!e)return;let r=fa(t,i);await c(e,r),n(),a(r)},[t,i]),onReset:o(async t=>{n(),t.shiftKey&&(await c(e),a(null)),r?.()},[r]),hasChanges:t!=null}}})))()}var Ca;function wa(){return(wa=e((()=>{E(),q(),ma(),Sa(),Ca=({settingsId:e,host:t})=>{let n=p(()=>Object.fromEntries(la.map(e=>[e,t[e]])),[]),r=i(),a=o(()=>{r.current?.(n)},[n]),[s,c]=O(),[l,u]=O({columns:!0,sort:!0}),{savedSettings:d,...f}=xa(e,s,c,a),{enabledColumns:m,disabledFiltering:h}=t,g=un(t,{enabledColumns:m,disabledFiltering:h}),_=p(()=>pa({columns:g,settings:s,savedSettings:d??void 0,initial:n}),[g,s,d]),v=p(()=>_.columns.map(e=>g.find(t=>t.name===e.name)).filter(e=>e!==void 0),[g,..._.columns.map(e=>e.name)]);return{...f,savedSettings:d,opened:l,setOpened:u,settings:_,columns:v,setSettings:c,resetRef:r}}})))()}function Ta(){return(Ta=e((()=>{ca(),wa()})))()}var Ea,Da;function Oa(){return(Oa=e((()=>{Ea=e=>Number.isFinite(e)?e:0,Da=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=Ea(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];if(u>i+(a>=0?o*d:i*a/r)){s+=i,c+=u,l+=d,n[t]=u;continue}if(d===0){s+=i,c+=i,n[t]=i;continue}}r-=s,a=t-c-r,i-=l,o=Ea(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t],c=a>=0?o*s:i*a/r;n[t]=i+c}return n}})))()}var ka,Aa,ja;function Ma(){return(Ma=e((()=>{Oa(),$(),ka=(e,t)=>{let n=Hi(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${t}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`,o=0,s=0;return t.map((t,c)=>{let l=e[c];if(l==null||l===0)return a(t.name);o+=l;let u=Math.round(o),d=u-s;s=u;let f=r(t.name,d);return c===n?`${f}\n${i(t.name)}`:f}).join(`
`)},Aa=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Aa(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Da(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},ja=(e,t)=>e.length===0?`.cell {display: none;}`:ka(e,t)})))()}var Na;function Pa(){return(Pa=e((()=>{E(),Na=(e,t)=>x(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-88)});return n.observe(e),()=>n.unobserve(e)},[])})))()}var Fa;function Ia(){return(Ia=e((()=>{E(),Pa(),Fa=e=>{let[t,n]=O(()=>e.getBoundingClientRect().width-88);return Na(e,n),t}})))()}var La;function Ra(){return(Ra=e((()=>{E(),Ma(),La=({canvasWidth:e,groupOnColumn:t,config:n,miniColumn:r})=>p(()=>{if(!Array.isArray(n)||e==null||e===0)return[];let i=n.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>r?{...e,hidden:r.name!==e.name}:e).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Aa(i,e,i.length)},[e,t,n])})))()}var za;function Ba(){return(Ba=e((()=>{E(),za=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=p(()=>t<=r,[t,r]),[a,...o]=p(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i])??[],s=!!a;return x(()=>{e.toggleAttribute(`mini`,s)},[s]),{isMini:s&&i,miniColumn:a,miniColumns:o}}})))()}var Va;function Ha(){return(Ha=e((()=>{E(),Va=({host:e,canvasWidth:t,layout:n,setSettings:r,requestTween:a})=>{let o=i();o.current=e=>{a(),r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},x(()=>{let t=e=>o.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})))()}var Ua,Wa,Ga;function Ka(){return(Ka=e((()=>{be(),ae(),E(),Ua=(e,t)=>{let n=p(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);x(()=>{n.start()},t),x(()=>()=>n.stop(),[])},Wa=(e=0,t=0)=>Math.abs(e-t)<.1,Ga=(e,t=1.9,n=re,r)=>{let i=oe({target:e,speedFactor:t,onConverge:r}),a=o(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>Wa(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]);Ua(a,[e])}})))()}var qa,Ja;function Ya(){return(Ya=e((()=>{ae(),E(),Ma(),Ia(),Ra(),Ba(),Ha(),Ka(),qa=e=>{let t=p(()=>new CSSStyleSheet,[]);return x(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},Ja=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:a})=>{let s=Fa(e),{isMini:c,miniColumn:l,miniColumns:u}=za({host:e,canvasWidth:s,columns:t}),{groupOnColumn:d}=a,f=La({canvasWidth:s,groupOnColumn:d,miniColumn:l,config:n.columns}),m=qa(e),h=p(()=>n.columns.reduce((e,n,r)=>f[r]!=null||n.name===d?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,f]),[g,_]=O(1),v=o(()=>_(i??1.9),[i]),y=o(()=>_(1),[]),b=oe({columns:n.columns});return Ga(f,g,e=>{let t=ja(e,b.columns);m.replaceSync(t)},y),Va({host:e,canvasWidth:s,layout:f,setSettings:e=>r(e(n)),requestTween:v}),{isMini:c,collapsedColumns:h,miniColumns:u,requestTween:v}}})))()}var Xa;function Za(){return(Za=e((()=>{Xa=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})))()}var Qa;function $a(){return($a=e((()=>{E(),$(),Qa=({host:e,selectedItems:t,data:n,dataIsValid:r,columns:i,sortAndGroupOptions:a,collapsedColumns:o,settings:s,filterFunctions:c,settingS:l,filters:u,setFilterState:d,hideSelectAll:f,requestTween:m,...h})=>{let g=t===Q||!!n&&n.length>0&&Array.isArray(t)&&t.length===n.length,_=t=>{if(!(t.target instanceof HTMLInputElement))return;let n=e.shadowRoot.querySelector(`#groupedList`);t.target.checked?n.selectAll():n.deselectAll()},{groupOnColumn:v}=a,y=p(()=>[v,...o,...s.columns.filter(e=>e.disabled)].some(e=>!!e&&!!e.name&&Object.keys(c).includes(e.name)),[c,s,o]),b=p(()=>({...l,collapsed:o,badge:y,filters:u,requestTween:m}),[l,o,y,u,m]);return x(()=>{let t=e.shadowRoot.querySelector(`#tableContent`),n=new ResizeObserver(t=>requestAnimationFrame(()=>{e.style.setProperty(`--ot-height`,t[0]?.contentRect.height+`px`)}));return n.observe(t),()=>n.unobserve(t)},[]),{allSelected:g,onAllCheckboxChange:_,data:n,dataIsValid:r,columns:i,settingsConfig:b,filters:u,groupOnColumn:v,setFilterState:d,hideSelectAll:f,sortAndGroup:a.sortAndGroup,...h}}})))()}var eo,to,no,ro,io,ao,oo;function so(){return(so=e((()=>{S(),De(),E(),$(),J(),eo=e=>e instanceof HTMLInputElement,to=e=>e instanceof HTMLElement,no=e=>e?`groupRow groupRow-folded`:`groupRow`,ro=({item:e,index:t})=>n=>j((n?.length??0)>0,()=>C`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>C`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`),io=({columns:e,collapsedColumns:t,miniColumns:n,onItemClick:r,onCheckboxChange:i,dataIsValid:a,groupOnColumn:o,onItemChange:s,rowPartFn:c})=>(l,u,{selected:d,expanded:f,toggleCollapse:p})=>C`
			<div
				?selected=${d}
				part="${[`itemRow`,`itemRow-${l[Vi]}`,c?.(l,u)].filter(Boolean).join(` `)}"
				.dataIndex=${l[Vi]}
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
						?hidden="${Ze(t.length)}"
						?aria-expanded="${f}"
						@click="${p}"
					>
						${ge({width:`16`,height:`16`})}
					</button>
				</div>
				${ro({item:l,index:u})(n)}
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
		`,ao=({onCheckboxChange:e,dataIsValid:t,groupOnColumn:n})=>(r,i,{selected:a,folded:o,toggleFold:s})=>C` <div
			class="${no(o)}"
			part="groupRow groupRow-${r[Vi]}"
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
				${ge({width:`16`,height:`16`})}
			</button>
		</div>`,oo=({host:e,error:t,dataIsValid:n,processedItems:r,columns:a,collapsedColumns:s,miniColumns:c,sortAndGroupOptions:l,rowPartFn:u,...d})=>{let{loading:f=!1,displayEmptyGroups:m=!1,compareItemsFn:h}=e,g=i({shiftKey:!1,ctrlKey:!1}),_=o(t=>{if(!eo(t.target))return;let n=t.target,r=n.dataItem,i=n.checked,a=e.shadowRoot.querySelector(`#groupedList`);g.current.shiftKey?a.toggleSelectTo(r,i):g.current.ctrlKey?(n.checked=!0,a.selectOnly(r)):a.toggleSelect(r,i),t.preventDefault(),t.stopPropagation()},[]);x(()=>{let e=({shiftKey:e,ctrlKey:t})=>{g.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let v=o(t=>{if(!to(t.currentTarget))return;let n=t.currentTarget,r=t.composedPath();r.slice(0,r.indexOf(n)).some(e=>e instanceof Element&&e.matches(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:n.dataItem,index:n.dataIndex}}))},[]),{groupOnColumn:y}=l,b=o((t,n)=>r=>pn(e,t,n,r),[]);return{...d,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:f,compareItemsFn:h,displayEmptyGroups:m,error:t,renderItem:p(()=>io({columns:a,collapsedColumns:s,miniColumns:c,onItemClick:v,onCheckboxChange:_,dataIsValid:n,groupOnColumn:y,onItemChange:b,rowPartFn:u}),[a,s,v,_,n,y,b,u]),renderGroup:p(()=>ao({onCheckboxChange:_,dataIsValid:n,groupOnColumn:y}),[_,n,y])}}})))()}var co;function lo(){return(lo=e((()=>{co=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})))()}var uo,fo,po,mo,ho,go;function _o(){return(_o=e((()=>{be(),E(),lo(),q(),mi(),$(),uo=(e,t)=>(n,r)=>co(e(n),e(r))*(t?-1:1),fo=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),po=(e,t)=>{e&&t&&Object.entries(t).forEach(([t,n])=>{let r=e[K];r.__ownChange=!0,Object.assign(r,{[t]:n}),r.__ownChange=!1,r.dispatchEvent(new CustomEvent(`${fo(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},mo=(e,t)=>Object.assign(e,{[Vi]:t}),ho=Symbol(`unparsed`),go=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:s,groupOnDescending:c,sortOnColumn:l,descending:u}=r,d=o(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),f=o(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[ho]:n}];let i={filter:r.deserializeFilter(r,n)};return po(r,i),[e,i]},[t]),[m,h]=li({},n,{multi:!0,suffix:`-filter--`,write:d,read:f}),g=o((e,n)=>h(r=>{let i=Ce(n,r[e]);return po(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,h]),_=p(()=>Object.values(m).map(e=>e.filter),[m]),v=p(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,m[e.name]?.filter)]).filter(e=>!!e[1])),[t,..._]),y=p(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(v).length===0||a?e.slice():e.filter(e=>Object.values(v).every(t=>t(e))),[e,v,a]),b=p(()=>{if(!i&&!s&&l!=null&&l.sortOn!=null)return y.slice().sort(uo(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),u));if(s!=null&&s.groupOn!=null){let e=y.reduce((e,t)=>{let n=s.getComparableValue({...s,valuePath:s.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(uo(e=>s.getComparableValue({...s,valuePath:s.groupOn},e.items[0]),c)),!l||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(uo(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),u)),e))}return y},[y,s,c,l,u,i]),S=p(()=>{let e=0,t=0,n=[];return b.forEach(r=>{if(`items`in r&&Array.isArray(r.items)){mo(r,t++),r.items.forEach(t=>{mo(t,e++),n.push(t)});return}return mo(r,e++),n.push(r)},[]),n},[b]);return x(()=>{h(e=>Object.values(e).some(e=>e[ho]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>{let n=t[ho];return n==null?[e,t]:f([e,n])})):e)},[f]),{processedItems:b,visibleData:S,filters:m,filterFunctions:v,setFilterState:g}}})))()}var vo,yo;function bo(){return(bo=e((()=>{c(),h(),E(),vo=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(e){let n=[];for(let r=e.length-1;r>=0;--r){let i=t(e[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);i>-1&&n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},yo=({host:e,visibleData:t,filters:n,...r})=>{let{setFilterState:i}=r,o=p(()=>vo(e),[]),[s,c]=fe(`selectedItems`,[]);f(r,Object.values(r)),f(o,Object.values(o)),x(()=>{let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;i(t.name,e=>({...typeof e==`object`&&e?e:{},...t.state}))};return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),a(`visibleData`,t),a(`sortedFilteredGroupedItems`,r.sortedFilteredGroupedItems),a(`sortOn`,r.sortOn),a(`descending`,r.descending),a(`isMini`,r.isMini);let l=p(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return a(`filters`,l,Object.values(l)),{selectedItems:s,setSelectedItems:c}}})))()}var xo;function So(){return(So=e((()=>{Ta(),Ya(),Za(),$a(),so(),_o(),bo(),bi(),xo=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Ca({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=vi(p,t,{settings:d,setSettings:f,resetRef:m,ready:h!==void 0}),{processedItems:_,visibleData:v,filters:y,setFilterState:b,filterFunctions:x}=go({data:r,columns:p,hashParam:t,sortAndGroupOptions:g,noLocalSort:o,noLocalFilter:s}),{isMini:S,collapsedColumns:C,miniColumns:ee,requestTween:te}=Ja({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:g}),w=r&&Array.isArray(r)&&r.length>0,{selectedItems:T,setSelectedItems:E}=yo({host:e,visibleData:v,sortedFilteredGroupedItems:_,columns:p,filters:y,setFilterState:b,isMini:S,...g}),ne=Qa({host:e,selectedItems:T,sortAndGroupOptions:g,dataIsValid:w,data:r,columns:p,filters:y,collapsedColumns:C,settings:d,filterFunctions:x,settingS:u,setFilterState:b,hideSelectAll:e.hideSelectAll===!0,requestTween:te});return{header:ne,list:oo({host:e,error:c,dataIsValid:w,processedItems:_,selectedItems:T,setSelectedItems:E,columns:p,collapsedColumns:C,miniColumns:ee,sortAndGroupOptions:g,rowPartFn:l}),footer:Xa({host:e,selectedItems:T,allSelected:ne.allSelected,setSelectedItems:E,columns:p,enableSelectAll:e.enableSelectAll,allItemsCount:e.allItemsCount})}}})))()}function Co(){return(Co=e((()=>{w(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item!=null&&this._index!=null&&this._renderFn!=null&&u(this._renderFn(this._item,this._index),this)}})})))()}var wo,To,Eo,Do,Oo,ko,Ao,jo,Mo;function No(){return(No=e((()=>{wo={group:Symbol(`group`)},To=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),Eo=(e,t)=>!!To(e,t).expanded,Do=(e,t)=>!!To(e,t).folded,Oo=e=>e?e.items instanceof Array:!1,ko=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},Ao=(e,t,n)=>{if(Array.isArray(e))return ko(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?To(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[wo.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},jo=(e,...t)=>typeof e==`function`?e(...t):e,Mo=(e,t)=>e===t})))()}var Po;function Fo(){return(Fo=e((()=>{E(),No(),Po=()=>{let[e,t]=O(()=>[new WeakMap]);return{setItemState:o((e,n)=>t(([t])=>{let r=To(e,t);return Object.assign(r,jo(n,r)),[t]}),[]),state:e[0],signal:e}}})))()}var Io;function Lo(){return(Lo=e((()=>{E(),Fo(),No(),Io=()=>{let{setItemState:e,state:t,signal:n}=Po();return{state:t,signal:n,toggleFold:o((t,n)=>{Oo(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:o((t,n)=>{Oo(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})))()}var Ro;function zo(){return(zo=e((()=>{E(),$(),No(),Ro=({compareItemsFn:e,data:t,flatData:n})=>{let[r,i]=fe(`selectedItems`,()=>[]),[a,s]=O(),c=o(e=>r===Q||r.includes(e),[r]),l=o(e=>r===Q||(e?.items?.every(c)??!1),[r,c]),u=o(e=>c(e)||l(e),[c,l]),d=o(e=>{let t=e.items??[e];i(e=>e===Q?e:[...e,...t.filter(t=>!e.includes(t))]),s(e)},[]),f=o(e=>{let t=e.items??[e];i(e=>e===Q?(n??[]).filter(e=>!Oo(e)).filter(e=>!t.includes(e)):e.filter(e=>!t.includes(e))),s(e)},[n]),p=o(e=>{i(e.items?.slice()||[e]),s(e)},[]),m=o(()=>{i(t.flatMap(e=>e.items||e)),s(void 0)},[t]),h=o(()=>{i([]),s(void 0)},[]),g=o((e,t=!u(e))=>t?d(e):f(e),[u]),_=o((t,r)=>{if(!n)return;let i=a?n.findIndex(t=>e(t,a)):-1;if(i<0)return g(t,r);let[o,c]=[i,n.indexOf(t)].sort((e,t)=>e-t);n.slice(o,c+1).forEach((e,t,n)=>{t>0&&t<n.length-1&&Oo(e)||g(e,r)}),s(t)},[n,e,g]);return x(()=>i(t=>t!==Q&&t.length>0&&n?n.filter(n=>t.find(t=>e(n,t))):t),[n]),{selectedItems:r,isItemSelected:c,isGroupSelected:l,isSelected:u,select:d,deselect:f,selectOnly:p,selectAll:m,deselectAll:h,toggleSelect:g,toggleSelectTo:_}}})))()}var Bo,Vo,Ho;function Uo(){return(Uo=e((()=>{Se(),c(),E(),w(),Co(),Lo(),zo(),No(),Bo={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Vo=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=Mo}=e,{toggleFold:s,toggleCollapse:c,state:l,signal:u}=Io(),d=p(()=>Ao(t,i,l),[t,i,u]),{selectedItems:m,isItemSelected:h,isGroupSelected:_,isSelected:v,select:y,deselect:b,selectOnly:x,selectAll:S,deselectAll:C,toggleSelect:ee,toggleSelectTo:te}=Ro({compareItemsFn:a,data:t,flatData:d}),w=o((e,t)=>Array.isArray(e.items)?r(e,t,{selected:_(e),folded:Do(e,l),toggleSelect:t=>ee(e,typeof t==`boolean`?t:void 0),toggleFold:()=>s(e)}):n(e,t,{selected:h(e),expanded:Eo(e,l),toggleSelect:t=>ee(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>c(e)}),[n,r,m,ee,u]);g(()=>{Object.assign(e.style,Bo.host)},[]);let T={toggleFold:s,toggleCollapse:c,isItemSelected:h,isGroupSelected:_,isSelected:v,select:y,deselect:b,selectOnly:x,selectAll:S,deselectAll:C,toggleSelect:ee,toggleSelectTo:te};return f(T,Object.values(T)),{renderRow:w,flatData:d}},Ho=({renderRow:e,flatData:t})=>y({items:t,renderItem:(t,n)=>C`<cosmoz-grouped-list-row
				.item=${t}
				.index=${n}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})))()}var Wo;function Go(){return(Go=e((()=>{E(),Uo(),Wo=e=>Ho(Vo(e)),customElements.define(`cosmoz-grouped-list`,M(Wo,{useShadowDOM:!1}))})))()}function Ko(){return(Ko=e((()=>{Go()})))()}var qo,Jo,Yo;function Xo(){return(Xo=e((()=>{Ae(),Ot(),$r(),ti(),Ci(),Oi(),ji(),E(),tt(),w(),_(),Pi(),Wi(),Ki(),Zi(),So(),Ko(),qo=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,Jo=e=>{let{header:t,list:n,footer:i}=xo(e);return C`
		<style>
			${r([],()=>qo(Ni))}
		</style>

		<div class="mainContainer">
			${Gi(t)}
			<div class="tableContent" id="tableContent">
				${Xi(t,n)}
			</div>
			${Ui(i)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,M(Jo,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`inline`,`enable-select-all`]})),Yo=`
	<slot name="actions" slot="actions"></slot>
`,C(Object.assign([Yo],{raw:[Yo]})),Oe(Object.assign([Yo],{raw:[Yo]}))})))()}export{Xo as t};