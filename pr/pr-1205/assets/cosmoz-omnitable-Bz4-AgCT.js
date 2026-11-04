import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{$ as t,A as n,Bt as r,E as i,G as a,Gt as o,Ht as s,I as c,It as l,Jt as u,Mt as d,O as f,P as p,Pt as m,Q as h,Qt as g,R as _,Rt as v,S as y,St as b,T as x,U as ee,V as te,Wt as S,Y as C,Yt as w,Zt as T,_ as ne,_t as re,at as ie,b as E,bt as D,c as O,ct as ae,d as oe,dt as se,et as ce,f as le,ft as ue,gt as de,ht as fe,i as pe,it as me,jt as he,kt as ge,l as _e,lt as ve,m as ye,mt as k,n as be,nt as xe,ot as Se,p as Ce,pt as we,q as Te,r as Ee,rt as De,s as Oe,st as ke,u as Ae,ut as je,v as Me,vt as Ne,w as A,x as j,xt as M,y as N,yt as Pe,z as Fe}from"./iframe-CcNdH1W0.js";import{A as Ie,B as P,C as Le,D as Re,E as ze,F,G as Be,H as Ve,I as He,J as Ue,L as We,M as Ge,N as Ke,O as qe,P as I,R as Je,S as Ye,T as Xe,U as Ze,V as L,W as Qe,X as $e,Y as et,_ as tt,d as nt,f as rt,g as it,h as at,j as ot,k as st,l as ct,m as lt,n as ut,q as dt,r as ft,s as pt,t as mt,u as ht,v as gt,w as _t,x as vt,y as yt,z as bt}from"./dist-DmnS23Kw.js";var xt,St;function R(){return(R=e((()=>{p(),we(),je(),D(),xt=k`
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
`,St=()=>T`
	<style>
		${xt}
	</style>
	${_({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,M(St))})))()}var z,Ct,wt,Tt,Et,B;function V(){return(V=e((()=>{L(),z=({valuePath:e},t)=>P(t,e),Ct=z,wt=z,Tt=({valuePath:e},t)=>n=>{let r=P(n,e);return r!=null&&r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},Et=(e,t)=>t===``||t==null?null:t,B=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:`left`},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return z(e,t)}toXlsxValue(e,t){return Ct(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return Et(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return wt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})))()}var Dt,Ot,kt,At,jt,Mt,Nt;function Pt(){return(Pt=e((()=>{j(),R(),F(),g(),V(),Dt=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),Ot=e=>()=>e(e=>({...e,filter:e.inputValue})),kt=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},At=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),jt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Mt=e=>e!=null&&e!==``,Nt=class extends B(I){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(t!=null&&t!==``)return Tt(e,t)}renderCell(e,{item:t}){return T`<span class="default-column">${z(e,t)}</span>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${z(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return T`<cosmoz-input
			variant="inline"
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${n??t}
			@value-changed=${Dt(i)}
			focused=${r}
			@focused-changed=${At(i)}
			@keydown=${kt(i)}
			@blur=${Ot(i)}
		>
			${h(!e.disabledFiltering,()=>T`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Mt(t)}
						light
						@click=${jt(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,Nt)})))()}var Ft,It,Lt;function H(){return(H=e((()=>{j(),D(),g(),Ft=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],It=o`
	${f}

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
`,Lt=e=>{let{label:t,value:r,slot:i}=e;e.toggleAttribute(`has-value`,!!r);let a=T`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${i}
	>
		${r||``}
	</div>`;return n(a,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,M(Lt,{observedAttributes:Ft,styleSheets:[It]}))})))()}var Rt;function zt(){return(zt=e((()=>{Ze(),g(),Ge(),H(),Rt=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,align:a=`left`,externalValues:o=null})=>{let s={filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0}};return T`
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
			class=${ot({...s,dropdown:!0})}
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
	`}})))()}var Bt,Vt;function Ht(){return(Ht=e((()=>{ke(),Je(),Ie(),Re(),Bt=e=>e?typeof e.close==`function`?e:Bt(e.parentElement):null,Vt=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:`left`},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=qe.debounce(this._limitInputDebouncer,bt.after(600),()=>{this._limitInput(),this._updateFilter()}),st(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Bt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)&&(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);(this.getComparableValue(n)!==this.getComparableValue(t,`min`)||this.getComparableValue(r)!==this.getComparableValue(t,`max`))&&this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);(this.getComparableValue(r)!==this.getComparableValue(n,`min`)||this.getComparableValue(i)!==this.getComparableValue(n,`max`))&&(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(ae(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})))()}var Ut;function Wt(){return(Wt=e((()=>{F(),g(),Ut=e=>class extends e{static get template(){return He`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;w(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>w(r.render(),r.$.output))}}})))()}var Gt;function Kt(){return(Kt=e((()=>{j(),F(),N(),g(),zt(),H(),Ht(),Wt(),Gt=class extends Vt(Ut(I)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return T`
			${h(this.disabled,()=>T`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>T`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Rt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${E(`Minimum amount`)}
								label=${E(`Min amount`)}
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
								title=${E(`Maximum amount`)}
								label=${E(`Max amount`)}
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Gt)})))()}var U,qt,Jt,Yt,W,Xt,Zt,Qt;function $t(){return($t=e((()=>{L(),_t(),U=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=U(t);return i==null?r:n(r,i)},qt=e=>{let t=U(e);return t==null?null:t.toString()},Jt=({valuePath:e},t)=>{let n=U(e?P(t,e):t);return qt(n)},Yt=e=>qt(e)??``,W=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=e?P(n,e):n,i=U(r);if(i!=null)return t===null?i:U(i.toFixed(t))},Xt=ze((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Zt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?P(i,e):i;if(a==null)return``;let o=U(a);if(o!=null)return Xt(t,n,r).format(o)},Qt=(e,t)=>n=>{let r=W(e,n);if(r==null)return!1;let i=W({...e,valuePath:`min`},t),a=W({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var G,K,en,tn,nn,rn,an,on,sn,cn,ln;function un(){return(un=e((()=>{L(),$t(),G=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=U(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=G(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1),c=o.amount*(e[o.currency]||1);return U(s,c,r)===s?a:o},K=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=P(n,e));let i=G(t,r);if(i==null)return;let a=U(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},en=(e,t)=>n=>{let r=K(e,n);if(r===void 0)return!1;let i=K({...e,valuePath:`min`},t),a=K({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))},tn={},nn=(e,t)=>{let n=e+(t||``)||``;return tn[n]||(tn[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),tn[n]},rn=(e,t,n)=>{let r=G(e,t);return r==null?``:nn(r.currency,n).format(r.amount)},an=({valuePath:e,rates:t,locale:n},r)=>{let i=G(t,e?P(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:rn(t,i,n)},on=e=>e?e.amount+e.currency:``,sn=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},cn=({valuePath:e},t)=>e?P(t,e)?.currency:null,ln=({valuePath:e},t)=>e?P(t,e)?.amount:void 0})))()}var q,dn,fn,pn,mn,hn,gn;function J(){return(J=e((()=>{_t(),D(),q=Symbol(`column`),dn=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},fn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:Xe(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,align:e.align,headerAlign:e.headerAlign,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[q]:e}},pn=e=>e.isOmnitableColumn&&!e.hidden,mn=e=>{let t=e.filter(pn);return dn(t)?t:[]},hn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>fn(e,n)),gn=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=m([]);return l(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(hn(mn(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})))()}var _n,vn,yn;function Y(){return(Y=e((()=>{L(),J(),_n=(e,t)=>Array.isArray(e)?e.map(e=>P(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,vn=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return _n(r,n)},yn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:P(n,i);if(r===a)return;i!==void 0&&Ve(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[q]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})))()}var bn;function xn(){return(xn=e((()=>{j(),R(),F(),g(),L(),V(),Kt(),un(),Y(),bn=class extends B(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell`},headerCellClass:{type:String,value:`amount-header-cell`},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=K({...e,valuePath:`min`},t),r=K({...e,valuePath:`max`},t);if(n!=null||r!=null)return en(e,t)}getString(e,t){return an(e,t)}toXlsxValue(e,t){return an(e,t)}getComparableValue(e,t){return K(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=G(e,t.min),r=G(e,t.max);if(n!=null||r!=null)return on(n)+`~`+on(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:sn(n[1]),max:sn(n[2])}:null}renderCell(e,{item:t}){return T`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			compact
			type="number"
			@change=${r=>n({amount:r.target.value,currency:P(t,e.valuePath)?.currency})}
			.value=${ln(e,t)}
		>
			<div slot="suffix">${cn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,rates:a,currency:o,autoupdate:s,autodetect:c,disabledFiltering:l,headerAlign:u,align:d},{filter:f},p,m){return T`<cosmoz-omnitable-amount-range-input
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return vn(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,bn)})))()}var Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn;function Pn(){return(Pn=e((()=>{pe(),ke(),Oe(),L(),Y(),Sn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=P(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},Cn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=Sn(e,t);if(!r?.length)return[];let i=n??`label`,a=e=>String(typeof e==`object`&&e?P(e,i??``)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},wn=(e,t,n)=>Ee(t&&P(e,t)).map(O(n)),Tn=({valuePath:e,textProperty:t},n)=>wn(n,e,t).filter(e=>e!=null).join(`, `),En=Tn,Dn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=O(e),s=Ee(P(a,t));return i.some(t=>s.length===0&&O(r||e)(t)===n||s.some(e=>o(e)===o(t)))},On=e=>t=>e(e=>({...e,filter:t})),kn=e=>t=>e(e=>({...e,headerFocused:t})),An=e=>t=>e(e=>({...e,query:t})),jn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=Cn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Mn=(e,t)=>jn(e,_n(t,e.valuePath)),Nn=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Tn(e,t)}toXlsxValue(e,t){return En(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=P(n,e);return t==null?r:Ee(r).map(O(t)).sort().join(` `)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Dn(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){let n=e;return console.error(`Failed to deserialize filter value:`,{error:n?.name,message:n?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>jn(e,await Promise.resolve(ae(e.values,...t))):Mn(e,t)}}})))()}var Fn,In,Ln;function Rn(){return(Rn=e((()=>{be(),Le(),F(),g(),pe(),Oe(),Pn(),V(),D(),L(),J(),Fn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?Ae(t):O(n),a=Ee(e&&P(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},In=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=O(e),o=O(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=Ee(P(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Ln=class extends Nn(B(I)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return T`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${z(e,t)}
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
			.itemRenderer=${e[q]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			@opened-changed=${e=>kn(r)(e.detail.value)}
			@value-changed=${he(On(r))}
			@text-changed=${he(An(r))}
			>${h(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return Fn(e,t)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return In(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Ln)})))()}var zn,Bn;function Vn(){return(Vn=e((()=>{be(),Le(),F(),g(),pe(),Oe(),Pn(),V(),L(),J(),zn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?Ae(t):O(n),a=Ee(e&&P(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Bn=class extends Nn(B(I)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return T`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${z(e,t)}
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
			.itemRenderer=${e[q]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			.onChange=${On(r)}
			@opened-changed=${e=>kn(r)(e.detail.value)}
			.onText=${An(r)}
			>${h(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return zn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Bn)})))()}var Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr;function nr(){return(nr=e((()=>{F(),V(),be(),_t(),L(),g(),Hn=(e,t)=>t.find(({value:t})=>e===t),Un=(e,t,n)=>{let r=Hn(t,n);return r?r.text:e},Wn=(e,t,n,r)=>Un(e,P(t,n),r),Gn=({valuePath:e},t,n)=>Hn(P(t,e),n),Kn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},qn=e=>t=>{e(e=>({...e,headerFocused:t}))},Jn=e=>t=>{e(e=>({...e,query:t}))},Yn=e=>t=>e(t?.[0]?.value),Xn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>P(r,e)?t:n,Zn=({valuePath:e},t)=>n=>P(n,e)===t,Qn=Xe((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),$n=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?P(r,e)?t:n:``,er=(e,t)=>{try{return JSON.parse(t)}catch{return null}},tr=class extends B(I){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Xn(e,t)}renderCell(e,{item:t}){return Xn(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return T`<cosmoz-autocomplete
			compact
			mode="select"
			.title=${Wn(e.title,t,e.valuePath,Qn(r,i))}
			.source=${Qn(r,i)}
			.textProperty=${`text`}
			.value=${Gn(e,t,Qn(r,i))}
			.onChange=${Yn(n)}
			.limit=${1}
			>${h(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return T`<cosmoz-autocomplete-ui
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
			>${h(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return Qn(e,t)}getFilterFn(e,t){if(t!=null)return Zn(e,t)}toXlsxValue(e,t){return $n(e,t)}deserializeFilter(e,t){return er(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,tr)})))()}var rr;function ir(){return(ir=e((()=>{de(),Ht(),rr=e=>class extends Vt(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return re(e)}}})))()}var ar;function or(){return(or=e((()=>{j(),F(),N(),g(),ir(),zt(),H(),Wt(),ar=class extends rr(Ut(I)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return T`
			${h(this.disabled,()=>T`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>T`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Rt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${E(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${E(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;n&&n.match(/^0+/u)?this._limitInputDebouncer.cancel():super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,ar)})))()}var sr,cr,lr,X,Z,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr;function br(){return(br=e((()=>{de(),L(),$t(),sr=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},cr=e=>e.length===19?e+sr(e):e,lr=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=cr(t)),t=fe(t),!t)||Number.isNaN(t.getTime())?null:t},X=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=P(t,e));let r=lr(n);if(r!=null)return U(r.getTime())},Z=(e,t,n)=>{let r=lr(e);if(r==null)return null;if(n==null||t==null)return r;let i=Z(t);if(i==null)return r;let a=X({},r),o=X({},i);return a==null||o==null||n(a,o)===a?r:i},ur=(e,t)=>{if(t==null)return;let n=Z(e);if(n!=null)return t.format(n)},dr={},fr=e=>{let t=e||``;return dr[t]||(dr[t]=new Intl.DateTimeFormat(e||void 0)),dr[t]},pr=({valuePath:e,locale:t},n)=>{let r=P(n,e||``);return r===void 0?``:(r=Z(r),r===null?`Invalid Date`:ur(r,fr(t)))},mr=e=>{let t=Z(e);if(t==null)return null;let n=re(t);return n==null?null:n.slice(0,10)},hr=({valuePath:e},t)=>mr(P(t,e||``)),gr=(e,t)=>{let n=Z(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},_r=e=>mr(e)??``,vr=({valuePath:e},t)=>{if(!e)return``;let n=Z(P(t,e));if(!n)return``;let r=Z(re(n));return r?(r.setHours(0,0,0,0),r):``},yr=(e,t)=>n=>{let r=X(e,n);if(r==null)return!1;let i=X({...e,valuePath:`min`},t),a=X({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var xr;function Sr(){return(Sr=e((()=>{j(),F(),g(),V(),or(),Y(),br(),R(),xr=class extends B(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=X({...e,valuePath:`min`},t),r=X({...e,valuePath:`max`},t);if(n!=null||r!=null)return yr(e,t)}getString(e,t){return pr(e,t)}toXlsxValue(e,t){return vr(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return _r(n)+`~`+_r(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Z(n[1]),max:Z(n[2])}:null}renderCell(e,{item:t}){return T`<div class="omnitable-cell-date">
			${pr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			compact
			type="date"
			@change=${e=>n(gr(e.target.value))}
			.value=${hr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return T`<cosmoz-omnitable-date-range-input
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return vn(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,xr)})))()}var Cr;function wr(){return(wr=e((()=>{F(),N(),g(),ir(),zt(),H(),Wt(),Cr=class extends rr(Ut(I)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return T`
			${h(this.disabled,()=>T`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>T`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Rt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${E(`From date`)}
								time-label=${E(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${E(`To date`)}
								time-label=${E(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,Cr)})))()}var Tr,Er,Dr,Or,kr,Ar;function jr(){return(jr=e((()=>{L(),br(),Tr={},Er=e=>{let t=e||``;return Tr[t]||(Tr[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),Tr[t]},Dr=({valuePath:e,locale:t},n)=>{let r=Z(P(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ur(r,Er(t))},Or=({valuePath:e},t)=>e?P(t,e):``,kr=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Ar=e=>{if(e!=null&&e!==``&&typeof e==`string`)return Z(e.replace(/\./gu,`:`)+`Z`)}})))()}var Mr;function Nr(){return(Nr=e((()=>{Ye(),R(),F(),g(),V(),wr(),Y(),br(),jr(),Mr=class extends B(I){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=X({...e,valuePath:`min`},t),r=X({...e,valuePath:`max`},t);if(n!=null||r!=null)return yr(e,t)}getString(e,t){return Dr(e,t)}toXlsxValue(e,t){return Or(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return kr(n)+`~`+kr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Ar(n[1]),max:Ar(n[2])}:null}renderCell(e,{item:t}){return Dr(e,t)}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(gr(e.target.value))}
			.value=${Dr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,filterStep:a,disabledFiltering:o,headerAlign:s,align:c},{filter:l},u,d){return T`<cosmoz-omnitable-datetime-range-input
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return vn(e,t)}},customElements.define(Mr.is,Mr)})))()}var Pr;function Fr(){return(Fr=e((()=>{be(),Le(),F(),g(),Pn(),V(),Pr=class extends Nn(B(I)){renderCell({valuePath:e,textProperty:t},{item:n}){let r=wn(n,e,t).map(e=>T`<li>${e}</li>`);return T`
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
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:n},r,i){return T`<cosmoz-autocomplete-ui
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
			>${h(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Pr)})))()}var Ir,Lr;function Rr(){return(Rr=e((()=>{we(),se(),je(),D(),N(),Ir=k`
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
`,Lr=({items:e})=>{let[t,n]=m(!1),i=Array.isArray(e)?e:[],a=r(()=>Math.max(0,i.length-1),[i]);if(i.length===0)return null;let o=i.length>2,s=i[0],c=o&&!t?[]:i.slice(1),l=e=>{e.stopPropagation(),e.preventDefault(),n(e=>!e)};return T`
		<ul>
			<li>
				<span>${s}</span>
			</li>
			<li class="see-more" ?hidden=${!o||t}>
				<a href="#" @click=${l}
					>${E(`and {0} more`,{0:a})}</a
				>
			</li>
			${c.map(e=>T`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!o||!t}>
				<a href="#" @click=${l}>${E(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,M(Lr,{styleSheets:[ue(Ir)]}))})))()}var zr;function Br(){return(Br=e((()=>{Rr(),F(),g(),be(),Pn(),V(),J(),zr=class extends Nn(B(I)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return T`<cosmoz-omnitable-column-list-data
			.items=${wn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			compact
			type="text"
			.value=${Tn(e,t)}
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
			.itemRenderer=${e[q]?.itemRenderer}
			.value=${t}
			.text=${n}
			.onChange=${On(r)}
			@opened-changed=${e=>kn(r)(e.detail.value)}
			.onText=${An(r)}
			>${h(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,zr)})))()}var Vr;function Hr(){return(Hr=e((()=>{j(),F(),N(),g(),zt(),H(),Ht(),Wt(),Vr=class extends Vt(Ut(I)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return T`
			${h(this.disabled,()=>T`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>T`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Rt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${E(`From`)}
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
								label=${E(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Vr)})))()}var Ur;function Wr(){return(Wr=e((()=>{j(),R(),F(),g(),V(),L(),Hr(),Y(),$t(),Ur=class extends B(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=W({...e,valuePath:`min`},t),r=W({...e,valuePath:`max`},t);if(n!=null||r!=null)return Qt(e,t)}getString(e,t){return Zt(e,t)}toXlsxValue({valuePath:e},t){return P(t,e)}getComparableValue(e,t){return W(e,t)}serializeFilter(e,t){if(t==null)return;let n=U(t.min),r=U(t.max);if(n!=null||r!=null)return Yt(n)+`~`+Yt(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:U(n[1]),max:U(n[2])}:null}renderCell(e,{item:t}){return T`<div class="omnitable-cell-number">
			${Zt(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			compact
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Jt(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,maximumFractionDigits:a,minimumFractionDigits:o,autoupdate:s,disabledFiltering:c,headerAlign:l,align:u},{filter:d},f,p){return T`<cosmoz-omnitable-number-range-input
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return vn(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Ur)})))()}var Gr;function Kr(){return(Kr=e((()=>{j(),F(),N(),g(),ir(),zt(),H(),Wt(),Gr=class extends rr(Ut(I)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return T`
			${h(this.disabled,()=>T`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>T`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Rt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${E(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${E(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Gr)})))()}var Q,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti;function ni(){return(ni=e((()=>{de(),L(),br(),$t(),Q=(e,t,n)=>{let r=typeof e==`string`&&e.length>3&&e.length<=9?cr(`1970-01-01T`+e):e;return Z(r,t,n)},qr={},Jr=e=>{let t=e||``;return qr[t]||(qr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),qr[t]},Yr=({valuePath:e,locale:t},n)=>{let r=Q(P(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ur(r,Jr(t))},Xr=(e,t)=>e.valuePath?Yr(e,t):``,Zr=e=>{let t=Q(e);if(t==null)return null;let n=re(t);return n&&n.slice(11,19)},Qr=({valuePath:e},t)=>{if(t==null)return;let n=Zr(e==null?t:P(t,e));if(n==null)return;let r=Q(cr(`1970-01-01T`+n));return r==null?r:U(r.getTime())},$r=(e,t)=>n=>{let r=Qr(e,n);if(r==null)return!1;let i=Qr({...e,valuePath:`min`},t),a=Qr({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},ei=e=>{let t=Q(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},ti=e=>{if(e!=null&&e!==``)return Q(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})))()}var ri;function ii(){return(ii=e((()=>{j(),R(),F(),g(),V(),Kr(),Y(),ni(),ri=class extends B(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=Qr({...e,valuePath:`min`},t),r=Qr({...e,valuePath:`max`},t);if(n!=null||r!=null)return $r(e,t)}getString(e,t){return Yr(e,t)}toXlsxValue(e,t){return Xr(e,t)}getComparableValue(e,t){return Qr(e,t)}serializeFilter(e,t){if(t==null)return;let n=Q(t.min),r=Q(t.max);if(n!=null||r!=null)return ei(n)+`~`+ei(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:ti(n[1]),max:ti(n[2])}:null}renderCell(e,{item:t}){return Yr(e,t)}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${Yr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,locale:r,filterStep:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return T`<cosmoz-omnitable-time-range-input
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return vn(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,ri)})))()}function ai(){return(ai=e((()=>{xn(),Rn(),Vn(),nr(),Sr(),Nr(),Fr(),Br(),Wr(),ii()})))()}var oi;function si(){return(si=e((()=>{D(),g(),oi=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return u;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):u},customElements.define(`cosmoz-omnitable-group-row`,M(oi,{useShadowDOM:!1}))})))()}var ci;function li(){return(li=e((()=>{D(),g(),ci=e=>{let{column:t}=e;return S(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),u},customElements.define(`cosmoz-omnitable-resize-nub`,M(ci))})))()}var ui,di,fi,pi;function mi(){return(mi=e((()=>{$e(),D(),t(),p(),ui=({column:e,on:t,descending:n,setOn:r,setDescending:i})=>{let{name:a,title:o}=e??{};return T`<cosmoz-button
		variant="tertiary"
		class="sg"
		title=${ce(o)}
		data-on=${ce(a===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(a),i(!1)),t===`asc`?i(!0):t===`desc`&&(r(),i(!1))}}
	>
		<span>${o}</span> ${a===t?C({width:`12`,height:`12`}):Te({width:`12`,height:`12`})}
	</cosmoz-button>`},di=({columns:e,...t})=>e?.map(e=>ui({column:e,...t})),fi=()=>T`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>di({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,pi=()=>T`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>di({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})))()}function hi(e,t,{suffix:n=``,read:i,write:a,ready:o=!0,multi:s}={}){let c=De({param:t,suffix:n,link:s?bi:yi,write:a??Se}),l=r(()=>{if(t==null)return!1;if(s){let e=tt(t+n);return Object.keys(e).length>0}return gt(t+n)!==void 0},[]),[u,d]=m(()=>{if(t==null)return e;if(s){let r=tt(t+n,i);return Object.keys(r).length>0?r:e}return gt(t+n,i)??e}),f=v(e=>d(t=>{let n=gi(e)?e(t):e;return c.param!=null&&vt(c.link(c.param+c.suffix,n,c.write),null,{notify:!1}),n}),[]);return S(()=>{c.param!=null&&o&&!l&&e!=null&&f(e)},[o]),[u,f]}var gi,_i,vi,yi,bi;function xi(){return(xi=e((()=>{yt(),ke(),xe(),it(),D(),gi=e=>typeof e==`function`,_i=e=>(t,n,r=Se)=>{let i=at(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},vi=e=>e==null||e===``,yi=_i((e,t,n,r)=>vi(n(t))?r.delete(e):r.set(e,n(t))),bi=_i((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>vi(n)?r.delete(e+t):r.set(e+t,n))})})))()}var Si,Ci,wi,Ti,Ei;function Di(){return(Di=e((()=>{D(),xi(),Si=e=>[!0,`true`,1,`yes`,`on`].includes(e),Ci=e=>e===``||(e==null?void 0:Si(e)),wi=(e,t,n)=>v(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),Ti=(e,t,{settings:n,setSettings:i,resetRef:a,ready:o=!0})=>{let[s,c]=hi(n.sortOn,t,{suffix:`-sortOn`,ready:o}),[l,u]=hi(Ci(n.descending),t,{suffix:`-descending`,read:Ci,ready:o}),[d,f]=hi(n.groupOn,t,{suffix:`-groupOn`,ready:o}),[p,m]=hi(Ci(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:Ci,ready:o}),h=r(()=>e.find(e=>e.name===s),[e,s]),g=r(()=>e.find(e=>e.name===d),[e,d]),_={groupOn:d,setGroupOn:wi(f,`groupOn`,i),groupOnDescending:p,setGroupOnDescending:wi(m,`groupOnDescending`,i),sortOn:s,setSortOn:wi(c,`sortOn`,i),descending:l,setDescending:wi(u,`descending`,i),columns:e},y=r(()=>_,Object.values(_)),b=v(e=>{c(typeof e.sortOn==`string`?e.sortOn:void 0),f(typeof e.groupOn==`string`?e.groupOn:void 0),u(typeof e.descending==`boolean`?e.descending:void 0),m(typeof e.groupOnDescending==`boolean`?e.groupOnDescending:void 0)},[]);return S(()=>void(a.current=b),[]),{...y,sortAndGroup:y,groupOnColumn:g,sortOnColumn:h}},Ei=b(void 0),customElements.define(`sort-and-group-provider`,Ei.Provider),customElements.define(`sort-and-group-consumer`,M(({render:e})=>e(s(Ei)),{useShadowDOM:!1}))})))()}var Oi,ki;function Ai(){return(Ai=e((()=>{D(),ye(),li(),mi(),Di(),Oi=({data:e,columns:t,groupOnColumn:n,filters:r,setFilterState:i,sortAndGroup:{sortOn:a,setSortOn:o,descending:s,setDescending:c}={}})=>Ce(t,e=>e.name,t=>[T`<div
				class="cell ${t.headerCellClass} header-cell"
				align="${t.headerAlign??t.align??`left`}"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,r[t.name]??{},e=>i(t.name,e),t.source(t,e))}
				${h(!t.noSort,()=>ui({on:a,setOn:o,descending:s,setDescending:c,column:t}))}
			</div>`,T`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),ki=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let i=s(Ei);return T`
		${h(e,e=>Oi({columns:e,sortAndGroup:i,...r}))}
		${h(!n,()=>T` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,M(ki,{useShadowDOM:!1}))})))()}var ji,Mi;function Ni(){return(Ni=e((()=>{we(),se(),je(),D(),ji=k`
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
`,Mi=({column:e})=>T`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,M(Mi,{styleSheets:[ue(ji)]}))})))()}var Pi;function Fi(){return(Fi=e((()=>{D(),g(),Ni(),Pi=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>lt(e,e=>T`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,M(Pi,{useShadowDOM:!1}))})))()}var Ii,Li;function Ri(){return(Ri=e((()=>{D(),ye(),Ii=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Li=({columns:e,groupOnColumn:t,item:n,index:r,selected:i,expanded:a,onItemChange:o})=>Ce(e,e=>e.name,e=>T`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				align="${e.align??`left`}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${Ii(e,{item:n,index:r,selected:i,expanded:a},o)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,M(Li,{useShadowDOM:!1}))})))()}var zi,Bi;function Vi(){return(Vi=e((()=>{we(),je(),zi=k`
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
		box-shadow: inset 0 0 0 1px var(--cz-color-fg-tertiary);
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
`,Bi=k`
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

	.tableContent-empty:has(cosmoz-omnitable-skeleton) {
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
	.tableContent-empty.overlay:has(cosmoz-omnitable-skeleton) {
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

	.cell[align="right"] {
		text-align: right;
	}

	.cell[align="left"] {
		text-align: left;
	}

	.cell[align="center"] {
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
		box-shadow: var(
				--cz-shadow-raised,
				0 0 0 1px var(--cz-color-border-secondary)
			),
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
	.mainContainer:has(cosmoz-bottom-bar[active]) .tableContent-scroller {
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

	${zi}

	/* Row controls wait for the pointer, so the list reads as data. Once
	   anything is selected, every checkbox shows. */
	@media (hover: hover) {
		.itemRow .checkbox:not(:checked),
		.itemRow cosmoz-button.expand:not([aria-expanded]),
		.itemRow .row-menu-trigger {
			opacity: 0;
			transition: opacity 120ms;
		}
		.itemRow:is(:hover, :focus-within) .checkbox,
		.itemRow:is(:hover, :focus-within) cosmoz-button.expand,
		.itemRow:is(:hover, :focus-within) .row-menu-trigger,
		.mainContainer:has(cosmoz-bottom-bar[active]) .itemRow .checkbox {
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

	/* Per-row action menu: the trigger sits next to the checkbox in a fixed
	   slot, which the header keeps empty so the columns stay aligned. The
	   menu is one solid raised popover at the trigger or the pointer. */
	cosmoz-button.row-menu-trigger {
		flex: none;
		--cz-control-height-md: 24px;
		width: 24px;
		margin-inline-end: var(--cz-spacing);
		color: var(--cz-color-fg-quaternary);
	}
	:host([row-menu]) .header cosmoz-omnitable-header-row {
		margin-inline-start: calc(var(--cz-spacing) + 24px);
	}
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
		box-shadow: var(
				--cz-shadow-raised,
				0 0 0 1px var(--cz-color-border-secondary)
			),
			var(--cz-shadow-lg);
		color: var(--cz-color-text-primary);
		font-family: inherit;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		outline: none;
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
`})))()}var Hi,Ui;function Wi(){return(Wi=e((()=>{nt(),Hi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Ui=(e,t,n)=>{let r=e.map(e=>Hi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Hi(String(n))}).join(`;`)+`
`);i.unshift(r),rt(new File(i,n,{type:`text/csv;charset=utf-8`}))}})))()}var Gi,Ki;function qi(){return(qi=e((()=>{ht(),nt(),Gi=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Ki=(e,t,n,r)=>{let i=Gi(e,t),a=new ct(n).addSheetFromData(i,r).generate();rt(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})))()}var Ji,$,Yi;function Xi(){return(Xi=e((()=>{Ji=Symbol(`index`),$=Symbol(`All`),Yi=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})))()}var Zi;function Qi(){return(Qi=e((()=>{Ze(),p(),N(),g(),Wi(),qi(),Xi(),Zi=({columns:e,selectedItems:t,setSelectedItems:n,csvFilename:r,xlsxFilename:i,xlsxSheetname:a,topPlacement:o,enableSelectAll:s,allSelected:c,allItemsCount:l})=>{let u=t===$,d=u||t.length>0,f=t!==$&&s&&c,p=t=>T`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${o}
		>
			${te({slot:`button`})}
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Ui(e,t,r)}
			>
				${E(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Ki(e,t,i,a)}
			>
				${E(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,m=h(u,()=>l===void 0?E(`All items selected`):E(`All {count} items selected`,{count:l}),()=>E(`{count} selected item`,{count:t===$?0:t.length}));return T`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${d}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${m}
			${h(f,()=>T`&nbsp;<span
							part="select-all-items"
							class="selectAllItems"
							role="button"
							tabindex="0"
							style="cursor: pointer; color: var(--cz-color-text-brand);"
							@click=${()=>n($)}
						>
							${E(`Select all items`)}
						</span>`)}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${h(t!==$,()=>p(t))}
	</cosmoz-bottom-bar>`}})))()}var $i;function ea(){return(ea=e((()=>{g(),$i=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:s,setFilterState:c,settingsConfig:l,hideSelectAll:u})=>T`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${h(!u,()=>T`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${h(u,()=>T` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`})))()}var ta,na;function ra(){return(ra=e((()=>{D(),ta=o`
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
`,na=({settingsConfig:e})=>{let{columns:t,collapsed:n}=e,r=t.filter(e=>!n.some(t=>t.name===e.name));return T`<div class="skeleton">
		${Array.from({length:5},()=>T`<div>
					<div class="checkbox"></div>
					${r.map(e=>T`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,M(na,{styleSheets:[ta]}))})))()}var ia;function aa(){return(aa=e((()=>{D(),ra(),ut(),N(),g(),ia=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:i,filterIsTooStrict:a,loading:o,displayEmptyGroups:s,compareItemsFn:c,selectedItems:l,setSelectedItems:u,renderItem:d,renderGroup:f,error:p}=t;return T`${h(!o&&!i&&!p,()=>T`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${pt({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${E(`Working set empty`)}</h3>
							<p>${E(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${h(a,()=>T`<div class="tableContent-empty">
					${pt({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
					<div>
						<h3>${E(`Filter too strict`)}</h3>
						<p>${E(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${h(o&&!r.length,()=>T`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${h(o&&r.length,()=>T`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${h(p,()=>T`<div class="tableContent-empty overlay">
					${ft({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${E(`Error loading data`)}</h3>
						<p>${p.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				.selectedItems=${l}
				@selected-items-changed=${he(u)}
				.displayEmptyGroups=${s}
				.compareItemsFn=${c}
				.renderItem=${d}
				.renderGroup=${f}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})))()}var oa,sa;function ca(){return(ca=e((()=>{we(),je(),Vi(),oa=k`
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
`,sa=k`
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
`})))()}var la,ua;function da(){return(da=e((()=>{xe(),D(),la=e=>{let t=parseInt(e??``,10);return isFinite(t)?t:void 0},ua=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,o=De({collapsed:i,settings:n.columns,requestTween:a,setSettings:v(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:v(e=>{let t=e.target instanceof Element?e.target:null;t&&t.closest(`.pull`)&&(o.handle=e.currentTarget instanceof HTMLElement?e.currentTarget:null)},[o]),onDragStart:v(e=>{let t=e.target instanceof HTMLElement?e.target:null,n=la(t?.dataset.index);if(!t||!o.handle?.contains(t)||n==null)return e.preventDefault();o.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,String(n)),e.dataTransfer.setData(`text/plain`,String(n)),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>{(e.target instanceof HTMLElement?e.target:null)?.classList.remove(`drag`)},{once:!0})},[o]),onDragEnter:v(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:v(e=>{e.preventDefault(),e.currentTarget instanceof HTMLElement&&e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:v(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||t.classList.remove(`dragover`))},[]),onDrop:v(e=>{let t=la(e.dataTransfer?.getData(`omnitable/sort-index`)),n=e.currentTarget instanceof HTMLElement?e.currentTarget:null,r=la(n?.dataset.index),{settings:i,setSettings:a,requestTween:s}=o;n?.classList.remove(`dragover`),e.preventDefault();let c=i.slice();c.splice(r+(t>=r?0:-1),0,c.splice(t,1)[0]),s?.(),a(c)},[o]),onToggle:v(e=>{let{settings:t,setSettings:n,requestTween:r}=o,i=t.map(e=>({...e,disabled:e.disabled||o.collapsed?.some(t=>t.name===e.name)})),a=e.target instanceof HTMLInputElement?e.target:null,s=la((e.target instanceof Element?e.target:null)?.closest(`[data-index]`)?.getAttribute(`data-index`));s!=null&&(i.splice(s,1,{...t[s],disabled:!a?.checked,priority:a?.checked?t.reduce((e,t)=>Math.max(e,t.priority??0),0)+1:t[s]?.priority}),r?.(),n(i))},[o])}}})))()}var fa,pa,ma,ha;function ga(){return(ga=e((()=>{$e(),mt(),Be(),p(),se(),je(),Ne(),D(),N(),mi(),ca(),da(),fa=[dt({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Qe],pa=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:i,onDown:a,onToggle:o,collapsed:s,filters:c})=>(l,u)=>{let d=!!s?.find(e=>e.name===l.name),f=!l.disabled&&!d;return T` <div
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
				aria-label=${E(`Reorder column`)}
				variant="tertiary"
				icon-only
				class="pull"
				>${Fe({width:`16`,height:`16`})}</cosmoz-button
			>
			<label class="title" ?has-filter=${!Pe(c[l.name]?.filter)}
				>${l.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${f}
				@click=${o}
				.indeterminate=${d}
			/>
		</div>`},ma=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:a,canReset:o,opened:s,setOpened:l,...u}=ua(e);return T` <div class="headline">
			<span> ${E(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${E(`Close settings`)}"
				@click=${e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t?.focus(),t?.blur()}}
			>
				${c({width:`16`,height:`16`})}
			</cosmoz-button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${s.columns}
				@click=${()=>l(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${E(`Columns`)} ${C({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${s.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(pa(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.sort}
				@click=${()=>l(e=>({...e,sort:!e.sort}))}
			>
				${E(`Sort on`)} ${C({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.sort}> ${pi()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.group}
				@click=${()=>l(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${E(`Group on`)} ${C({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.group} part="groups groups-heading"
				>${fi()}</cosmoz-collapse
			>
		</div>

		${h(n,()=>T`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${i}
						?disabled=${!o}
					>
						${E(`Reset`)}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${r}
						?disabled=${!a}
					>
						${E(`Save`)}
					</cosmoz-button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,M(ma,{styleSheets:[ue(oa)]})),ha=({config:e,newLayout:t})=>T`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${fa}"
	>
		<div title="${E(`Sort and filter`)}" slot="button">
			${h(t,()=>T`<div class="headerDots">...</div>`,()=>T` ${ee({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${h(e?.badge,()=>T`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,M(ha,{styleSheets:[ue(sa)]}))})))()}var _a,va,ya,ba,xa;function Sa(){return(Sa=e((()=>{Oe(),_a=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],va=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,ya=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(va(t.name))),i=e.filter(e=>e.name!=null&&!t.some(va(e.name))&&!n.some(va(e.name))),a=n.filter(e=>!t.some(va(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},ba=(e,t)=>({...t,..._e(Array.from(_a))(e),columns:e.columns?.map(_e([`name`,`priority`,`width`,`flex`,`disabled`]))??t?.columns}),xa=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(_a.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?_e(Array.from(_a))(n):{},...t,columns:ya(e,t?.columns,n?.columns)})})))()}var Ca;function wa(){return(wa=e((()=>{Ca=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})))()}var Ta,Ea;function Da(){return(Da=e((()=>{D(),wa(),Ta=b(Ca),Ea=()=>{let e=s(Ta);return r(()=>e(),[e])}})))()}function Oa(){return(Oa=e((()=>{Da()})))()}var ka;function Aa(){return(Aa=e((()=>{D(),Oa(),Sa(),ka=(e,t,n,r)=>{let[i,a]=m(e?void 0:null),{read:o,write:s}=Ea();return S(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:v(async()=>{if(!e)return;let r=ba(t,i);await s(e,r),n(),a(r)},[t,i]),onReset:v(async()=>{n(),e&&i!=null&&(await s(e),a(null)),r?.()},[e,i,s,r]),hasChanges:t!=null,canReset:t!=null||i!=null}}})))()}var ja;function Ma(){return(Ma=e((()=>{D(),J(),Sa(),Aa(),ja=({settingsId:e,host:t})=>{let n=r(()=>Object.fromEntries(_a.map(e=>[e,t[e]])),[]),i=ge(),a=v(()=>{i.current?.(n)},[n]),[o,s]=m(),[c,l]=m({columns:!0,sort:!0}),{savedSettings:u,...d}=ka(e,o,s,a),{enabledColumns:f,disabledFiltering:p}=t,h=gn(t,{enabledColumns:f,disabledFiltering:p}),g=r(()=>xa({columns:h,settings:o,savedSettings:u??void 0,initial:n}),[h,o,u]),_=r(()=>g.columns.map(e=>h.find(t=>t.name===e.name)).filter(e=>e!==void 0),[h,...g.columns.map(e=>e.name)]);return{...d,savedSettings:u,opened:c,setOpened:l,settings:g,columns:_,setSettings:s,resetRef:i}}})))()}function Na(){return(Na=e((()=>{ga(),Ma()})))()}var Pa,Fa;function Ia(){return(Ia=e((()=>{Pa=e=>Number.isFinite(e)?e:0,Fa=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=Pa(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];u>i+(a>=0?o*d:i*a/r)?(s+=i,c+=u,l+=d,n[t]=u):d===0&&(s+=i,c+=i,n[t]=i)}r-=s,a=t-c-r,i-=l,o=Pa(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t],c=a>=0?o*s:i*a/r;n[t]=i+c}return n}})))()}var La,Ra,za;function Ba(){return(Ba=e((()=>{Ia(),Xi(),La=(e,t)=>{let n=Yi(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${t}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`,o=0,s=0;return t.map((t,c)=>{let l=e[c];if(l==null||l===0)return a(t.name);o+=l;let u=Math.round(o),d=u-s;s=u;let f=r(t.name,d);return c===n?`${f}\n${i(t.name)}`:f}).join(`
`)},Ra=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Ra(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Fa(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},za=(e,t)=>e.length===0?`.cell {display: none;}`:La(e,t)})))()}var Va;function Ha(){return(Ha=e((()=>{D(),Va=(e,t)=>S(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-104)});return n.observe(e),()=>n.unobserve(e)},[])})))()}var Ua;function Wa(){return(Wa=e((()=>{D(),Ha(),Ua=e=>{let[t,n]=m(()=>e.getBoundingClientRect().width-104);return Va(e,n),t}})))()}var Ga;function Ka(){return(Ka=e((()=>{D(),Ba(),Ga=({canvasWidth:e,groupOnColumn:t,layoutColumns:n,config:i})=>r(()=>{if(!Array.isArray(i)||e==null||e===0)return[];let r=i.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>n==null?e:{...e,hidden:!n.includes(e.name)}).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Ra(r,e,r.length)},[e,t,i])})))()}var qa;function Ja(){return(Ja=e((()=>{D(),qa=({host:e,canvasWidth:t,columns:n})=>{let i=e.miniBreakpoint??480,a=r(()=>t<=i,[t,i]),o=r(()=>a?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,a]),s=r(()=>o.slice(1),[o]),c=o[0],l=!!c&&e.renderItem==null;return S(()=>{e.toggleAttribute(`mini`,l)},[l]),{isMini:l&&a,hasMiniColumn:l,miniColumn:c,miniColumns:s}}})))()}var Ya;function Xa(){return(Xa=e((()=>{D(),Ya=({host:e,canvasWidth:t,layout:n,setSettings:r,requestTween:i})=>{let a=ge();a.current=e=>{i(),r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},S(()=>{let t=e=>a.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})))()}var Za,Qa,$a;function eo(){return(eo=e((()=>{ke(),xe(),D(),Za=(e,t)=>{let n=r(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);S(()=>{n.start()},t),S(()=>()=>n.stop(),[])},Qa=(e=0,t=0)=>Math.abs(e-t)<.1,$a=(e,t=1.9,n=ve,r)=>{let i=De({target:e,speedFactor:t,onConverge:r}),a=v(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>Qa(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]);Za(a,[e])}})))()}var to,no,ro;function io(){return(io=e((()=>{xe(),D(),Ba(),Wa(),Ka(),Ja(),Xa(),eo(),to=e=>{let t=r(()=>new CSSStyleSheet,[]);return S(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},no=e=>{S(()=>{e.toggleAttribute(`compact`,e.compact===!0)},[e.compact])},ro=({host:e,columns:t,settings:n,setSettings:i,resizeSpeedFactor:a,sortAndGroupOptions:o})=>{let s=Ua(e),{isMini:c,hasMiniColumn:l,miniColumn:u,miniColumns:d}=qa({host:e,canvasWidth:s,columns:t});no(e);let{groupOnColumn:f}=o,p=l?[u.name]:e.headerColumns??null,h=Ga({canvasWidth:s,groupOnColumn:f,layoutColumns:p,config:n.columns}),g=to(e),_=r(()=>n.columns.reduce((e,n,r)=>h[r]!=null||n.name===f?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,h]),[y,b]=m(1),x=v(()=>b(a??1.9),[a]),ee=v(()=>b(1),[]),te=De({columns:n.columns});return $a(h,y,e=>{let t=za(e,te.columns);g.replaceSync(t)},ee),Ya({host:e,canvasWidth:s,layout:h,setSettings:e=>i(e(n)),requestTween:x}),{isMini:c,collapsedColumns:_,miniColumns:d,requestTween:x}}})))()}var ao;function oo(){return(oo=e((()=>{ao=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})))()}var so;function co(){return(co=e((()=>{D(),Xi(),so=({host:e,selectedItems:t,data:n,dataIsValid:i,columns:a,sortAndGroupOptions:o,collapsedColumns:s,settings:c,filterFunctions:l,settingS:u,filters:d,setFilterState:f,hideSelectAll:p,headerColumns:m,requestTween:h,...g})=>{let _=r(()=>m==null?a:a.filter(e=>m.includes(e.name)),[a,m]),v=t===$||!!n&&n.length>0&&Array.isArray(t)&&t.length===n.length,y=t=>{if(!(t.target instanceof HTMLInputElement))return;let n=e.shadowRoot.querySelector(`#groupedList`);t.target.checked?n.selectAll():n.deselectAll()},{groupOnColumn:b}=o,x=r(()=>[b,...s,...c.columns.filter(e=>e.disabled)].some(e=>!!e&&!!e.name&&Object.keys(l).includes(e.name)),[l,c,s]);return{allSelected:v,onAllCheckboxChange:y,data:n,dataIsValid:i,columns:_,settingsConfig:r(()=>({...u,collapsed:s,badge:x,filters:d,requestTween:h}),[u,s,x,d,h]),filters:d,groupOnColumn:b,setFilterState:f,hideSelectAll:p,sortAndGroup:o.sortAndGroup,...g}}})))()}var lo,uo;function fo(){return(fo=e((()=>{$e(),p(),D(),N(),lo=e=>e?`groupRow groupRow-folded`:`groupRow`,uo=(e,t,{selected:n,folded:r,toggleFold:i,onCheckboxChange:a,groupOnColumn:o,dataIsValid:s})=>T` <div
		class="${lo(r)}"
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
			aria-label=${E(`Expand or collapse`)}
			variant="tertiary"
			icon-only
			class="expand"
			?aria-expanded="${r}"
			@click=${i}
		>
			${C({width:`16`,height:`16`})}
		</cosmoz-button>
	</div>`})))()}var po;function mo(){return(mo=e((()=>{g(),po=({item:e,index:t})=>n=>h((n?.length??0)>0,()=>T`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>T`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`)})))()}var ho;function go(){return(go=e((()=>{$e(),p(),Ne(),D(),N(),mo(),ho=(e,t,{selected:n,expanded:r,toggleCollapse:i,columns:o,collapsedColumns:s,miniColumns:c,onItemClick:l,onCheckboxChange:u,onItemChange:d,rowPartFn:f,groupOnColumn:p,dataIsValid:m,onRowMenu:g,onRowContextMenu:_})=>T`
		<div
			?selected=${n}
			part="${[`itemRow`,`itemRow-${t}`,f?.(e,t)].filter(Boolean).join(` `)}"
			.dataIndex=${t}
			.dataItem=${e}
			class="itemRow"
			@click=${l}
			@contextmenu=${_}
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
				${h(g,()=>T`<cosmoz-button
							aria-label=${E(`Actions`)}
							aria-haspopup="menu"
							variant="tertiary"
							icon-only
							class="row-menu-trigger"
							part="row-menu-trigger"
							@click=${g}
						>
							${a({width:`16`,height:`16`})}
						</cosmoz-button>`)}
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${o}
					.index=${t}
					.selected=${n}
					.expanded=${r}
					.item=${e}
					.groupOnColumn=${p}
					.onItemChange=${d}
				>
				</cosmoz-omnitable-item-row>
				<cosmoz-button
					aria-label=${E(`Expand or collapse`)}
					variant="tertiary"
					icon-only
					class="expand"
					?hidden="${Pe(s.length)}"
					?aria-expanded="${r}"
					@click="${i}"
				>
					${C({width:`16`,height:`16`})}
				</cosmoz-button>
			</div>
			${po({item:e,index:t})(c)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${s}
			.item=${e}
			?selected=${n}
			?expanded=${r}
			.groupOnColumn=${p}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`})))()}var _o,vo,yo,bo;function xo(){return(xo=e((()=>{D(),g(),me(),Ue(),_o=4,vo=(e=document)=>{let t=e.activeElement;return t?.shadowRoot?.activeElement?vo(t.shadowRoot):t},yo=e=>[e,...e.querySelectorAll(`*`)].flatMap(e=>[...e.getAttribute(`role`)===`menuitem`?[e]:[],...e.shadowRoot?[...e.shadowRoot.children].flatMap(yo):[]]),bo=(e,t,n)=>{let[r,i]=m(),a=ge(),o=ge(t),s=ge({at:0}),c=e.rowMenu;o.current=t;let l=v((e,t)=>{let n=e.dataItem,r=o.current,a=Array.isArray(r)&&r.length>1&&r.includes(n);i({...t,items:a?r:[n],opener:vo()??void 0})},[]),d=v(e=>{e.stopPropagation();let t=e.currentTarget,n=t.closest(`.itemRow`),{trigger:r,at:i}=s.current;if(!n||r===t&&performance.now()-i<500)return;let{left:a,bottom:o}=t.getBoundingClientRect();l(n,{x:a,y:o+_o,trigger:t})},[l]),f=v(e=>{e.preventDefault(),l(e.currentTarget,{x:e.clientX,y:e.clientY})},[l]);return S(()=>{e.toggleAttribute(`row-menu`,!!c)},[c]),S(()=>i(void 0),[n]),S(()=>{let t=a.current;if(!r||!t)return;t.showPopover(),t.focus(),r.trigger?.setAttribute(`aria-expanded`,`true`);let{width:n,height:i}=t.getBoundingClientRect(),o=r.y+i>innerHeight?r.y-i-_o:r.y;t.style.left=`${Math.max(_o,Math.min(r.x,innerWidth-n-_o))}px`,t.style.top=`${Math.max(_o,o)}px`;let s=e=>!e.composedPath().includes(t)&&t.hidePopover(),c=e.shadowRoot;return c.addEventListener(`scroll`,s,!0),()=>{c.removeEventListener(`scroll`,s,!0),r.trigger?.removeAttribute(`aria-expanded`)}},[r]),{onRowMenu:c?d:void 0,onRowContextMenu:c?f:void 0,renderRowMenu:()=>r&&c?T`<div
					popover="auto"
					class="row-menu"
					part="row-menu"
					role="menu"
					tabindex="-1"
					style=${et({left:`${r.x}px`,top:`${r.y}px`})}
					${ie(e=>a.current=e)}
					@keydown=${e=>{if(e.target!==a.current)return;let t=yo(a.current),n=[`ArrowDown`,`Home`].includes(e.key),r=[`ArrowUp`,`End`].includes(e.key),i=n?t[0]:r&&t[t.length-1];i&&(e.preventDefault(),i.focus())}}
					@beforetoggle=${e=>{e.newState===`closed`&&(s.current={trigger:r.trigger,at:performance.now()},r.hadFocus=!!a.current?.matches(`:focus-within`))}}
					@toggle=${e=>{if(e.newState!==`closed`)return;let t=vo(),n=!t||t===document.body||!!a.current?.matches(`:focus-within`);r.hadFocus&&n&&(r.trigger??r.opener)?.focus(),i(void 0)}}
					@click=${e=>{e.composedPath().some(e=>e instanceof Element&&e.getAttribute(`role`)===`menuitem`)&&a.current?.hidePopover()}}
			  >
					${c(r.items)}
			  </div>`:u}}})))()}var So,Co,wo;function To(){return(To=e((()=>{D(),fo(),go(),xo(),Xi(),Y(),So=e=>e instanceof HTMLInputElement,Co=e=>e instanceof HTMLElement,wo=({host:e,error:t,dataIsValid:n,processedItems:i,columns:a,collapsedColumns:o,miniColumns:s,sortAndGroupOptions:c,rowPartFn:l,selectedItems:u,...d})=>{let{loading:f=!1,displayEmptyGroups:p=!1,compareItemsFn:m}=e,h=e.renderItem??ho,g=e.renderGroup??uo,_=ge({shiftKey:!1,ctrlKey:!1}),y=v(t=>{if(!So(t.target))return;let n=t.target,r=n.dataItem,i=n.checked,a=e.shadowRoot.querySelector(`#groupedList`);_.current.shiftKey?a.toggleSelectTo(r,i):_.current.ctrlKey?(n.checked=!0,a.selectOnly(r)):a.toggleSelect(r,i),t.preventDefault(),t.stopPropagation()},[]);S(()=>{let e=({shiftKey:e,ctrlKey:t})=>{_.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let b=v(t=>{if(!Co(t.currentTarget))return;let n=t.currentTarget,r=t.composedPath();r.slice(0,r.indexOf(n)).some(e=>e instanceof Element&&e.matches(`a, .checkbox, .expand, .row-menu-trigger`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:n.dataItem,index:n.dataIndex}}))},[]),{onRowMenu:x,onRowContextMenu:ee,renderRowMenu:te}=bo(e,u,i),{groupOnColumn:C}=c,w=v((t,n)=>r=>yn(e,t,n,r),[]);return{...d,selectedItems:u,renderRowMenu:te,processedItems:i,dataIsValid:n,filterIsTooStrict:n&&i.length<1,loading:f,compareItemsFn:m,displayEmptyGroups:p,error:t,renderItem:r(()=>(e,t,r)=>h(e,e[Ji],{...r,columns:a,collapsedColumns:o,miniColumns:s,onItemClick:b,onCheckboxChange:y,onItemChange:w,rowPartFn:l,groupOnColumn:C,dataIsValid:n,onRowMenu:x,onRowContextMenu:ee}),[h,x,ee,a,o,s,b,y,w,l,C,n]),renderGroup:r(()=>(e,t,r)=>g(e,e[Ji],{...r,columns:a,onCheckboxChange:y,groupOnColumn:C,dataIsValid:n}),[g,a,y,C,n])}}})))()}var Eo;function Do(){return(Do=e((()=>{Eo=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})))()}var Oo,ko,Ao,jo,Mo,No;function Po(){return(Po=e((()=>{ke(),D(),Do(),J(),xi(),Xi(),Oo=(e,t)=>(n,r)=>Eo(e(n),e(r))*(t?-1:1),ko=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),Ao=(e,t)=>{e&&t&&Object.entries(t).forEach(([t,n])=>{let r=e[q];r.__ownChange=!0,Object.assign(r,{[t]:n}),r.__ownChange=!1,r.dispatchEvent(new CustomEvent(`${ko(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},jo=(e,t)=>Object.assign(e,{[Ji]:t}),Mo=Symbol(`unparsed`),No=({data:e,columns:t,hashParam:n,sortAndGroupOptions:i,noLocalSort:a,noLocalFilter:o})=>{let{groupOnColumn:s,groupOnDescending:c,sortOnColumn:l,descending:u}=i,d=v(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),f=v(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[Mo]:n}];let i={filter:r.deserializeFilter(r,n)};return Ao(r,i),[e,i]},[t]),[p,m]=hi({},n,{multi:!0,suffix:`-filter--`,write:d,read:f}),h=v((e,n)=>m(r=>{let i=ae(n,r[e]);return Ao(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,m]),g=r(()=>Object.values(p).map(e=>e.filter),[p]),_=r(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,p[e.name]?.filter)]).filter(e=>!!e[1])),[t,...g]),y=r(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(_).length===0||o?e.slice():e.filter(e=>Object.values(_).every(t=>t(e))),[e,_,o]),b=r(()=>{if(!a&&!s&&l!=null&&l.sortOn!=null)return y.slice().sort(Oo(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),u));if(s!=null&&s.groupOn!=null){let e=y.reduce((e,t)=>{let n=s.getComparableValue({...s,valuePath:s.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(Oo(e=>s.getComparableValue({...s,valuePath:s.groupOn},e.items[0]),c)),!l||a?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(Oo(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),u)),e))}return y},[y,s,c,l,u,a]),x=r(()=>{let e=0,t=0,n=[];return b.forEach(r=>{if(`items`in r&&Array.isArray(r.items))jo(r,t++),r.items.forEach(t=>{jo(t,e++),n.push(t)});else return jo(r,e++),n.push(r)},[]),n},[b]);return S(()=>{m(e=>Object.values(e).some(e=>e[Mo]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>{let n=t[Mo];return n==null?[e,t]:f([e,n])})):e)},[f]),{processedItems:b,visibleData:x,filters:p,filterFunctions:_,setFilterState:h}}})))()}var Fo,Io,Lo;function Ro(){return(Ro=e((()=>{x(),y(),D(),Fo=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(e){let n=[];for(let r=e.length-1;r>=0;--r){let i=t(e[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);i>-1&&n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},Io=e=>{let[t,n]=m(!1);return S(()=>{e&&n(!0)},[e]),t},Lo=({host:e,visibleData:t,filters:n,ready:a=!0,...o})=>{let{setFilterState:s}=o,c=r(()=>Fo(e),[]),[l,u]=d(`selectedItems`,[]);i(o,Object.values(o)),i(c,Object.values(c)),S(()=>{let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;s(t.name,e=>({...typeof e==`object`&&e?e:{},...t.state}))};return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),A(`visibleData`,t),A(`sortedFilteredGroupedItems`,o.sortedFilteredGroupedItems),A(`sortOn`,o.sortOn),A(`descending`,o.descending),A(`isMini`,o.isMini),A(`settingsReady`,Io(a));let f=r(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return A(`filters`,f,Object.values(f)),{selectedItems:l,setSelectedItems:u}}})))()}var zo;function Bo(){return(Bo=e((()=>{Na(),io(),oo(),co(),To(),Po(),Ro(),Di(),zo=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=ja({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=h!==void 0,_=Ti(p,t,{settings:d,setSettings:f,resetRef:m,ready:g}),{processedItems:v,visibleData:y,filters:b,setFilterState:x,filterFunctions:ee}=No({data:r,columns:p,hashParam:t,sortAndGroupOptions:_,noLocalSort:o,noLocalFilter:s}),{isMini:te,collapsedColumns:S,miniColumns:C,requestTween:w}=ro({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:_}),T=r&&Array.isArray(r)&&r.length>0,{selectedItems:ne,setSelectedItems:re}=Lo({host:e,visibleData:y,sortedFilteredGroupedItems:v,columns:p,filters:b,setFilterState:x,isMini:te,ready:g,..._}),ie=so({host:e,selectedItems:ne,sortAndGroupOptions:_,dataIsValid:T,data:r,columns:p,filters:b,collapsedColumns:S,settings:d,filterFunctions:ee,settingS:u,setFilterState:x,hideSelectAll:e.hideSelectAll===!0,headerColumns:e.headerColumns??null,requestTween:w});return{header:ie,list:wo({host:e,error:c,dataIsValid:T,processedItems:v,selectedItems:ne,setSelectedItems:re,columns:p,collapsedColumns:S,miniColumns:C,sortAndGroupOptions:_,rowPartFn:l}),footer:ao({host:e,selectedItems:ne,allSelected:ie.allSelected,setSelectedItems:re,columns:p,enableSelectAll:e.enableSelectAll,allItemsCount:e.allItemsCount})}}})))()}function Vo(){return(Vo=e((()=>{g(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item!=null&&this._index!=null&&this._renderFn!=null&&w(this._renderFn(this._item,this._index),this)}})})))()}var Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo;function Zo(){return(Zo=e((()=>{Ho={group:Symbol(`group`)},Uo=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),Wo=(e,t)=>!!Uo(e,t).expanded,Go=(e,t)=>!!Uo(e,t).folded,Ko=e=>e?e.items instanceof Array:!1,qo=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},Jo=(e,t,n)=>{if(Array.isArray(e))return qo(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?Uo(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[Ho.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},Yo=(e,...t)=>typeof e==`function`?e(...t):e,Xo=(e,t)=>e===t})))()}var Qo;function $o(){return($o=e((()=>{D(),Zo(),Qo=()=>{let[e,t]=m(()=>[new WeakMap]);return{setItemState:v((e,n)=>t(([t])=>{let r=Uo(e,t);return Object.assign(r,Yo(n,r)),[t]}),[]),state:e[0],signal:e}}})))()}var es;function ts(){return(ts=e((()=>{D(),$o(),Zo(),es=()=>{let{setItemState:e,state:t,signal:n}=Qo();return{state:t,signal:n,toggleFold:v((t,n)=>{Ko(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:v((t,n)=>{Ko(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})))()}var ns;function rs(){return(rs=e((()=>{D(),Xi(),Zo(),ns=({compareItemsFn:e,data:t,flatData:n})=>{let[r,i]=d(`selectedItems`,()=>[]),[a,o]=m(),s=v(e=>r===$||r.includes(e),[r]),c=v(e=>r===$||(e?.items?.every(s)??!1),[r,s]),l=v(e=>s(e)||c(e),[s,c]),u=v(e=>{let t=e.items??[e];i(e=>e===$?e:[...e,...t.filter(t=>!e.includes(t))]),o(e)},[]),f=v(e=>{let t=e.items??[e];i(e=>e===$?(n??[]).filter(e=>!Ko(e)).filter(e=>!t.includes(e)):e.filter(e=>!t.includes(e))),o(e)},[n]),p=v(e=>{i(e.items?.slice()||[e]),o(e)},[]),h=v(()=>{i(t.flatMap(e=>e.items||e)),o(void 0)},[t]),g=v(()=>{i([]),o(void 0)},[]),_=v((e,t=!l(e))=>t?u(e):f(e),[l]),y=v((t,r)=>{if(!n)return;let i=a?n.findIndex(t=>e(t,a)):-1;if(i<0)return _(t,r);let[s,c]=[i,n.indexOf(t)].sort((e,t)=>e-t);n.slice(s,c+1).forEach((e,t,n)=>{t>0&&t<n.length-1&&Ko(e)||_(e,r)}),o(t)},[n,e,_]);return S(()=>i(t=>t!==$&&t.length>0&&n?n.filter(n=>t.find(t=>e(n,t))):t),[n]),{selectedItems:r,isItemSelected:s,isGroupSelected:c,isSelected:l,select:u,deselect:f,selectOnly:p,selectAll:h,deselectAll:g,toggleSelect:_,toggleSelectTo:y}}})))()}var is,as,os;function ss(){return(ss=e((()=>{oe(),x(),D(),g(),Vo(),ts(),rs(),Zo(),is={host:{position:`relative`,display:`flex`,flexDirection:`column`}},as=e=>{let{data:t,renderItem:n,renderGroup:a,displayEmptyGroups:o,compareItemsFn:s=Xo}=e,{toggleFold:c,toggleCollapse:u,state:d,signal:f}=es(),p=r(()=>Jo(t,o,d),[t,o,f]),{selectedItems:m,isItemSelected:h,isGroupSelected:g,isSelected:_,select:y,deselect:b,selectOnly:x,selectAll:ee,deselectAll:te,toggleSelect:S,toggleSelectTo:C}=ns({compareItemsFn:s,data:t,flatData:p}),w=v((e,t)=>Array.isArray(e.items)?a(e,t,{selected:g(e),folded:Go(e,d),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleFold:()=>c(e)}):n(e,t,{selected:h(e),expanded:Wo(e,d),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>u(e)}),[n,a,m,S,f]);l(()=>{Object.assign(e.style,is.host)},[]);let T={toggleFold:c,toggleCollapse:u,isItemSelected:h,isGroupSelected:g,isSelected:_,select:y,deselect:b,selectOnly:x,selectAll:ee,deselectAll:te,toggleSelect:S,toggleSelectTo:C};return i(T,Object.values(T)),{renderRow:w,flatData:p}},os=({renderRow:e,flatData:t})=>le({items:t,renderItem:(t,n)=>T`<cosmoz-grouped-list-row
				.item=${t}
				.index=${n}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})))()}var cs;function ls(){return(ls=e((()=>{D(),ss(),cs=e=>os(as(e)),customElements.define(`cosmoz-grouped-list`,M(cs,{useShadowDOM:!1}))})))()}function us(){return(us=e((()=>{ls()})))()}var ds,fs,ps;function ms(){return(ms=e((()=>{Ke(),Pt(),ai(),si(),Ai(),Fi(),Ri(),D(),We(),g(),Me(),Vi(),Qi(),ea(),aa(),Bo(),us(),fo(),go(),ds=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,fs=e=>{let{header:t,list:n,footer:r}=zo(e);return T`
		<style>
			${ne([],()=>ds(Bi))}
		</style>

		<div class="mainContainer">
			${$i(t)}
			<div class="tableContent" id="tableContent">
				${ia(t,n)}
			</div>
			${Zi(r)}
		</div>
		${n.renderRowMenu()}

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,M(fs,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`compact`,`inline`,`enable-select-all`]})),ps=`
	<slot name="actions" slot="actions"></slot>
`,T(Object.assign([ps],{raw:[ps]})),He(Object.assign([ps],{raw:[ps]}))})))()}export{ms as t};