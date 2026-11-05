import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{$ as t,A as n,Bt as r,E as i,G as a,Gt as o,Ht as s,I as c,It as l,Jt as u,Mt as d,O as f,P as p,Pt as m,Q as h,Qt as g,R as _,Rt as v,S as y,St as b,T as x,U as S,V as ee,Wt as C,Y as w,Yt as T,Zt as E,_ as te,_t as ne,at as re,b as D,bt as O,c as k,ct as ie,d as ae,dt as oe,et as se,f as ce,ft as le,gt as ue,ht as de,i as fe,it as pe,jt as me,kt as he,l as ge,lt as _e,m as ve,mt as ye,n as be,nt as xe,ot as Se,p as Ce,pt as we,q as Te,r as Ee,rt as De,s as Oe,st as ke,u as Ae,ut as je,v as Me,vt as Ne,w as A,x as j,xt as M,y as N,yt as Pe,z as Fe}from"./iframe-D7Nve816.js";import{A as Ie,B as P,C as Le,D as Re,E as ze,F,G as Be,H as Ve,I as He,J as Ue,L as We,M as Ge,N as Ke,O as qe,P as I,R as Je,S as Ye,T as Xe,U as Ze,V as L,W as Qe,X as $e,Y as et,_ as tt,a as nt,d as rt,f as it,g as at,h as ot,j as st,k as ct,l as lt,m as ut,n as dt,q as ft,r as pt,s as mt,t as ht,u as gt,v as _t,w as vt,x as yt,y as bt,z as xt}from"./dist-DwQErOSk.js";import{n as St,t as Ct}from"./table-demo-helper-Dj0p9yas.js";var wt;function Tt(){return(Tt=e((()=>{O(),wt=()=>E`<style>
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
</style>`,customElements.define(`cz-spinner`,M(wt))})))()}var Et,Dt;function Ot(){return(Ot=e((()=>{p(),we(),je(),O(),Et=ye`
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
`,Dt=()=>E`
	<style>
		${Et}
	</style>
	${_({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,M(Dt))})))()}var R,kt,At,jt,Mt,z;function B(){return(B=e((()=>{L(),R=({valuePath:e},t)=>P(t,e),kt=R,At=R,jt=({valuePath:e},t)=>n=>{let r=P(n,e);return r!=null&&r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},Mt=(e,t)=>t===``||t==null?null:t,z=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:`left`},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return R(e,t)}toXlsxValue(e,t){return kt(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return Mt(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return At(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})))()}var Nt,Pt,Ft,It,Lt,Rt,zt;function Bt(){return(Bt=e((()=>{j(),Ot(),F(),g(),B(),Nt=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),Pt=e=>()=>e(e=>({...e,filter:e.inputValue})),Ft=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},It=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),Lt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Rt=e=>e!=null&&e!==``,zt=class extends z(I){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(t!=null&&t!==``)return jt(e,t)}renderCell(e,{item:t}){return E`<span class="default-column">${R(e,t)}</span>`}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${R(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return E`<cosmoz-input
			variant="inline"
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${n??t}
			@value-changed=${Nt(i)}
			focused=${r}
			@focused-changed=${It(i)}
			@keydown=${Ft(i)}
			@blur=${Pt(i)}
		>
			${h(!e.disabledFiltering,()=>E`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Rt(t)}
						light
						@click=${Lt(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,zt)})))()}var Vt,Ht,Ut;function V(){return(V=e((()=>{j(),O(),g(),Vt=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],Ht=o`
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
`,Ut=e=>{let{label:t,value:r,slot:i}=e;e.toggleAttribute(`has-value`,!!r);let a=E`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${i}
	>
		${r||``}
	</div>`;return n(a,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,M(Ut,{observedAttributes:Vt,styleSheets:[Ht]}))})))()}var Wt;function Gt(){return(Gt=e((()=>{Ze(),g(),Ge(),V(),Wt=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,align:a=`left`,externalValues:o=null})=>{let s={filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0}};return E`
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
			class=${st({...s,dropdown:!0})}
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
	`}})))()}var Kt,qt;function Jt(){return(Jt=e((()=>{ke(),Je(),Ie(),Re(),Kt=e=>e?typeof e.close==`function`?e:Kt(e.parentElement):null,qt=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:`left`},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=qe.debounce(this._limitInputDebouncer,xt.after(600),()=>{this._limitInput(),this._updateFilter()}),ct(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Kt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)&&(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);(this.getComparableValue(n)!==this.getComparableValue(t,`min`)||this.getComparableValue(r)!==this.getComparableValue(t,`max`))&&this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);(this.getComparableValue(r)!==this.getComparableValue(n,`min`)||this.getComparableValue(i)!==this.getComparableValue(n,`max`))&&(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(ie(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})))()}var Yt;function Xt(){return(Xt=e((()=>{F(),g(),Yt=e=>class extends e{static get template(){return He`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;T(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>T(r.render(),r.$.output))}}})))()}var Zt;function Qt(){return(Qt=e((()=>{j(),F(),N(),g(),Gt(),V(),Jt(),Xt(),Zt=class extends qt(Yt(I)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return E`
			${h(this.disabled,()=>E`
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
					${Wt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:E`
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Zt)})))()}var H,$t,en,tn,U,nn,rn,an;function on(){return(on=e((()=>{L(),vt(),H=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=H(t);return i==null?r:n(r,i)},$t=e=>{let t=H(e);return t==null?null:t.toString()},en=({valuePath:e},t)=>{let n=H(e?P(t,e):t);return $t(n)},tn=e=>$t(e)??``,U=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=e?P(n,e):n,i=H(r);if(i!=null)return t===null?i:H(i.toFixed(t))},nn=ze((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),rn=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?P(i,e):i;if(a==null)return``;let o=H(a);if(o!=null)return nn(t,n,r).format(o)},an=(e,t)=>n=>{let r=U(e,n);if(r==null)return!1;let i=U({...e,valuePath:`min`},t),a=U({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var W,G,sn,cn,ln,un,dn,fn,pn,mn,hn;function gn(){return(gn=e((()=>{L(),on(),W=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=H(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=W(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1),c=o.amount*(e[o.currency]||1);return H(s,c,r)===s?a:o},G=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=P(n,e));let i=W(t,r);if(i==null)return;let a=H(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},sn=(e,t)=>n=>{let r=G(e,n);if(r===void 0)return!1;let i=G({...e,valuePath:`min`},t),a=G({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))},cn={},ln=(e,t)=>{let n=e+(t||``)||``;return cn[n]||(cn[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),cn[n]},un=(e,t,n)=>{let r=W(e,t);return r==null?``:ln(r.currency,n).format(r.amount)},dn=({valuePath:e,rates:t,locale:n},r)=>{let i=W(t,e?P(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:un(t,i,n)},fn=e=>e?e.amount+e.currency:``,pn=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},mn=({valuePath:e},t)=>e?P(t,e)?.currency:null,hn=({valuePath:e},t)=>e?P(t,e)?.amount:void 0})))()}var K,_n,vn,yn,bn,xn,Sn;function q(){return(q=e((()=>{vt(),O(),K=Symbol(`column`),_n=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},vn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:Xe(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,align:e.align,headerAlign:e.headerAlign,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[K]:e}},yn=e=>e.isOmnitableColumn&&!e.hidden,bn=e=>{let t=e.filter(yn);return _n(t)?t:[]},xn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>vn(e,n)),Sn=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=m([]);return l(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(xn(bn(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})))()}var Cn,wn,Tn;function J(){return(J=e((()=>{L(),q(),Cn=(e,t)=>Array.isArray(e)?e.map(e=>P(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,wn=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return Cn(r,n)},Tn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:P(n,i);if(r===a)return;i!==void 0&&Ve(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[K]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})))()}var En;function Dn(){return(Dn=e((()=>{j(),Ot(),F(),g(),L(),B(),Qt(),gn(),J(),En=class extends z(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell`},headerCellClass:{type:String,value:`amount-header-cell`},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=G({...e,valuePath:`min`},t),r=G({...e,valuePath:`max`},t);if(n!=null||r!=null)return sn(e,t)}getString(e,t){return dn(e,t)}toXlsxValue(e,t){return dn(e,t)}getComparableValue(e,t){return G(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=W(e,t.min),r=W(e,t.max);if(n!=null||r!=null)return fn(n)+`~`+fn(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:pn(n[1]),max:pn(n[2])}:null}renderCell(e,{item:t}){return E`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="number"
			@change=${r=>n({amount:r.target.value,currency:P(t,e.valuePath)?.currency})}
			.value=${hn(e,t)}
		>
			<div slot="suffix">${mn(e,t)}</div>
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return wn(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,En)})))()}var On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn;function Bn(){return(Bn=e((()=>{fe(),ke(),Oe(),L(),J(),On=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=P(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},kn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=On(e,t);if(!r?.length)return[];let i=n??`label`,a=e=>String(typeof e==`object`&&e?P(e,i??``)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},An=(e,t,n)=>Ee(t&&P(e,t)).map(k(n)),jn=({valuePath:e,textProperty:t},n)=>An(n,e,t).filter(e=>e!=null).join(`, `),Mn=jn,Nn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=k(e),s=Ee(P(a,t));return i.some(t=>s.length===0&&k(r||e)(t)===n||s.some(e=>o(e)===o(t)))},Pn=e=>t=>e(e=>({...e,filter:t})),Fn=e=>t=>e(e=>({...e,headerFocused:t})),In=e=>t=>e(e=>({...e,query:t})),Ln=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=kn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Rn=(e,t)=>Ln(e,Cn(t,e.valuePath)),zn=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return jn(e,t)}toXlsxValue(e,t){return Mn(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=P(n,e);return t==null?r:Ee(r).map(k(t)).sort().join(` `)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Nn(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){let n=e;return console.error(`Failed to deserialize filter value:`,{error:n?.name,message:n?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>Ln(e,await Promise.resolve(ie(e.values,...t))):Rn(e,t)}}})))()}var Vn,Hn,Un;function Wn(){return(Wn=e((()=>{be(),Le(),F(),g(),fe(),Oe(),Bn(),B(),O(),L(),q(),Vn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?Ae(t):k(n),a=Ee(e&&P(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Hn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=k(e),o=k(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=Ee(P(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Un=class extends zn(z(I)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return E`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${R(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return E`<cosmoz-autocomplete-excluding
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
			@opened-changed=${e=>Fn(r)(e.detail.value)}
			@value-changed=${me(Pn(r))}
			@text-changed=${me(In(r))}
			>${h(e.loading,()=>E`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return Vn(e,t)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Hn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Un)})))()}var Gn,Kn;function qn(){return(qn=e((()=>{be(),Le(),F(),g(),fe(),Oe(),Bn(),B(),L(),q(),Gn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?Ae(t):k(n),a=Ee(e&&P(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Kn=class extends zn(z(I)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return E`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${R(e,t)}
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
			.itemRenderer=${e[K]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			.onChange=${Pn(r)}
			@opened-changed=${e=>Fn(r)(e.detail.value)}
			.onText=${In(r)}
			>${h(e.loading,()=>E`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Gn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Kn)})))()}var Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr;function cr(){return(cr=e((()=>{F(),B(),be(),vt(),L(),g(),Jn=(e,t)=>t.find(({value:t})=>e===t),Yn=(e,t,n)=>{let r=Jn(t,n);return r?r.text:e},Xn=(e,t,n,r)=>Yn(e,P(t,n),r),Zn=({valuePath:e},t,n)=>Jn(P(t,e),n),Qn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},$n=e=>t=>{e(e=>({...e,headerFocused:t}))},er=e=>t=>{e(e=>({...e,query:t}))},tr=e=>t=>e(t?.[0]?.value),nr=({valuePath:e,trueLabel:t,falseLabel:n},r)=>P(r,e)?t:n,rr=({valuePath:e},t)=>n=>P(n,e)===t,ir=Xe((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),ar=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?P(r,e)?t:n:``,or=(e,t)=>{try{return JSON.parse(t)}catch{return null}},sr=class extends z(I){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return nr(e,t)}renderCell(e,{item:t}){return nr(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return E`<cosmoz-autocomplete
			compact
			mode="select"
			.title=${Xn(e.title,t,e.valuePath,ir(r,i))}
			.source=${ir(r,i)}
			.textProperty=${`text`}
			.value=${Zn(e,t,ir(r,i))}
			.onChange=${tr(n)}
			.limit=${1}
			>${h(e.loading,()=>E`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return E`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			variant="inline"
			.label=${e.title}
			.title=${Xn(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${`text`}
			.value=${Jn(t,i)}
			.text=${n}
			.onChange=${Qn(r)}
			@opened-changed=${e=>$n(r)(e.detail.value)}
			.onText=${er(r)}
			.limit=${1}
			>${h(e.loading,()=>E`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return ir(e,t)}getFilterFn(e,t){if(t!=null)return rr(e,t)}toXlsxValue(e,t){return ar(e,t)}deserializeFilter(e,t){return or(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,sr)})))()}var lr;function ur(){return(ur=e((()=>{ue(),Jt(),lr=e=>class extends qt(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return ne(e)}}})))()}var dr;function fr(){return(fr=e((()=>{j(),F(),N(),g(),ur(),Gt(),V(),Xt(),dr=class extends lr(Yt(I)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return E`
			${h(this.disabled,()=>E`
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
					${Wt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:E`
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
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;n&&n.match(/^0+/u)?this._limitInputDebouncer.cancel():super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,dr)})))()}var pr,mr,hr,Y,X,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr;function Er(){return(Er=e((()=>{ue(),L(),on(),pr=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},mr=e=>e.length===19?e+pr(e):e,hr=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=mr(t)),t=de(t),!t)||Number.isNaN(t.getTime())?null:t},Y=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=P(t,e));let r=hr(n);if(r!=null)return H(r.getTime())},X=(e,t,n)=>{let r=hr(e);if(r==null)return null;if(n==null||t==null)return r;let i=X(t);if(i==null)return r;let a=Y({},r),o=Y({},i);return a==null||o==null||n(a,o)===a?r:i},gr=(e,t)=>{if(t==null)return;let n=X(e);if(n!=null)return t.format(n)},_r={},vr=e=>{let t=e||``;return _r[t]||(_r[t]=new Intl.DateTimeFormat(e||void 0)),_r[t]},yr=({valuePath:e,locale:t},n)=>{let r=P(n,e||``);return r===void 0?``:(r=X(r),r===null?`Invalid Date`:gr(r,vr(t)))},br=e=>{let t=X(e);if(t==null)return null;let n=ne(t);return n==null?null:n.slice(0,10)},xr=({valuePath:e},t)=>br(P(t,e||``)),Sr=(e,t)=>{let n=X(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},Cr=e=>br(e)??``,wr=({valuePath:e},t)=>{if(!e)return``;let n=X(P(t,e));if(!n)return``;let r=X(ne(n));return r?(r.setHours(0,0,0,0),r):``},Tr=(e,t)=>n=>{let r=Y(e,n);if(r==null)return!1;let i=Y({...e,valuePath:`min`},t),a=Y({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var Dr;function Or(){return(Or=e((()=>{j(),F(),g(),B(),fr(),J(),Er(),Ot(),Dr=class extends z(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return Tr(e,t)}getString(e,t){return yr(e,t)}toXlsxValue(e,t){return wr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return Cr(n)+`~`+Cr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:X(n[1]),max:X(n[2])}:null}renderCell(e,{item:t}){return E`<div class="omnitable-cell-date">
			${yr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="date"
			@change=${e=>n(Sr(e.target.value))}
			.value=${xr(e,t)}
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return wn(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,Dr)})))()}var kr;function Ar(){return(Ar=e((()=>{F(),N(),g(),ur(),Gt(),V(),Xt(),kr=class extends lr(Yt(I)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return E`
			${h(this.disabled,()=>E`
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
					${Wt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:E`
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
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,kr)})))()}var jr,Mr,Nr,Pr,Fr,Ir;function Lr(){return(Lr=e((()=>{L(),Er(),jr={},Mr=e=>{let t=e||``;return jr[t]||(jr[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),jr[t]},Nr=({valuePath:e,locale:t},n)=>{let r=X(P(n,e||``));return r===void 0?``:r===null?`Invalid Date`:gr(r,Mr(t))},Pr=({valuePath:e},t)=>e?P(t,e):``,Fr=e=>{let t=X(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Ir=e=>{if(e!=null&&e!==``&&typeof e==`string`)return X(e.replace(/\./gu,`:`)+`Z`)}})))()}var Rr;function zr(){return(zr=e((()=>{Ye(),Ot(),F(),g(),B(),Ar(),J(),Er(),Lr(),Rr=class extends z(I){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return Tr(e,t)}getString(e,t){return Nr(e,t)}toXlsxValue(e,t){return Pr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return Fr(n)+`~`+Fr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Ir(n[1]),max:Ir(n[2])}:null}renderCell(e,{item:t}){return Nr(e,t)}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(Sr(e.target.value))}
			.value=${Nr(e,t)}
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return wn(e,t)}},customElements.define(Rr.is,Rr)})))()}var Br;function Vr(){return(Vr=e((()=>{be(),Le(),F(),g(),Bn(),B(),Br=class extends zn(z(I)){renderCell({valuePath:e,textProperty:t},{item:n}){let r=An(n,e,t).map(e=>E`<li>${e}</li>`);return E`
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
			.onChange=${Pn(r)}
			@opened-changed=${e=>Fn(r)(e.detail.value)}
			.onText=${In(r)}
			>${h(e.loading,()=>E`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Br)})))()}var Hr,Ur;function Wr(){return(Wr=e((()=>{we(),oe(),je(),O(),N(),Hr=ye`
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
`,Ur=({items:e})=>{let[t,n]=m(!1),i=Array.isArray(e)?e:[],a=r(()=>Math.max(0,i.length-1),[i]);if(i.length===0)return null;let o=i.length>2,s=i[0],c=o&&!t?[]:i.slice(1),l=e=>{e.stopPropagation(),e.preventDefault(),n(e=>!e)};return E`
		<ul>
			<li>
				<span>${s}</span>
			</li>
			<li class="see-more" ?hidden=${!o||t}>
				<a href="#" @click=${l}
					>${D(`and {0} more`,{0:a})}</a
				>
			</li>
			${c.map(e=>E`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!o||!t}>
				<a href="#" @click=${l}>${D(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,M(Ur,{styleSheets:[le(Hr)]}))})))()}var Gr;function Kr(){return(Kr=e((()=>{Wr(),F(),g(),be(),Bn(),B(),q(),Gr=class extends zn(z(I)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return E`<cosmoz-omnitable-column-list-data
			.items=${An(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="text"
			.value=${jn(e,t)}
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
			.itemRenderer=${e[K]?.itemRenderer}
			.value=${t}
			.text=${n}
			.onChange=${Pn(r)}
			@opened-changed=${e=>Fn(r)(e.detail.value)}
			.onText=${In(r)}
			>${h(e.loading,()=>E`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Gr)})))()}var qr;function Jr(){return(Jr=e((()=>{j(),F(),N(),g(),Gt(),V(),Jt(),Xt(),qr=class extends qt(Yt(I)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return E`
			${h(this.disabled,()=>E`
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
					${Wt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:E`
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
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,qr)})))()}var Yr;function Xr(){return(Xr=e((()=>{j(),Ot(),F(),g(),B(),L(),Jr(),J(),on(),Yr=class extends z(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=U({...e,valuePath:`min`},t),r=U({...e,valuePath:`max`},t);if(n!=null||r!=null)return an(e,t)}getString(e,t){return rn(e,t)}toXlsxValue({valuePath:e},t){return P(t,e)}getComparableValue(e,t){return U(e,t)}serializeFilter(e,t){if(t==null)return;let n=H(t.min),r=H(t.max);if(n!=null||r!=null)return tn(n)+`~`+tn(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:H(n[1]),max:H(n[2])}:null}renderCell(e,{item:t}){return E`<div class="omnitable-cell-number">
			${rn(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${en(e,t)}
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return wn(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Yr)})))()}var Zr;function Qr(){return(Qr=e((()=>{j(),F(),N(),g(),ur(),Gt(),V(),Xt(),Zr=class extends lr(Yt(I)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return E`
			${h(this.disabled,()=>E`
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
					${Wt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:E`
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
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Zr)})))()}var Z,$r,ei,ti,ni,ri,Q,ii,ai,oi;function si(){return(si=e((()=>{ue(),L(),Er(),on(),Z=(e,t,n)=>{let r=typeof e==`string`&&e.length>3&&e.length<=9?mr(`1970-01-01T`+e):e;return X(r,t,n)},$r={},ei=e=>{let t=e||``;return $r[t]||($r[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),$r[t]},ti=({valuePath:e,locale:t},n)=>{let r=Z(P(n,e||``));return r===void 0?``:r===null?`Invalid Date`:gr(r,ei(t))},ni=(e,t)=>e.valuePath?ti(e,t):``,ri=e=>{let t=Z(e);if(t==null)return null;let n=ne(t);return n&&n.slice(11,19)},Q=({valuePath:e},t)=>{if(t==null)return;let n=ri(e==null?t:P(t,e));if(n==null)return;let r=Z(mr(`1970-01-01T`+n));return r==null?r:H(r.getTime())},ii=(e,t)=>n=>{let r=Q(e,n);if(r==null)return!1;let i=Q({...e,valuePath:`min`},t),a=Q({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},ai=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},oi=e=>{if(e!=null&&e!==``)return Z(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})))()}var ci;function li(){return(li=e((()=>{j(),Ot(),F(),g(),B(),Qr(),J(),si(),ci=class extends z(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=Q({...e,valuePath:`min`},t),r=Q({...e,valuePath:`max`},t);if(n!=null||r!=null)return ii(e,t)}getString(e,t){return ti(e,t)}toXlsxValue(e,t){return ni(e,t)}getComparableValue(e,t){return Q(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return ai(n)+`~`+ai(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:oi(n[1]),max:oi(n[2])}:null}renderCell(e,{item:t}){return ti(e,t)}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${ti(e,t)}
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return wn(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,ci)})))()}function ui(){return(ui=e((()=>{Dn(),Wn(),qn(),cr(),Or(),zr(),Vr(),Kr(),Xr(),li()})))()}var di;function fi(){return(fi=e((()=>{O(),g(),di=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return u;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):u},customElements.define(`cosmoz-omnitable-group-row`,M(di,{useShadowDOM:!1}))})))()}var pi;function mi(){return(mi=e((()=>{O(),g(),pi=e=>{let{column:t}=e;return C(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),u},customElements.define(`cosmoz-omnitable-resize-nub`,M(pi))})))()}var hi,gi,_i,vi;function yi(){return(yi=e((()=>{$e(),O(),t(),p(),hi=({column:e,on:t,descending:n,setOn:r,setDescending:i})=>{let{name:a,title:o}=e??{};return E`<cosmoz-button
		variant="tertiary"
		class="sg"
		title=${se(o)}
		data-on=${se(a===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(a),i(!1)),t===`asc`?i(!0):t===`desc`&&(r(),i(!1))}}
	>
		<span>${o}</span> ${a===t?w({width:`12`,height:`12`}):Te({width:`12`,height:`12`})}
	</cosmoz-button>`},gi=({columns:e,...t})=>e?.map(e=>hi({column:e,...t})),_i=()=>E`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>gi({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,vi=()=>E`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>gi({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})))()}function bi(e,t,{suffix:n=``,read:i,write:a,ready:o=!0,multi:s}={}){let c=De({param:t,suffix:n,link:s?Ti:wi,write:a??Se}),l=r(()=>{if(t==null)return!1;if(s){let e=tt(t+n);return Object.keys(e).length>0}return _t(t+n)!==void 0},[]),[u,d]=m(()=>{if(t==null)return e;if(s){let r=tt(t+n,i);return Object.keys(r).length>0?r:e}return _t(t+n,i)??e}),f=v(e=>d(t=>{let n=xi(e)?e(t):e;return c.param!=null&&yt(c.link(c.param+c.suffix,n,c.write),null,{notify:!1}),n}),[]);return C(()=>{c.param!=null&&o&&!l&&e!=null&&f(e)},[o]),[u,f]}var xi,Si,Ci,wi,Ti;function Ei(){return(Ei=e((()=>{bt(),ke(),xe(),at(),O(),xi=e=>typeof e==`function`,Si=e=>(t,n,r=Se)=>{let i=ot(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},Ci=e=>e==null||e===``,wi=Si((e,t,n,r)=>Ci(n(t))?r.delete(e):r.set(e,n(t))),Ti=Si((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>Ci(n)?r.delete(e+t):r.set(e+t,n))})})))()}var Di,Oi,ki,Ai,ji;function Mi(){return(Mi=e((()=>{O(),Ei(),Di=e=>[!0,`true`,1,`yes`,`on`].includes(e),Oi=e=>e===``||(e==null?void 0:Di(e)),ki=(e,t,n)=>v(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),Ai=(e,t,{settings:n,setSettings:i,resetRef:a,ready:o=!0})=>{let[s,c]=bi(n.sortOn,t,{suffix:`-sortOn`,ready:o}),[l,u]=bi(Oi(n.descending),t,{suffix:`-descending`,read:Oi,ready:o}),[d,f]=bi(n.groupOn,t,{suffix:`-groupOn`,ready:o}),[p,m]=bi(Oi(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:Oi,ready:o}),h=r(()=>e.find(e=>e.name===s),[e,s]),g=r(()=>e.find(e=>e.name===d),[e,d]),_={groupOn:d,setGroupOn:ki(f,`groupOn`,i),groupOnDescending:p,setGroupOnDescending:ki(m,`groupOnDescending`,i),sortOn:s,setSortOn:ki(c,`sortOn`,i),descending:l,setDescending:ki(u,`descending`,i),columns:e},y=r(()=>_,Object.values(_)),b=v(e=>{c(typeof e.sortOn==`string`?e.sortOn:void 0),f(typeof e.groupOn==`string`?e.groupOn:void 0),u(typeof e.descending==`boolean`?e.descending:void 0),m(typeof e.groupOnDescending==`boolean`?e.groupOnDescending:void 0)},[]);return C(()=>void(a.current=b),[]),{...y,sortAndGroup:y,groupOnColumn:g,sortOnColumn:h}},ji=b(void 0),customElements.define(`sort-and-group-provider`,ji.Provider),customElements.define(`sort-and-group-consumer`,M(({render:e})=>e(s(ji)),{useShadowDOM:!1}))})))()}var Ni,Pi;function Fi(){return(Fi=e((()=>{O(),ve(),mi(),yi(),Mi(),Ni=({data:e,columns:t,groupOnColumn:n,filters:r,setFilterState:i,sortAndGroup:{sortOn:a,setSortOn:o,descending:s,setDescending:c}={}})=>Ce(t,e=>e.name,t=>[E`<div
				class="cell ${t.headerCellClass} header-cell"
				align="${t.headerAlign??t.align??`left`}"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,r[t.name]??{},e=>i(t.name,e),t.source(t,e))}
				${h(!t.noSort,()=>hi({on:a,setOn:o,descending:s,setDescending:c,column:t}))}
			</div>`,E`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Pi=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let i=s(ji);return E`
		${h(e,e=>Ni({columns:e,sortAndGroup:i,...r}))}
		${h(!n,()=>E` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,M(Pi,{useShadowDOM:!1}))})))()}var Ii,Li;function Ri(){return(Ri=e((()=>{we(),oe(),je(),O(),Ii=ye`
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
`,Li=({column:e})=>E`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,M(Li,{styleSheets:[le(Ii)]}))})))()}var zi;function Bi(){return(Bi=e((()=>{O(),g(),Ri(),zi=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>ut(e,e=>E`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,M(zi,{useShadowDOM:!1}))})))()}var Vi,Hi;function Ui(){return(Ui=e((()=>{O(),ve(),Vi=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Hi=({columns:e,groupOnColumn:t,item:n,index:r,selected:i,expanded:a,onItemChange:o})=>Ce(e,e=>e.name,e=>E`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				align="${e.align??`left`}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${Vi(e,{item:n,index:r,selected:i,expanded:a},o)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,M(Hi,{useShadowDOM:!1}))})))()}var Wi,Gi;function Ki(){return(Ki=e((()=>{we(),je(),Wi=ye`
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
`,Gi=ye`
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

	${Wi}

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
`})))()}var qi,Ji;function Yi(){return(Yi=e((()=>{rt(),qi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Ji=(e,t,n)=>{let r=e.map(e=>qi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:qi(String(n))}).join(`;`)+`
`);i.unshift(r),it(new File(i,n,{type:`text/csv;charset=utf-8`}))}})))()}var Xi,Zi;function Qi(){return(Qi=e((()=>{gt(),rt(),Xi=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Zi=(e,t,n,r)=>{let i=Xi(e,t),a=new lt(n).addSheetFromData(i,r).generate();it(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})))()}var $i,$,ea;function ta(){return(ta=e((()=>{$i=Symbol(`index`),$=Symbol(`All`),ea=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})))()}var na;function ra(){return(ra=e((()=>{Ze(),p(),N(),g(),Yi(),Qi(),ta(),na=({columns:e,selectedItems:t,setSelectedItems:n,csvFilename:r,xlsxFilename:i,xlsxSheetname:a,topPlacement:o,enableSelectAll:s,allSelected:c,allItemsCount:l})=>{let u=t===$,d=u||t.length>0,f=t!==$&&s&&c,p=t=>E`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${o}
		>
			${ee({slot:`button`})}
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Ji(e,t,r)}
			>
				${D(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Zi(e,t,i,a)}
			>
				${D(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,m=h(u,()=>l===void 0?D(`All items selected`):D(`All {count} items selected`,{count:l}),()=>D(`{count} selected item`,{count:t===$?0:t.length}));return E`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${d}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${m}
			${h(f,()=>E`&nbsp;<span
							part="select-all-items"
							class="selectAllItems"
							role="button"
							tabindex="0"
							style="cursor: pointer; color: var(--cz-color-text-brand);"
							@click=${()=>n($)}
						>
							${D(`Select all items`)}
						</span>`)}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${h(t!==$,()=>p(t))}
	</cosmoz-bottom-bar>`}})))()}var ia;function aa(){return(aa=e((()=>{g(),ia=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:s,setFilterState:c,settingsConfig:l,hideSelectAll:u})=>E`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${h(!u,()=>E`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${h(u,()=>E` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`})))()}var oa,sa;function ca(){return(ca=e((()=>{O(),oa=o`
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
`,sa=({settingsConfig:e})=>{let{columns:t,collapsed:n}=e,r=t.filter(e=>!n.some(t=>t.name===e.name));return E`<div class="skeleton">
		${Array.from({length:5},()=>E`<div>
					<div class="checkbox"></div>
					${r.map(e=>E`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,M(sa,{styleSheets:[oa]}))})))()}var la;function ua(){return(ua=e((()=>{O(),ca(),dt(),N(),g(),la=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:i,filterIsTooStrict:a,loading:o,displayEmptyGroups:s,compareItemsFn:c,selectedItems:l,setSelectedItems:u,renderItem:d,renderGroup:f,error:p}=t;return E`${h(!o&&!i&&!p,()=>E`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${mt({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${D(`Working set empty`)}</h3>
							<p>${D(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${h(a,()=>E`<div class="tableContent-empty">
					${mt({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
					<div>
						<h3>${D(`Filter too strict`)}</h3>
						<p>${D(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${h(o&&!r.length,()=>E`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${h(o&&r.length,()=>E`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${h(p,()=>E`<div class="tableContent-empty overlay">
					${pt({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
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
				@selected-items-changed=${me(u)}
				.displayEmptyGroups=${s}
				.compareItemsFn=${c}
				.renderItem=${d}
				.renderGroup=${f}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})))()}var da,fa;function pa(){return(pa=e((()=>{we(),je(),Ki(),da=ye`
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
	${Wi}
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
`,fa=ye`
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
`})))()}var ma,ha;function ga(){return(ga=e((()=>{xe(),O(),ma=e=>{let t=parseInt(e??``,10);return isFinite(t)?t:void 0},ha=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,o=De({collapsed:i,settings:n.columns,requestTween:a,setSettings:v(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:v(e=>{let t=e.target instanceof Element?e.target:null;t&&t.closest(`.pull`)&&(o.handle=e.currentTarget instanceof HTMLElement?e.currentTarget:null)},[o]),onDragStart:v(e=>{let t=e.target instanceof HTMLElement?e.target:null,n=ma(t?.dataset.index);if(!t||!o.handle?.contains(t)||n==null)return e.preventDefault();o.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,String(n)),e.dataTransfer.setData(`text/plain`,String(n)),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>{(e.target instanceof HTMLElement?e.target:null)?.classList.remove(`drag`)},{once:!0})},[o]),onDragEnter:v(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:v(e=>{e.preventDefault(),e.currentTarget instanceof HTMLElement&&e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:v(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||t.classList.remove(`dragover`))},[]),onDrop:v(e=>{let t=ma(e.dataTransfer?.getData(`omnitable/sort-index`)),n=e.currentTarget instanceof HTMLElement?e.currentTarget:null,r=ma(n?.dataset.index),{settings:i,setSettings:a,requestTween:s}=o;n?.classList.remove(`dragover`),e.preventDefault();let c=i.slice();c.splice(r+(t>=r?0:-1),0,c.splice(t,1)[0]),s?.(),a(c)},[o]),onToggle:v(e=>{let{settings:t,setSettings:n,requestTween:r}=o,i=t.map(e=>({...e,disabled:e.disabled||o.collapsed?.some(t=>t.name===e.name)})),a=e.target instanceof HTMLInputElement?e.target:null,s=ma((e.target instanceof Element?e.target:null)?.closest(`[data-index]`)?.getAttribute(`data-index`));s!=null&&(i.splice(s,1,{...t[s],disabled:!a?.checked,priority:a?.checked?t.reduce((e,t)=>Math.max(e,t.priority??0),0)+1:t[s]?.priority}),r?.(),n(i))},[o])}}})))()}var _a,va,ya,ba;function xa(){return(xa=e((()=>{$e(),ht(),Be(),p(),oe(),je(),Ne(),O(),N(),yi(),pa(),ga(),_a=[ft({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Qe],va=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:i,onDown:a,onToggle:o,collapsed:s,filters:c})=>(l,u)=>{let d=!!s?.find(e=>e.name===l.name),f=!l.disabled&&!d;return E` <div
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
				aria-label=${D(`Reorder column`)}
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
		</div>`},ya=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:a,canReset:o,opened:s,setOpened:l,...u}=ha(e);return E` <div class="headline">
			<span> ${D(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${D(`Close settings`)}"
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
				${D(`Columns`)} ${w({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${s.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(va(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.sort}
				@click=${()=>l(e=>({...e,sort:!e.sort}))}
			>
				${D(`Sort on`)} ${w({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.sort}> ${vi()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.group}
				@click=${()=>l(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${D(`Group on`)} ${w({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.group} part="groups groups-heading"
				>${_i()}</cosmoz-collapse
			>
		</div>

		${h(n,()=>E`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${i}
						?disabled=${!o}
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
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,M(ya,{styleSheets:[le(da)]})),ba=({config:e,newLayout:t})=>E`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${_a}"
	>
		<div title="${D(`Sort and filter`)}" slot="button">
			${h(t,()=>E`<div class="headerDots">...</div>`,()=>E` ${S({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${h(e?.badge,()=>E`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,M(ba,{styleSheets:[le(fa)]}))})))()}var Sa,Ca,wa,Ta,Ea;function Da(){return(Da=e((()=>{Oe(),Sa=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],Ca=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,wa=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(Ca(t.name))),i=e.filter(e=>e.name!=null&&!t.some(Ca(e.name))&&!n.some(Ca(e.name))),a=n.filter(e=>!t.some(Ca(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},Ta=(e,t)=>({...t,...ge(Array.from(Sa))(e),columns:e.columns?.map(ge([`name`,`priority`,`width`,`flex`,`disabled`]))??t?.columns}),Ea=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(Sa.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?ge(Array.from(Sa))(n):{},...t,columns:wa(e,t?.columns,n?.columns)})})))()}var Oa;function ka(){return(ka=e((()=>{Oa=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})))()}var Aa,ja;function Ma(){return(Ma=e((()=>{O(),ka(),Aa=b(Oa),ja=()=>{let e=s(Aa);return r(()=>e(),[e])}})))()}function Na(){return(Na=e((()=>{Ma()})))()}var Pa;function Fa(){return(Fa=e((()=>{O(),Na(),Da(),Pa=(e,t,n,r)=>{let[i,a]=m(e?void 0:null),{read:o,write:s}=ja();return C(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:v(async()=>{if(!e)return;let r=Ta(t,i);await s(e,r),n(),a(r)},[t,i]),onReset:v(async()=>{n(),e&&i!=null&&(await s(e),a(null)),r?.()},[e,i,s,r]),hasChanges:t!=null,canReset:t!=null||i!=null}}})))()}var Ia;function La(){return(La=e((()=>{O(),q(),Da(),Fa(),Ia=({settingsId:e,host:t})=>{let n=r(()=>Object.fromEntries(Sa.map(e=>[e,t[e]])),[]),i=he(),a=v(()=>{i.current?.(n)},[n]),[o,s]=m(),[c,l]=m({columns:!0,sort:!0}),{savedSettings:u,...d}=Pa(e,o,s,a),{enabledColumns:f,disabledFiltering:p}=t,h=Sn(t,{enabledColumns:f,disabledFiltering:p}),g=r(()=>Ea({columns:h,settings:o,savedSettings:u??void 0,initial:n}),[h,o,u]),_=r(()=>g.columns.map(e=>h.find(t=>t.name===e.name)).filter(e=>e!==void 0),[h,...g.columns.map(e=>e.name)]);return{...d,savedSettings:u,opened:c,setOpened:l,settings:g,columns:_,setSettings:s,resetRef:i}}})))()}function Ra(){return(Ra=e((()=>{xa(),La()})))()}var za,Ba;function Va(){return(Va=e((()=>{za=e=>Number.isFinite(e)?e:0,Ba=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=za(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];u>i+(a>=0?o*d:i*a/r)?(s+=i,c+=u,l+=d,n[t]=u):d===0&&(s+=i,c+=i,n[t]=i)}r-=s,a=t-c-r,i-=l,o=za(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t],c=a>=0?o*s:i*a/r;n[t]=i+c}return n}})))()}var Ha,Ua,Wa;function Ga(){return(Ga=e((()=>{Va(),ta(),Ha=(e,t)=>{let n=ea(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${t}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`,o=0,s=0;return t.map((t,c)=>{let l=e[c];if(l==null||l===0)return a(t.name);o+=l;let u=Math.round(o),d=u-s;s=u;let f=r(t.name,d);return c===n?`${f}\n${i(t.name)}`:f}).join(`
`)},Ua=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Ua(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Ba(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Wa=(e,t)=>e.length===0?`.cell {display: none;}`:Ha(e,t)})))()}var Ka;function qa(){return(qa=e((()=>{O(),Ka=(e,t)=>C(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-104)});return n.observe(e),()=>n.unobserve(e)},[])})))()}var Ja;function Ya(){return(Ya=e((()=>{O(),qa(),Ja=e=>{let[t,n]=m(()=>e.getBoundingClientRect().width-104);return Ka(e,n),t}})))()}var Xa;function Za(){return(Za=e((()=>{O(),Ga(),Xa=({canvasWidth:e,groupOnColumn:t,layoutColumns:n,config:i})=>r(()=>{if(!Array.isArray(i)||e==null||e===0)return[];let r=i.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>n==null?e:{...e,hidden:!n.includes(e.name)}).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Ua(r,e,r.length)},[e,t,i])})))()}var Qa;function $a(){return($a=e((()=>{O(),Qa=({host:e,canvasWidth:t,columns:n})=>{let i=e.miniBreakpoint??480,a=r(()=>t<=i,[t,i]),o=r(()=>a?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,a]),s=r(()=>o.slice(1),[o]),c=o[0],l=!!c&&e.renderItem==null;return C(()=>{e.toggleAttribute(`mini`,l)},[l]),{isMini:l&&a,hasMiniColumn:l,miniColumn:c,miniColumns:s}}})))()}var eo;function to(){return(to=e((()=>{O(),eo=({host:e,canvasWidth:t,layout:n,setSettings:r,requestTween:i})=>{let a=he();a.current=e=>{i(),r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},C(()=>{let t=e=>a.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})))()}var no,ro,io;function ao(){return(ao=e((()=>{ke(),xe(),O(),no=(e,t)=>{let n=r(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);C(()=>{n.start()},t),C(()=>()=>n.stop(),[])},ro=(e=0,t=0)=>Math.abs(e-t)<.1,io=(e,t=1.9,n=_e,r)=>{let i=De({target:e,speedFactor:t,onConverge:r}),a=v(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>ro(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]);no(a,[e])}})))()}var oo,so,co;function lo(){return(lo=e((()=>{xe(),O(),Ga(),Ya(),Za(),$a(),to(),ao(),oo=e=>{let t=r(()=>new CSSStyleSheet,[]);return C(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},so=e=>{C(()=>{e.toggleAttribute(`compact`,e.compact===!0)},[e.compact])},co=({host:e,columns:t,settings:n,setSettings:i,resizeSpeedFactor:a,sortAndGroupOptions:o})=>{let s=Ja(e),{isMini:c,hasMiniColumn:l,miniColumn:u,miniColumns:d}=Qa({host:e,canvasWidth:s,columns:t});so(e);let{groupOnColumn:f}=o,p=l?[u.name]:e.headerColumns??null,h=Xa({canvasWidth:s,groupOnColumn:f,layoutColumns:p,config:n.columns}),g=oo(e),_=n.columns.filter((e,t)=>h[t]==null&&e.name!==f?.name&&!e.disabled).map(e=>e.name),y=r(()=>_.map(e=>t.find(t=>t.name===e)),[t,_.join()]),[b,x]=m(1),S=v(()=>x(a??1.9),[a]),ee=v(()=>x(1),[]),C=De({columns:n.columns});return io(h,b,e=>{let t=Wa(e,C.columns);g.replaceSync(t)},ee),eo({host:e,canvasWidth:s,layout:h,setSettings:e=>i(e(n)),requestTween:S}),{isMini:c,collapsedColumns:y,miniColumns:d,requestTween:S}}})))()}var uo;function fo(){return(fo=e((()=>{uo=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})))()}var po;function mo(){return(mo=e((()=>{O(),ta(),po=({host:e,selectedItems:t,data:n,dataIsValid:i,columns:a,sortAndGroupOptions:o,collapsedColumns:s,settings:c,filterFunctions:l,settingS:u,filters:d,setFilterState:f,hideSelectAll:p,headerColumns:m,requestTween:h,...g})=>{let _=r(()=>m==null?a:a.filter(e=>m.includes(e.name)),[a,m]),v=t===$||!!n&&n.length>0&&Array.isArray(t)&&t.length===n.length,y=t=>{if(!(t.target instanceof HTMLInputElement))return;let n=e.shadowRoot.querySelector(`#groupedList`);t.target.checked?n.selectAll():n.deselectAll()},{groupOnColumn:b}=o,x=r(()=>[b,...s,...c.columns.filter(e=>e.disabled)].some(e=>!!e&&!!e.name&&Object.keys(l).includes(e.name)),[l,c,s]);return{allSelected:v,onAllCheckboxChange:y,data:n,dataIsValid:i,columns:_,settingsConfig:r(()=>({...u,collapsed:s,badge:x,filters:d,requestTween:h}),[u,s,x,d,h]),filters:d,groupOnColumn:b,setFilterState:f,hideSelectAll:p,sortAndGroup:o.sortAndGroup,...g}}})))()}var ho,go;function _o(){return(_o=e((()=>{$e(),p(),O(),N(),ho=e=>e?`groupRow groupRow-folded`:`groupRow`,go=(e,t,{selected:n,folded:r,toggleFold:i,onCheckboxChange:a,groupOnColumn:o,dataIsValid:s})=>E` <div
		class="${ho(r)}"
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
			aria-label=${D(`Expand or collapse`)}
			variant="tertiary"
			icon-only
			class="expand"
			?aria-expanded="${r}"
			@click=${i}
		>
			${w({width:`16`,height:`16`})}
		</cosmoz-button>
	</div>`})))()}var vo;function yo(){return(yo=e((()=>{g(),vo=({item:e,index:t})=>n=>h((n?.length??0)>0,()=>E`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>E`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`)})))()}var bo;function xo(){return(xo=e((()=>{$e(),p(),Ne(),O(),N(),yo(),bo=(e,t,{selected:n,expanded:r,toggleCollapse:i,columns:o,collapsedColumns:s,miniColumns:c,onItemClick:l,onCheckboxChange:u,onItemChange:d,rowPartFn:f,groupOnColumn:p,dataIsValid:m,onRowMenu:g,onRowContextMenu:_})=>E`
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
				${h(g,()=>E`<cosmoz-button
							aria-label=${D(`Actions`)}
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
					aria-label=${D(`Expand or collapse`)}
					variant="tertiary"
					icon-only
					class="expand"
					?hidden="${Pe(s.length)}"
					?aria-expanded="${r}"
					@click="${i}"
				>
					${w({width:`16`,height:`16`})}
				</cosmoz-button>
			</div>
			${vo({item:e,index:t})(c)}
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
	`})))()}var So,Co,wo,To;function Eo(){return(Eo=e((()=>{O(),g(),pe(),Ue(),So=4,Co=(e=document)=>{let t=e.activeElement;return t?.shadowRoot?.activeElement?Co(t.shadowRoot):t},wo=e=>[e,...e.querySelectorAll(`*`)].flatMap(e=>[...e.getAttribute(`role`)===`menuitem`?[e]:[],...e.shadowRoot?[...e.shadowRoot.children].flatMap(wo):[]]),To=(e,t,n)=>{let[r,i]=m(),a=he(),o=he(t),s=he({at:0}),c=e.rowMenu;o.current=t;let l=v((e,t)=>{let n=e.dataItem,r=o.current,a=Array.isArray(r)&&r.length>1&&r.includes(n);i({...t,items:a?r:[n],opener:Co()??void 0})},[]),d=v(e=>{e.stopPropagation();let t=e.currentTarget,n=e.composedPath().find(e=>e.dataItem),{trigger:r,at:i}=s.current;if(!n||r===t&&performance.now()-i<500)return;let{left:a,bottom:o}=t.getBoundingClientRect();l(n,{x:a,y:o+So,trigger:t})},[l]),f=v(e=>{e.preventDefault(),l(e.currentTarget,{x:e.clientX,y:e.clientY})},[l]);return C(()=>{e.toggleAttribute(`row-menu`,!!c)},[c]),C(()=>i(void 0),[n]),C(()=>{let t=a.current;if(!r||!t)return;t.showPopover(),t.focus(),r.trigger?.setAttribute(`aria-expanded`,`true`);let{width:n,height:i}=t.getBoundingClientRect(),o=r.y+i>innerHeight?r.y-i-So:r.y;t.style.left=`${Math.max(So,Math.min(r.x,innerWidth-n-So))}px`,t.style.top=`${Math.max(So,o)}px`;let s=e=>!e.composedPath().includes(t)&&t.hidePopover(),c=e.shadowRoot;return c.addEventListener(`scroll`,s,!0),()=>{c.removeEventListener(`scroll`,s,!0),r.trigger?.removeAttribute(`aria-expanded`)}},[r]),{onRowMenu:c?d:void 0,onRowContextMenu:c?f:void 0,renderRowMenu:()=>r&&c?E`<div
					popover="auto"
					class="row-menu"
					part="row-menu"
					role="menu"
					tabindex="-1"
					style=${et({left:`${r.x}px`,top:`${r.y}px`})}
					${re(e=>a.current=e)}
					@keydown=${e=>{if(e.target!==a.current)return;let t=wo(a.current),n=[`ArrowDown`,`Home`].includes(e.key),r=[`ArrowUp`,`End`].includes(e.key),i=n?t[0]:r&&t[t.length-1];i&&(e.preventDefault(),i.focus())}}
					@beforetoggle=${e=>{e.newState===`closed`&&(s.current={trigger:r.trigger,at:performance.now()},r.hadFocus=!!a.current?.matches(`:focus-within`))}}
					@toggle=${e=>{if(e.newState!==`closed`)return;let t=Co(),n=!t||t===document.body||!!a.current?.matches(`:focus-within`);r.hadFocus&&n&&(r.trigger??r.opener)?.focus(),i(void 0)}}
					@click=${e=>{e.composedPath().some(e=>e instanceof Element&&e.getAttribute(`role`)===`menuitem`)&&a.current?.hidePopover()}}
			  >
					${c(r.items)}
			  </div>`:u}}})))()}var Do,Oo,ko;function Ao(){return(Ao=e((()=>{O(),_o(),xo(),Eo(),ta(),J(),Do=e=>e instanceof HTMLInputElement,Oo=e=>e instanceof HTMLElement,ko=({host:e,error:t,dataIsValid:n,processedItems:i,columns:a,collapsedColumns:o,miniColumns:s,sortAndGroupOptions:c,rowPartFn:l,selectedItems:u,...d})=>{let{loading:f=!1,displayEmptyGroups:p=!1,compareItemsFn:m}=e,h=e.renderItem??bo,g=e.renderGroup??go,_=he({shiftKey:!1,ctrlKey:!1}),y=v(t=>{if(!Do(t.target))return;let n=t.target,r=n.dataItem,i=n.checked,a=e.shadowRoot.querySelector(`#groupedList`);_.current.shiftKey?a.toggleSelectTo(r,i):_.current.ctrlKey?(n.checked=!0,a.selectOnly(r)):a.toggleSelect(r,i),t.preventDefault(),t.stopPropagation()},[]);C(()=>{let e=({shiftKey:e,ctrlKey:t})=>{_.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let b=v(t=>{if(!Oo(t.currentTarget))return;let n=t.currentTarget,r=t.composedPath();r.slice(0,r.indexOf(n)).some(e=>e instanceof Element&&e.matches(`a, .checkbox, .expand, .row-menu-trigger`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:n.dataItem,index:n.dataIndex}}))},[]),{onRowMenu:x,onRowContextMenu:S,renderRowMenu:ee}=To(e,u,i),{groupOnColumn:w}=c,T=v((t,n)=>r=>Tn(e,t,n,r),[]);return{...d,selectedItems:u,renderRowMenu:ee,processedItems:i,dataIsValid:n,filterIsTooStrict:n&&i.length<1,loading:f,compareItemsFn:m,displayEmptyGroups:p,error:t,renderItem:r(()=>(e,t,r)=>h(e,e[$i],{...r,columns:a,collapsedColumns:o,miniColumns:s,onItemClick:b,onCheckboxChange:y,onItemChange:T,rowPartFn:l,groupOnColumn:w,dataIsValid:n,onRowMenu:x,onRowContextMenu:S}),[h,x,S,a,o,s,b,y,T,l,w,n]),renderGroup:r(()=>(e,t,r)=>g(e,e[$i],{...r,columns:a,onCheckboxChange:y,groupOnColumn:w,dataIsValid:n}),[g,a,y,w,n])}}})))()}var jo;function Mo(){return(Mo=e((()=>{jo=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})))()}var No,Po,Fo,Io,Lo,Ro;function zo(){return(zo=e((()=>{ke(),O(),Mo(),q(),Ei(),ta(),No=(e,t)=>(n,r)=>jo(e(n),e(r))*(t?-1:1),Po=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),Fo=(e,t)=>{e&&t&&Object.entries(t).forEach(([t,n])=>{let r=e[K];r.__ownChange=!0,Object.assign(r,{[t]:n}),r.__ownChange=!1,r.dispatchEvent(new CustomEvent(`${Po(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},Io=(e,t)=>Object.assign(e,{[$i]:t}),Lo=Symbol(`unparsed`),Ro=({data:e,columns:t,hashParam:n,sortAndGroupOptions:i,noLocalSort:a,noLocalFilter:o})=>{let{groupOnColumn:s,groupOnDescending:c,sortOnColumn:l,descending:u}=i,d=v(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),f=v(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[Lo]:n}];let i={filter:r.deserializeFilter(r,n)};return Fo(r,i),[e,i]},[t]),[p,m]=bi({},n,{multi:!0,suffix:`-filter--`,write:d,read:f}),h=v((e,n)=>m(r=>{let i=ie(n,r[e]);return Fo(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,m]),g=r(()=>Object.values(p).map(e=>e.filter),[p]),_=r(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,p[e.name]?.filter)]).filter(e=>!!e[1])),[t,...g]),y=r(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(_).length===0||o?e.slice():e.filter(e=>Object.values(_).every(t=>t(e))),[e,_,o]),b=r(()=>{if(!a&&!s&&l!=null&&l.sortOn!=null)return y.slice().sort(No(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),u));if(s!=null&&s.groupOn!=null){let e=y.reduce((e,t)=>{let n=s.getComparableValue({...s,valuePath:s.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(No(e=>s.getComparableValue({...s,valuePath:s.groupOn},e.items[0]),c)),!l||a?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(No(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),u)),e))}return y},[y,s,c,l,u,a]),x=r(()=>{let e=0,t=0,n=[];return b.forEach(r=>{if(`items`in r&&Array.isArray(r.items))Io(r,t++),r.items.forEach(t=>{Io(t,e++),n.push(t)});else return Io(r,e++),n.push(r)},[]),n},[b]);return C(()=>{m(e=>Object.values(e).some(e=>e[Lo]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>{let n=t[Lo];return n==null?[e,t]:f([e,n])})):e)},[f]),{processedItems:b,visibleData:x,filters:p,filterFunctions:_,setFilterState:h}}})))()}var Bo,Vo,Ho;function Uo(){return(Uo=e((()=>{x(),y(),O(),Bo=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(e){let n=[];for(let r=e.length-1;r>=0;--r){let i=t(e[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);i>-1&&n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},Vo=e=>{let[t,n]=m(!1);return C(()=>{e&&n(!0)},[e]),t},Ho=({host:e,visibleData:t,filters:n,ready:a=!0,...o})=>{let{setFilterState:s}=o,c=r(()=>Bo(e),[]),[l,u]=d(`selectedItems`,[]);i(o,Object.values(o)),i(c,Object.values(c)),C(()=>{let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;s(t.name,e=>({...typeof e==`object`&&e?e:{},...t.state}))};return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),A(`visibleData`,t),A(`sortedFilteredGroupedItems`,o.sortedFilteredGroupedItems),A(`sortOn`,o.sortOn),A(`descending`,o.descending),A(`isMini`,o.isMini),A(`settingsReady`,Vo(a));let f=r(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return A(`filters`,f,Object.values(f)),{selectedItems:l,setSelectedItems:u}}})))()}var Wo;function Go(){return(Go=e((()=>{Ra(),lo(),fo(),mo(),Ao(),zo(),Uo(),Mi(),Wo=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Ia({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=h!==void 0,_=Ai(p,t,{settings:d,setSettings:f,resetRef:m,ready:g}),{processedItems:v,visibleData:y,filters:b,setFilterState:x,filterFunctions:S}=Ro({data:r,columns:p,hashParam:t,sortAndGroupOptions:_,noLocalSort:o,noLocalFilter:s}),{isMini:ee,collapsedColumns:C,miniColumns:w,requestTween:T}=co({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:_}),E=r&&Array.isArray(r)&&r.length>0,{selectedItems:te,setSelectedItems:ne}=Ho({host:e,visibleData:y,sortedFilteredGroupedItems:v,columns:p,filters:b,setFilterState:x,isMini:ee,ready:g,..._}),re=po({host:e,selectedItems:te,sortAndGroupOptions:_,dataIsValid:E,data:r,columns:p,filters:b,collapsedColumns:C,settings:d,filterFunctions:S,settingS:u,setFilterState:x,hideSelectAll:e.hideSelectAll===!0,headerColumns:e.headerColumns??null,requestTween:T});return{header:re,list:ko({host:e,error:c,dataIsValid:E,processedItems:v,selectedItems:te,setSelectedItems:ne,columns:p,collapsedColumns:C,miniColumns:w,sortAndGroupOptions:_,rowPartFn:l}),footer:uo({host:e,selectedItems:te,allSelected:re.allSelected,setSelectedItems:ne,columns:p,enableSelectAll:e.enableSelectAll,allItemsCount:e.allItemsCount})}}})))()}function Ko(){return(Ko=e((()=>{g(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item!=null&&this._index!=null&&this._renderFn!=null&&T(this._renderFn(this._item,this._index),this)}})})))()}var qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts;function ns(){return(ns=e((()=>{qo={group:Symbol(`group`)},Jo=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),Yo=(e,t)=>!!Jo(e,t).expanded,Xo=(e,t)=>!!Jo(e,t).folded,Zo=e=>e?e.items instanceof Array:!1,Qo=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},$o=(e,t,n)=>{if(Array.isArray(e))return Qo(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?Jo(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[qo.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},es=(e,...t)=>typeof e==`function`?e(...t):e,ts=(e,t)=>e===t})))()}var rs;function is(){return(is=e((()=>{O(),ns(),rs=()=>{let[e,t]=m(()=>[new WeakMap]);return{setItemState:v((e,n)=>t(([t])=>{let r=Jo(e,t);return Object.assign(r,es(n,r)),[t]}),[]),state:e[0],signal:e}}})))()}var as;function os(){return(os=e((()=>{O(),is(),ns(),as=()=>{let{setItemState:e,state:t,signal:n}=rs();return{state:t,signal:n,toggleFold:v((t,n)=>{Zo(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:v((t,n)=>{Zo(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})))()}var ss;function cs(){return(cs=e((()=>{O(),ta(),ns(),ss=({compareItemsFn:e,data:t,flatData:n})=>{let[r,i]=d(`selectedItems`,()=>[]),[a,o]=m(),s=v(e=>r===$||r.includes(e),[r]),c=v(e=>r===$||(e?.items?.every(s)??!1),[r,s]),l=v(e=>s(e)||c(e),[s,c]),u=v(e=>{let t=e.items??[e];i(e=>e===$?e:[...e,...t.filter(t=>!e.includes(t))]),o(e)},[]),f=v(e=>{let t=e.items??[e];i(e=>e===$?(n??[]).filter(e=>!Zo(e)).filter(e=>!t.includes(e)):e.filter(e=>!t.includes(e))),o(e)},[n]),p=v(e=>{i(e.items?.slice()||[e]),o(e)},[]),h=v(()=>{i(t.flatMap(e=>e.items||e)),o(void 0)},[t]),g=v(()=>{i([]),o(void 0)},[]),_=v((e,t=!l(e))=>t?u(e):f(e),[l]),y=v((t,r)=>{if(!n)return;let i=a?n.findIndex(t=>e(t,a)):-1;if(i<0)return _(t,r);let[s,c]=[i,n.indexOf(t)].sort((e,t)=>e-t);n.slice(s,c+1).forEach((e,t,n)=>{t>0&&t<n.length-1&&Zo(e)||_(e,r)}),o(t)},[n,e,_]);return C(()=>i(t=>t!==$&&t.length>0&&n?n.filter(n=>t.find(t=>e(n,t))):t),[n]),{selectedItems:r,isItemSelected:s,isGroupSelected:c,isSelected:l,select:u,deselect:f,selectOnly:p,selectAll:h,deselectAll:g,toggleSelect:_,toggleSelectTo:y}}})))()}var ls,us,ds;function fs(){return(fs=e((()=>{ae(),x(),O(),g(),Ko(),os(),cs(),ns(),ls={host:{position:`relative`,display:`flex`,flexDirection:`column`}},us=e=>{let{data:t,renderItem:n,renderGroup:a,displayEmptyGroups:o,compareItemsFn:s=ts}=e,{toggleFold:c,toggleCollapse:u,state:d,signal:f}=as(),p=r(()=>$o(t,o,d),[t,o,f]),{selectedItems:m,isItemSelected:h,isGroupSelected:g,isSelected:_,select:y,deselect:b,selectOnly:x,selectAll:S,deselectAll:ee,toggleSelect:C,toggleSelectTo:w}=ss({compareItemsFn:s,data:t,flatData:p}),T=v((e,t)=>Array.isArray(e.items)?a(e,t,{selected:g(e),folded:Xo(e,d),toggleSelect:t=>C(e,typeof t==`boolean`?t:void 0),toggleFold:()=>c(e)}):n(e,t,{selected:h(e),expanded:Yo(e,d),toggleSelect:t=>C(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>u(e)}),[n,a,m,C,f]);l(()=>{Object.assign(e.style,ls.host)},[]);let E={toggleFold:c,toggleCollapse:u,isItemSelected:h,isGroupSelected:g,isSelected:_,select:y,deselect:b,selectOnly:x,selectAll:S,deselectAll:ee,toggleSelect:C,toggleSelectTo:w};return i(E,Object.values(E)),{renderRow:T,flatData:p}},ds=({renderRow:e,flatData:t})=>ce({items:t,renderItem:(t,n)=>E`<cosmoz-grouped-list-row
				.item=${t}
				.index=${n}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})))()}var ps;function ms(){return(ms=e((()=>{O(),fs(),ps=e=>ds(us(e)),customElements.define(`cosmoz-grouped-list`,M(ps,{useShadowDOM:!1}))})))()}function hs(){return(hs=e((()=>{ms()})))()}var gs,_s,vs;function ys(){return(ys=e((()=>{Ke(),Bt(),ui(),fi(),Fi(),Bi(),Ui(),O(),We(),g(),Me(),Ki(),ra(),aa(),ua(),Go(),hs(),_o(),xo(),gs=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,_s=e=>{let{header:t,list:n,footer:r}=Wo(e);return E`
		<style>
			${te([],()=>gs(Gi))}
		</style>

		<div class="mainContainer">
			${ia(t)}
			<div class="tableContent" id="tableContent">
				${la(t,n)}
			</div>
			${na(r)}
		</div>
		${n.renderRowMenu()}

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,M(_s,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`compact`,`inline`,`enable-select-all`]})),vs=`
	<slot name="actions" slot="actions"></slot>
`,E(Object.assign([vs],{raw:[vs]})),He(Object.assign([vs],{raw:[vs]}))})))()}var bs,xs,Ss,Cs,ws;function Ts(){return(Ts=e((()=>{g(),$e(),dt(),Tt(),ys(),St(),bs={title:`Components/ComsmozOmnitableFullDemo`,component:`cosmoz-omnitable`,tags:[`autodocs`],args:{loading:!1,locale:`en`,sortOn:``,groupOn:``,descending:!1,groupOnDescending:!1,hashParam:``,settingsId:``,selectedItems:[],disabledFiltering:!1,enableSelectAll:!1,allItemsCount:1e4},argTypes:{loading:{control:`boolean`,description:`Show loading state`,table:{defaultValue:{summary:`false`}}},locale:{control:`select`,options:[`en`,`fr`,`sv`],description:`Language locale`,table:{defaultValue:{summary:`en`}}},selectedItems:{control:`object`,description:`Show selected items`},allItemsCount:{control:`number`,description:`Total number of items`},data:{control:`object`,description:`Show specified items`},sortOn:{control:`text`,description:`Column property name to sort on (e.g., "amount", "date", "id")`},groupOn:{control:`text`,description:`Column property name to group on (e.g., "amount", "date", "id")`},descending:{control:`boolean`,description:`Sort on descending`},groupOnDescending:{control:`boolean`,description:`Group on descending`},hashParam:{control:`text`,description:`Hash parameter for URL state management`},settingsId:{control:`text`,description:`ID for storing table settings`},disabledFiltering:{control:`boolean`,description:`Disable filter inputs in all column headers`,table:{defaultValue:{summary:`false`}}}},render:e=>E`
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
                    ${nt({styles:`vertical-align: middle; fill: currentColor;`})}
                    <span>Remove items</span>
                </cosmoz-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log(`Current hash:`,window.location.hash)}},xs={args:{data:Ct(10,10,10)}},Ss={args:{data:Ct(2,2,10)}},Cs={args:{data:[]}},ws=[`TableWithLargeData`,`TableWithSmallData`,`TableWithNoData`],xs.parameters={...xs.parameters,docs:{...xs.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...xs.parameters?.docs?.source}}},Ss.parameters={...Ss.parameters,docs:{...Ss.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...Ss.parameters?.docs?.source}}},Cs.parameters={...Cs.parameters,docs:{...Cs.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...Cs.parameters?.docs?.source}}}})))()}Ts();export{xs as TableWithLargeData,Cs as TableWithNoData,Ss as TableWithSmallData,ws as __namedExportsOrder,bs as default};