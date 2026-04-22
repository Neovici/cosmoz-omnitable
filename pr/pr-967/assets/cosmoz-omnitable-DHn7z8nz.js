import{n as e}from"./chunk-BneVvdWh.js";import{Q as t,Z as n,et as r,r as i,t as a,tt as o}from"./iframe-DFm45ev-.js";import{$ as s,A as c,At as l,B as u,Bt as d,C as f,Ct as p,D as m,Dt as h,E as g,Et as _,F as v,Ft as y,G as b,H as x,Ht as S,I as ee,It as te,J as ne,K as re,L as ie,Lt as C,M as ae,Mt as w,N as oe,Nt as T,O as se,Ot as E,P as ce,Pt as le,Q as D,R as ue,Rt as de,S as fe,St as pe,T as me,Tt as he,U as ge,Ut as _e,V as ve,Vt as ye,W as be,X as xe,Y as O,Z as Se,_ as Ce,_t as we,a as Te,at as Ee,b as De,bt as Oe,c as ke,ct as Ae,d as je,dt as Me,et as Ne,f as Pe,ft as Fe,g as Ie,gt as k,h as Le,ht as A,it as Re,j as ze,jt as Be,k as Ve,kt as j,l as He,lt as M,m as Ue,mt as We,n as Ge,nt as Ke,o as qe,ot as Je,p as Ye,pt as Xe,q as Ze,r as Qe,rt as $e,s as et,st as tt,t as nt,tt as rt,u as it,ut as N,v as at,vt as ot,w as st,wt as ct,x as lt,xt as ut,y as dt,yt as ft,z as pt,zt as P}from"./dist-QlA8AoHJ.js";var mt,ht,F=e((()=>{O(),w(),mt=D`
	:host {
		display: flex;
	}
	:host(:not([light])) {
		position: absolute;
		right: 0;
		z-index: +1;
	}

	:host(:not([visible])) {
		display: none !important;
	}

	.icon {
		fill: currentColor;
	}

	:host([light]) {
		flex: 0 0 24px;
	}

	:host(:not([light])) .icon {
		top: 10px;
		margin: 2px 7px;
		color: #cdcdcd;
		background-color: #a6a6a6;
		border-radius: 500px;
		cursor: pointer;
		min-width: 16px;
		width: 16px !important;
		min-height: 16px;
		height: 16px;
		padding: 2px;
		box-sizing: border-box;
		transition:
			background-color 0.25s,
			color 0.25s;
		float: right;
	}

	:host(:not([light])) .icon:hover {
		background-color: #b0b0b0;
		color: #dfdfdf;
	}
`,ht=()=>r`
	<style>
		${mt}
	</style>
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		class="icon"
	>
		<g>
			<path
				d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
			></path>
		</g>
	</svg>
`,customElements.define(`cosmoz-clear-button`,T(ht))})),I,gt,_t,vt,yt,L,R=e((()=>{k(),I=({valuePath:e},t)=>A(t,e),gt=I,_t=I,vt=({valuePath:e},t)=>n=>{let r=A(n,e);return r==null?!1:r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},yt=(e,t)=>t===``||t==null?null:t,L=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:`right`},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return I(e,t)}toXlsxValue(e,t){return gt(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return yt(e,t)}deserializeFilter(e,t){return t==null?null:typeof t==`string`?window.decodeURIComponent(t):t}getComparableValue(e,t){return _t(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})),bt,xt,St,Ct,wt,Tt,Et,Dt=e((()=>{x(),F(),N(),o(),R(),bt=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),xt=e=>()=>e(e=>({...e,filter:e.inputValue})),St=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},Ct=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),wt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Tt=e=>e!=null&&e!==``,Et=class extends L(M){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===``))return vt(e,t)}renderCell(e,{item:t}){return r`<span class="default-column">${I(e,t)}</span>`}renderEditCell(e,{item:t},n){return r`<cosmoz-input
			variant="inline"
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${I(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:i},a){return r`<cosmoz-input
			variant="inline"
			label=${e.title}
			.value=${n??t}
			@value-changed=${bt(a)}
			focused=${i}
			@focused-changed=${Ct(a)}
			@keydown=${St(a)}
			@blur=${xt(a)}
		>
			<cosmoz-clear-button
				suffix
				slot="suffix"
				?visible=${Tt(t)}
				light
				@click=${wt(a)}
			></cosmoz-clear-button>
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,Et)})),z,Ot,kt,At,jt,Mt,Nt,B=e((()=>{pt(),w(),z=Symbol(`column`),Ot=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},kt=e=>{let t=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:t,groupOn:e.groupOn??t,sortOn:e.sortOn??t,noSort:e.noSort,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:u(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[z]:e}},At=e=>e.isOmnitableColumn&&!e.hidden,jt=e=>{let t=e.filter(At);return Ot(t)?t:[]},Mt=(e,t)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(kt),Nt=(e,{enabledColumns:t})=>{let[n,r]=C([]);return de(()=>{let n,i=[],a=e.shadowRoot.querySelector(`#columnsSlot`),o=e=>()=>{let n=a.assignedNodes({flatten:!0});if(e)i=n;else{let e=n.filter(e=>!i.includes(e)),t=i.filter(e=>!n.includes(e)),r=[...e,...t].some(e=>e.isOmnitableColumn);if(i=n,!r)return}r(Mt(jt(n),t))},s=e=>{cancelAnimationFrame(n),n=requestAnimationFrame(o(e?.type===`cosmoz-column-prop-changed`))};return s(),a.addEventListener(`slotchange`,s),e.addEventListener(`cosmoz-column-prop-changed`,s),()=>{a.removeEventListener(`slotchange`,s),e.removeEventListener(`cosmoz-column-prop-changed`,s),cancelAnimationFrame(n)}},[t]),n}})),Pt,V,Ft,H=e((()=>{k(),B(),Pt=(e,t)=>Array.isArray(e)?e.map(e=>A(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,V=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return Pt(r,n)},Ft=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:A(n,i);if(r===a)return;i!==void 0&&we(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[z]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})),It,Lt,Rt,zt=e((()=>{w(),o(),x(),It=[`label`,`value`,`slot`,`always-float-label`],Lt=_e`
	${ne}

	:host {
		--text-align: left;
	}

	:host([text-align='right']) {
		--text-align: right;
	}

	:host([text-align='center']) {
		--text-align: center;
	}

	:host::part(control) {
		width: 100%;
	}

	#input {
		color: var(--color);
		user-select: none;
		cursor: pointer;
		min-height: var(--line-height);
		text-align: var(--text-align);
		white-space: nowrap;
		overflow: clip;
		/* TODO: Remove later on, for compat only */
		font-size: 16px;
		font-family: sans-serif, Verdana, Arial;
	}

	label {
		display: block;
		text-align: var(--text-align);
		transform-origin: var(--text-align) top;
		/* TODO: Remove later on, for compat only */
		font-size: 13px;
	}

	:host(:not([always-float-label])) label {
		transform: none !important;
	}
`,Rt=e=>{let{label:t,value:n,slot:i}=e;return Ee(r`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${i}
	>
		${n||``}
	</div>`,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,T(Rt,{observedAttributes:It,styleSheets:[Lt]}))})),U,Bt=e((()=>{o(),ue(),pe(),zt(),U=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:i,content:a,horizontalAlign:o=`left`,externalValues:s=null})=>r`
		<style>
			.dropdown {
				outline: none;
			}
			.dropdown:focus-within .input {
				--focused: focused;
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
				min-height: 32px;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.dropdown-content {
				position: absolute !important;
				height: auto !important;
				top: -30px;
				left: 0;
				right: 0;
				width: fit-content;
			}

			.dropdown-content h3 {
				font-weight: 500;
				font-size: 13px;
				margin: 0;
				color: var(--cosmoz-omnitable-text-color);
				font-family: var(
					--cosmoz-input-font-family,
					var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
				);
			}

			.dropdown-content {
				padding: 10px 10px 10px 10px;
				min-width: 120px;
				height: 100%;
				position: relative;
				text-align: left;
				background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				border-radius: 6px;
				backdrop-filter: blur(16px) saturate(180%);
				-webkit-backdrop-filter: blur(16px) saturate(180%);
				box-shadow:
					0 4px 24px 0 rgba(0, 0, 0, 0.18),
					0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
			}
		</style>

		<cosmoz-dropdown
			@focus=${i}
			class=${`${ie({filtered:!!n,...s!=null&&{[`external-values-${s}`]:!0}})} dropdown`}
			title=${t||``}
		>
			<cosmoz-omnitable-dropdown-input
				class="input"
				slot="button"
				.label=${e}
				.placeholder=${e}
				.value=${n??``}
				text-align=${o}
				?always-float-label=${n?.length>0}
			></cosmoz-omnitable-dropdown-input>
			<div class="dropdown-content">${a}</div>
		</cosmoz-dropdown>
	`})),Vt,Ht,Ut=e((()=>{ee(),Xe(),oe(),ft(),Vt=e=>e?typeof e.close==`function`?e:Vt(e.parentElement):null,Ht=e=>class extends e{static get properties(){return{filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){this.__inputChangePath=e.path.split(`.`)[1]||null,t&&(this._limitInputDebouncer=ce.debounce(this._limitInputDebouncer,We.after(600),()=>{this._limitInput(),this._updateFilter()}),v(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Vt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)===this.getComparableValue(c)?!1:(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);this.getComparableValue(n)===this.getComparableValue(t,`min`)&&this.getComparableValue(r)===this.getComparableValue(t,`max`)||this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);this.getComparableValue(r)===this.getComparableValue(n,`min`)&&this.getComparableValue(i)===this.getComparableValue(n,`max`)||(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(Oe(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})),W,Wt=e((()=>{N(),o(),W=e=>class extends e{static get template(){return Me`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),t(this.render(),this.$.output)}_propertiesChanged(e,n,r){super._propertiesChanged(e,n,r),requestAnimationFrame(()=>t(this.render(),this.$.output))}}})),Gt,Kt=e((()=>{x(),N(),a(),o(),Bt(),Ut(),Wt(),Gt=class extends Ht(W(M)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){return r`
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${U({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)},content:r`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						title=${i(`Minimum amount`)}
						label=${i(`Min amount`)}
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
						title=${i(`Maximum amount`)}
						label=${i(`Max amount`)}
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Gt)})),G,qt,Jt,Yt,K,Xt,Zt,Qt,$t=e((()=>{k(),pt(),G=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=G(t);return i==null?r:n(r,i)},qt=e=>{let t=G(e);return t==null?null:t.toString()},Jt=({valuePath:e},t)=>qt(G(e?A(t,e):t)),Yt=e=>qt(e)??``,K=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=G(e?A(n,e):n);if(r!=null)return t===null?r:G(r.toFixed(t))},Xt=ve((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Zt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?A(i,e):i;if(a==null)return``;let o=G(a);if(o!=null)return Xt(t,n,r).format(o)},Qt=(e,t)=>n=>{let r=K(e,n);if(r==null)return!1;let i=K({...e,valuePath:`min`},t),a=K({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),q,J,en,tn,nn,rn,an,on,sn,cn,ln,un=e((()=>{k(),$t(),q=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=G(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=q(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1);return G(s,o.amount*(e[o.currency]||1),r)===s?a:o},J=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=A(n,e));let i=q(t,r);if(i==null)return;let a=G(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},en=(e,t)=>n=>{let r=J(e,n);if(r===void 0)return!1;let i=J({...e,valuePath:`min`},t),a=J({...e,valuePath:`max`},t);return i===void 0||a===void 0?!0:!(r<i||r>a)},tn={},nn=(e,t)=>{let n=e+(t||``)||``;return tn[n]||(tn[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),tn[n]},rn=(e,t,n)=>{let r=q(e,t);return r==null?``:nn(r.currency,n).format(r.amount)},an=({valuePath:e,rates:t,locale:n},r)=>{let i=q(t,e?A(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:rn(t,i,n)},on=e=>e?e.amount+e.currency:``,sn=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},cn=({valuePath:e},t)=>e?A(t,e)?.currency:null,ln=({valuePath:e},t)=>e?A(t,e)?.amount:void 0})),dn,fn=e((()=>{x(),F(),N(),o(),R(),H(),Kt(),un(),k(),dn=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell align-right`},headerCellClass:{type:String,value:`amount-header-cell`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=J({...e,valuePath:`min`},t),r=J({...e,valuePath:`max`},t);if(!(n==null&&r==null))return en(e,t)}getString(e,t){return an(e,t)}toXlsxValue(e,t){return an(e,t)}getComparableValue(e,t){return J(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=q(e,t.min),r=q(e,t.max);if(!(n==null&&r==null))return on(n)+`~`+on(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:sn(n[1]),max:sn(n[2])}:null}renderCell(e,{item:t}){return r`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return r`<cosmoz-input
			no-label-float
			type="number"
			@change=${r=>n({amount:r.target.value,currency:A(t,e.valuePath)?.currency})}
			.value=${ln(e,t)}
		>
			<div slot="suffix">${cn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:i,locale:a,rates:o,currency:s,autoupdate:c,autodetect:l},{filter:u},d,f){return r`<cosmoz-omnitable-amount-range-input
			.title=${e}
			.filter=${u}
			.values=${f}
			.rates=${o}
			.min=${t}
			.max=${n}
			.limits=${i}
			.locale=${a}
			.currency=${s}
			.autoupdate=${c}
			.autodetect=${l}
			@filter-changed=${({detail:{value:e}})=>d(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>d(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return V(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,dn)})),pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn=e((()=>{st(),ft(),me(),k(),H(),pn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=A(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},mn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=pn(e,t);if(!r?.length)return r;let i=n??`label`,a=e=>String(typeof e==`object`&&e?A(e,i)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},hn=(e,t,n)=>f(t&&A(e,t)).map(g(n)),gn=({valuePath:e,textProperty:t},n)=>hn(n,e,t).filter(e=>e!=null).join(`, `),_n=gn,vn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=g(e),s=f(A(a,t));return i.some(t=>s.length===0&&g(r||e)(t)===n||s.some(e=>o(e)===o(t)))},yn=e=>t=>e(e=>({...e,filter:t})),bn=e=>t=>e(e=>({...e,headerFocused:t})),xn=e=>t=>e(e=>({...e,query:t})),Sn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=mn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Cn=(e,t)=>Sn(e,Pt(t,e.valuePath)),wn=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return gn(e,t)}toXlsxValue(e,t){return _n(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=A(n,e);return t==null?r:f(r).reduce((e,n)=>(e.push(A(n,t)),e),[]).sort().join(` `)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return vn(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){return JSON.parse(decodeURIComponent(t))}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>Sn(e,await Promise.resolve(Oe(e.values,...t))):Cn(e,t)}}})),En,Dn,On,kn=e((()=>{fe(),lt(),N(),o(),E(),st(),me(),Tn(),R(),w(),k(),B(),En=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?se(t):g(n),a=f(e&&A(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Dn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=g(e),o=g(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=f(A(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},On=class extends wn(L(M)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return r`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return r`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${I(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},i,a){return r`<cosmoz-autocomplete-excluding
			variant="inline"
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${e.title}
			.source=${a}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[z]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			@opened-changed=${e=>bn(i)(e.detail.value)}
			@value-changed=${te(yn(i))}
			@text-changed=${te(xn(i))}
			>${j(e.loading,()=>r`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return En(e,t)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return Dn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,On)})),An,jn,Mn=e((()=>{fe(),lt(),N(),o(),E(),st(),me(),Tn(),R(),k(),B(),An=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?se(t):g(n),a=f(e&&A(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},jn=class extends wn(L(M)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return r`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return r`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${I(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},i,a){return r`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${e.title}
			.source=${a}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[z]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			.onChange=${yn(i)}
			@opened-changed=${e=>bn(i)(e.detail.value)}
			.onText=${xn(i)}
			>${j(e.loading,()=>r`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return An(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,jn)})),Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn=e((()=>{N(),R(),fe(),pt(),k(),o(),E(),Nn=(e,t)=>t.find(({value:t})=>e===t),Pn=(e,t,n)=>{let r=Nn(t,n);return r?r.text:e},Fn=(e,t,n,r)=>Pn(e,A(t,n),r),In=({valuePath:e},t,n)=>Nn(A(t,e),n),Ln=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Rn=e=>t=>{e(e=>({...e,headerFocused:t}))},zn=e=>t=>{e(e=>({...e,query:t}))},Bn=e=>t=>e(t?.[0]?.value),Vn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>A(r,e)?t:n,Hn=({valuePath:e},t)=>n=>A(n,e)===t,Un=u((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),Wn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?A(r,e)?t:n:``,Gn=(e,t)=>{try{return JSON.parse(t)}catch{return null}},Kn=class extends L(M){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Vn(e,t)}renderCell(e,{item:t}){return Vn(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:i,falseLabel:a}=e;return r`<cosmoz-autocomplete
			variant="inline"
			.title=${Fn(e.title,t,e.valuePath,Un(i,a))}
			.source=${Un(i,a)}
			.textProperty=${`text`}
			.value=${In(e,t,Un(i,a))}
			.onChange=${Bn(n)}
			.limit=${1}
			>${j(e.loading,()=>r`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},i,a){return r`<cosmoz-autocomplete-ui
			variant="inline"
			.label=${e.title}
			.title=${Fn(e.title,t,e.valuePath,a)}
			.source=${a}
			.textProperty=${`text`}
			.value=${Nn(t,a)}
			.text=${n}
			.onChange=${Ln(i)}
			@opened-changed=${e=>Rn(i)(e.detail.value)}
			.onText=${zn(i)}
			.limit=${1}
			>${j(e.loading,()=>r`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return Un(e,t)}getFilterFn(e,t){if(t!=null)return Hn(e,t)}toXlsxValue(e,t){return Wn(e,t)}deserializeFilter(e,t){return Gn(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,Kn)})),Jn,Yn=e((()=>{Ne(),Ut(),Jn=e=>class extends Ht(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return rt(e)}}})),Xn,Zn=e((()=>{x(),N(),a(),o(),Yn(),Bt(),Wt(),Xn=class extends Jn(W(M)){render(){return r`
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${U({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e=>{this.headerFocused=e.type===`focus`},content:r`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="date"
						label=${i(`From date`)}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						.value=${this._filterInput?.min}
						@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="date"
						label=${i(`Until date`)}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						.value=${this._filterInput?.max}
						@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
					></cosmoz-input>
				`})}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;if(n&&n.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,Xn)})),Qn,$n,er,Y,X,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr=e((()=>{Ne(),k(),$t(),Qn=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},$n=e=>e.length===19?e+Qn(e):e,er=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=$n(t)),t=s(t),!t)||Number.isNaN(t.getTime())?null:t},Y=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=A(t,e));let r=er(n);if(r!=null)return G(r.getTime())},X=(e,t,n)=>{let r=er(e);if(r==null)return null;if(n==null||t==null)return r;let i=X(t);if(i==null)return r;let a=Y({},r),o=Y({},i);return a==null||o==null||n(a,o)===a?r:i},tr=(e,t)=>{if(t==null)return;let n=X(e);if(n!=null)return t.format(n)},nr={},rr=e=>{let t=e||``;return nr[t]||(nr[t]=new Intl.DateTimeFormat(e||void 0)),nr[t]},ir=({valuePath:e,locale:t},n)=>{let r=A(n,e||``);return r===void 0?``:(r=X(r),r===null?`Invalid Date`:tr(r,rr(t)))},ar=e=>{let t=X(e);if(t==null)return null;let n=rt(t);return n==null?null:n.slice(0,10)},or=({valuePath:e},t)=>ar(A(t,e||``)),sr=(e,t)=>{let n=X(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},cr=e=>ar(e)??``,lr=({valuePath:e},t)=>{if(!e)return``;let n=X(A(t,e));if(!n)return``;let r=X(rt(n));return r?(r.setHours(0,0,0,0),r):``},ur=(e,t)=>n=>{let r=Y(e,n);if(r==null)return!1;let i=Y({...e,valuePath:`min`},t),a=Y({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),fr,pr=e((()=>{o(),N(),x(),F(),R(),Zn(),H(),dr(),fr=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(!(n==null&&r==null))return ur(e,t)}getString(e,t){return ir(e,t)}toXlsxValue(e,t){return lr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(!(n==null&&r==null))return cr(n)+`~`+cr(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:X(n[1]),max:X(n[2])}:null}renderCell(e,{item:t}){return r`<div class="omnitable-cell-date">
			${ir(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return r`<cosmoz-input
			no-label-float
			type="date"
			@change=${e=>n(sr(e.target.value))}
			.value=${or(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:i,locale:a},{filter:o},s,c){return r`<cosmoz-omnitable-date-range-input
			.title=${e}
			.filter=${o}
			.values=${c}
			.min=${t}
			.max=${n}
			.limits=${i}
			.locale=${a}
			@filter-changed=${({detail:{value:e}})=>s(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>s(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return V(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,fr)})),mr,hr=e((()=>{N(),a(),o(),Yn(),Bt(),Wt(),mr=class extends Jn(W(M)){render(){return r`
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${U({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e=>{this.headerFocused=e.type===`focus`},content:r`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-datetime-input
						date-label=${i(`From date`)}
						time-label=${i(`From time`)}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.min}
						@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
					></cosmoz-datetime-input>
					<cosmoz-datetime-input
						date-label=${i(`To date`)}
						time-label=${i(`To time`)}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.max}
						@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
					></cosmoz-datetime-input>
				`})}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,mr)})),gr,_r,vr,yr,br,xr,Sr=e((()=>{k(),dr(),gr={},_r=e=>{let t=e||``;return gr[t]||(gr[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),gr[t]},vr=({valuePath:e,locale:t},n)=>{let r=X(A(n,e||``));return r===void 0?``:r===null?`Invalid Date`:tr(r,_r(t))},yr=({valuePath:e},t)=>e?A(t,e):``,br=e=>{let t=X(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},xr=e=>{if(!(e==null||e===``)&&typeof e==`string`)return X(e.replace(/\./gu,`:`)+`Z`)}})),Cr,wr=e((()=>{De(),F(),N(),o(),R(),hr(),H(),dr(),Sr(),Cr=class extends L(M){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(!(n==null&&r==null))return ur(e,t)}getString(e,t){return vr(e,t)}toXlsxValue(e,t){return yr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(!(n==null&&r==null))return br(n)+`~`+br(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:xr(n[1]),max:xr(n[2])}:null}renderCell(e,{item:t}){return vr(e,t)}renderEditCell(e,{item:t},n){return r`<cosmoz-input
			type="text"
			@change=${e=>n(sr(e.target.value))}
			.value=${vr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:i,locale:a,filterStep:o},{filter:s},c,l){return r`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			.filter=${s}
			.values=${l}
			.min=${t}
			.max=${n}
			.limits=${i}
			.locale=${a}
			.filterStep=${o}
			@filter-changed=${({detail:{value:e}})=>c(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>c(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return V(e,t)}},customElements.define(Cr.is,Cr)})),Tr,Er=e((()=>{fe(),lt(),N(),o(),E(),Tn(),R(),Tr=class extends wn(L(M)){renderCell({valuePath:e,textProperty:t},{item:n}){return r`
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
				${hn(n,e,t).map(e=>r`<li>${e}</li>`)}
			</ul>
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:n},i,a){return r`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			.label=${e.title}
			.source=${a}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${n}
			.onChange=${yn(i)}
			@opened-changed=${e=>bn(i)(e.detail.value)}
			.onText=${xn(i)}
			>${j(e.loading,()=>r`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Tr)})),Dr,Or=e((()=>{at(),O(),N(),Fe(),window.Cosmoz=window.Cosmoz||{},Dr=class extends dt(xe(Re,M)){static get template(){return Me`
			<style>
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
			</style>

			<ul hidden$="[[ isEmpty(items) ]]">
				<li>
					<span>[[ _firstItem(items) ]]</span>
				</li>
				<li class="see-more" hidden$="[[_hideExpand(items, _expanded)]]">
					<a href="#" on-tap="_toggleExpand"
						>[[ _('and {0} more', _othersCount, t) ]]</a
					>
				</li>
				<template
					is="dom-repeat"
					items="[[ _otherItems(items, _expanded) ]]"
					as="item"
				>
					<li>
						<span class="item">[[ item ]]</span>
					</li>
				</template>
				<li class="see-less" hidden$="[[ _hideCollapse(items, _expanded) ]]">
					<a href="#" on-tap="_toggleExpand">[[ _('See less', t) ]]</a>
				</li>
			</ul>
		`}static get is(){return`cosmoz-omnitable-column-list-data`}static get properties(){return{items:{type:Array},_expanded:{type:Boolean,value:!1},_othersCount:{type:Number,computed:`_computeOthersCount(items)`}}}static get observers(){return[`_itemsLengthChanged(items.length)`]}_itemsLengthChanged(){requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent(`expand`,{bubbles:!0})))}_firstItem(e){if(e!=null&&e.length>0)return e[0]}_hideExpand(e,t){return e!==void 0&&e.length!==null?e.length<=2||t:!0}_hideCollapse(e,t){return e!==void 0&&e.length!==null?e.length<=2||!t:!0}_otherItems(e,t){if(e!=null&&(e.length<=2||t))return e.slice(1)}_computeOthersCount(e){if(e!=null)return e.length-1}_toggleExpand(e){this._expanded=!this._expanded,e.stopPropagation(),e.preventDefault()}},customElements.define(Dr.is,Dr)})),kr,Ar=e((()=>{Or(),N(),o(),E(),fe(),Tn(),R(),B(),kr=class extends wn(L(M)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return r`<cosmoz-omnitable-column-list-data
			.items=${hn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return r`<cosmoz-input
			no-label-float
			type="text"
			.value=${gn(e,t)}
			@change=${e=>n(e.target.value.split(/,\s*/gu))}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},i,a){return r`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			.textual=${e.textual}
			.column=${e}
			.label=${e.title}
			.source=${a}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[z]?.itemRenderer}
			.value=${t}
			.text=${n}
			.onChange=${yn(i)}
			@opened-changed=${e=>bn(i)(e.detail.value)}
			.onText=${xn(i)}
			>${j(e.loading,()=>r`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,kr)})),jr,Mr=e((()=>{x(),N(),a(),o(),Bt(),Ut(),Wt(),jr=class extends Ht(W(M)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){return r`
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${U({title:this.title,tooltip:this._tooltip,filterText:this._filterText,horizontalAlign:`right`,externalValues:this.externalValues,onOpenedChanged:e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)},content:r`
					<h3>${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						label=${i(`From`)}
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
						label=${i(`To`)}
						.value=${this._filterInput?.max}
						@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
						@blur=${e=>this._onBlur(e)}
						@keydown=${e=>this._onKeyDown(e)}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
					></cosmoz-input>
				`})}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,jr)})),Nr,Pr=e((()=>{x(),F(),N(),o(),R(),k(),Mr(),H(),$t(),Nr=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell align-right`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=K({...e,valuePath:`min`},t),r=K({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Qt(e,t)}getString(e,t){return Zt(e,t)}toXlsxValue({valuePath:e},t){return A(t,e)}getComparableValue(e,t){return K(e,t)}serializeFilter(e,t){if(t==null)return;let n=G(t.min),r=G(t.max);if(!(n==null&&r==null))return Yt(n)+`~`+Yt(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:G(n[1]),max:G(n[2])}:null}renderCell(e,{item:t}){return r`<div class="omnitable-cell-number">
			${Zt(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return r`<cosmoz-input
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Jt(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:i,locale:a,maximumFractionDigits:o,minimumFractionDigits:s,autoupdate:c},{filter:l},u,d){return r`<cosmoz-omnitable-number-range-input
			.title=${e}
			.filter=${l}
			.values=${d}
			.min=${t}
			.max=${n}
			.limits=${i}
			.locale=${a}
			.maximumFractionDigits=${o}
			.minimumFractionDigsits=${s}
			.autoupdate=${c}
			@filter-changed=${({detail:{value:e}})=>u(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>u(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return V(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Nr)})),Fr,Ir=e((()=>{a(),N(),o(),x(),Yn(),Wt(),Bt(),Fr=class extends Jn(W(M)){render(){return r`
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${U({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e=>{this.headerFocused=e.type===`focus`},content:r`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="time"
						label=${i(`From time`)}
						step=${this.filterStep}
						.value=${this._filterInput.min}
						@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="time"
						label=${i(`Until time`)}
						step=${this.filterStep}
						.value=${this._filterInput.max}
						@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
					></cosmoz-input>
				`})}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Fr)})),Lr,Z,Rr,zr,Br,Vr,Hr,Q,Ur,Wr,Gr,Kr=e((()=>{Ne(),k(),dr(),$t(),Lr=`1970-01-01`,Z=(e,t,n)=>X(typeof e==`string`&&e.length>3&&e.length<=9?$n(Lr+`T`+e):e,t,n),Rr={},zr=e=>{let t=e||``;return Rr[t]||(Rr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Rr[t]},Br=({valuePath:e,locale:t},n)=>{let r=Z(A(n,e||``));return r===void 0?``:r===null?`Invalid Date`:tr(r,zr(t))},Vr=(e,t)=>e.valuePath?Br(e,t):``,Hr=e=>{let t=Z(e);if(t==null)return null;let n=rt(t);return n&&n.slice(11,19)},Q=({valuePath:e},t)=>{if(t==null)return;let n=Hr(e==null?t:A(t,e));if(n==null)return;let r=Z($n(Lr+`T`+n));return r==null?r:G(r.getTime())},Ur=(e,t)=>n=>{let r=Q(e,n);if(r==null)return!1;let i=Q({...e,valuePath:`min`},t),a=Q({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},Wr=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},Gr=e=>{if(!(e==null||e===``))return Z(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})),qr,Jr=e((()=>{x(),F(),N(),o(),R(),Ir(),H(),Kr(),qr=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=Q({...e,valuePath:`min`},t),r=Q({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Ur(e,t)}getString(e,t){return Br(e,t)}toXlsxValue(e,t){return Vr(e,t)}getComparableValue(e,t){return Q(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(!(n==null&&r==null))return Wr(n)+`~`+Wr(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Gr(n[1]),max:Gr(n[2])}:null}renderCell(e,{item:t}){return Br(e,t)}renderEditCell(e,{item:t},n){return r`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${Br(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,locale:i,filterStep:a},{filter:o},s,c){return r`<cosmoz-omnitable-time-range-input
			.title=${e}
			.filter=${o}
			.values=${c}
			.min=${t}
			.max=${n}
			.locale=${i}
			.filterStep=${a}
			@filter-changed=${({detail:{value:e}})=>s(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>s(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return V(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,qr)})),Yr=e((()=>{fn(),kn(),Mn(),qn(),pr(),wr(),Er(),Ar(),Pr(),Jr()})),Xr,Zr=e((()=>{w(),o(),Xr=({column:e,item:t,selected:r,folded:i,group:a})=>e?(e.renderGroup??e.renderCell)(e,{item:t,selected:r,folded:i,group:a}):n,customElements.define(`cosmoz-omnitable-group-row`,T(Xr,{useShadowDOM:!1}))})),Qr,$r=e((()=>{w(),o(),Qr=e=>{let{column:t}=e;return S(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),n},customElements.define(`cosmoz-omnitable-resize-nub`,T(Qr))})),ei,ti,ni,ri,ii=e((()=>{o(),ei=r`<svg
	width="10"
	height="9"
	viewBox="0 0 10 9"
	stroke="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<line
		x1="8.53033"
		y1="0.53033"
		x2="1.53033"
		y2="7.53033"
		stroke-width="1.5"
	/>
	<line
		x1="8.46967"
		y1="7.53033"
		x2="1.46967"
		y2="0.530331"
		stroke-width="1.5"
	/>
</svg>`,ti=r`
	<svg
		width="16"
		height="6"
		viewBox="0 0 16 6"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="16" height="2" />
		<rect y="4" width="16" height="2" />
	</svg>
`,ni=r` <svg
	width="12"
	height="7"
	viewBox="0 0 12 7"
	fill="none"
	stroke="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M0.999998 0.999999L6 6L11 1"
		stroke-width="1.5"
		stroke-linejoin="round"
	/>
</svg>`,ri=r`<svg
	width="8"
	height="6"
	viewBox="0 0 8 6"
	fill="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M0.5,0.5h7c0.4,0,0.6,0.4,0.4,0.7L4.4,5.3c-0.2,0.2-0.5,0.2-0.7,0L0.1,1.2
		C-0.1,0.9,0.1,0.5,0.5,0.5z"
	/>
</svg> `})),ai,oi,si,ci,li=e((()=>{w(),Je(),ii(),ai=({column:e,on:t,descending:n,setOn:i,setDescending:a})=>{let{name:o,title:s}=e??{};return r`<button
		class="sg"
		title=${tt(s)}
		data-on=${tt(o===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(i(o),a(!1)),t===`asc`?a(!0):t===`desc`&&(i(),a(!1))}}
	>
		<span>${s}</span> ${ri}
	</button>`},oi=({columns:e,...t})=>e?.map(e=>ai({column:e,...t})),si=()=>r`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>oi({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,ci=()=>r`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>oi({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})),ui,di,fi,pi,$,mi=e((()=>{w(),Ie(),ft(),Ye(),ui=e=>(t,n,r=ot)=>{let i=Pe(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},di=e=>e==null||e===``,fi=ui((e,t,n,r)=>di(n(t))?r.delete(e):r.set(e,n(t))),pi=ui((e,t,n,r)=>Object.entries(t).map(n).forEach(([t,n])=>di(n)?r.delete(e+t):r.set(e+t,n))),$=(e,t,{suffix:n=``,read:r,write:i,multi:a}={})=>{let[o,s]=a?[pi,Ue]:[fi,Le],c=d(()=>t!=null&&s(t+n,r)!=null,[]),[l,u]=C(()=>t==null?e:s(t+n,r)??e),f=P(e=>u(r=>{let a=Oe(e,r);return t!=null&&Ce(o(t+n,a,i),null,{notify:!1}),a}),[t,n,o,i]);return S(()=>{t!=null&&(c||e!=null&&f(e))},[e,t,c,f]),[l,f]}})),hi,gi,_i,vi,yi,bi=e((()=>{w(),mi(),hi=e=>[!0,`true`,1,`yes`,`on`].includes(e),gi=e=>e===``||(e==null?void 0:hi(e)),_i=(e,t,n)=>P(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),vi=(e,t,n,r,i)=>{let[a,o]=$(n.sortOn,t,{suffix:`-sortOn`}),[s,c]=$(gi(n.descending),t,{suffix:`-descending`,read:gi}),[l,u]=$(n.groupOn,t,{suffix:`-groupOn`}),[f,p]=$(gi(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:gi}),m=d(()=>e.find(e=>e.name===a),[e,a]),h=d(()=>e.find(e=>e.name===l),[e,l]),g={groupOn:l,setGroupOn:_i(u,`groupOn`,r),groupOnDescending:f,setGroupOnDescending:_i(p,`groupOnDescending`,r),sortOn:a,setSortOn:_i(o,`sortOn`,r),descending:s,setDescending:_i(c,`descending`,r),columns:e},_=d(()=>g,Object.values(g)),v=P(e=>{o(e.sortOn),u(e.groupOn),c(e.descending),p(e.groupOnDescending)},[]);return S(()=>void(i.current=v),[]),{..._,sortAndGroup:_,groupOnColumn:h,sortOnColumn:m}},yi=le(),customElements.define(`sort-and-group-provider`,yi.Provider),customElements.define(`sort-and-group-consumer`,T(({render:e})=>e(ye(yi)),{useShadowDOM:!1}))})),xi,Si,Ci=e((()=>{w(),ae(),$r(),li(),E(),bi(),xi=({data:e,columns:t,groupOnColumn:n,filters:i,setFilterState:a,sortAndGroup:{sortOn:o,setSortOn:s,descending:c,setDescending:l}={}})=>ze(t,e=>e.name,t=>[r`<div
				class="cell ${t.headerCellClass} header-cell"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,i[t.name]??{},e=>a(t.name,e),t.source(t,e))}
				${j(!t.noSort,()=>ai({on:o,setOn:s,descending:c,setDescending:l,column:t}))}
			</div>`,r`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Si=({columns:e,settingsConfig:t,hideSelectAll:n,...i})=>{let a=ye(yi);return r`
		${j(e,e=>xi({columns:e,sortAndGroup:a,...i}))}
		${j(!n,()=>r` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,T(Si,{useShadowDOM:!1}))})),wi,Ti,Ei=e((()=>{w(),O(),wi=D`
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
`,Ti=({column:e})=>r`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,T(Ti,{styleSheets:[Se(wi)]}))})),Di,Oi=e((()=>{w(),o(),it(),Ei(),Di=({columns:e,item:t,selected:n,expanded:i,groupOnColumn:a})=>je(e,e=>r`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===a}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:i})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,T(Di,{useShadowDOM:!1}))})),ki,Ai,ji=e((()=>{w(),ae(),ki=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Ai=({columns:e,groupOnColumn:t,item:n,index:i,selected:a,expanded:o,onItemChange:s})=>ze(e,e=>e.name,e=>r`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${ki(e,{item:n,index:i,selected:a,expanded:o},s)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,T(Ai,{useShadowDOM:!1}))})),Mi,Ni,Pi=e((()=>{O(),Mi=D`
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
		box-shadow: var(--cz-shadow-xs-skeumorphic);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		transition: background-color 140ms;
		margin: 1px calc(var(--cz-spacing) * 3);
		flex: none;
	}

	.checkbox:checked {
		background: rgb(
			from var(--cz-color-bg-brand-solid) r g b / calc(alpha * 0.55)
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
		box-shadow:
			0 0 0 2px
				var(--cosmoz-omnitable-checkbox-shadow-color-hover, rgba(0, 0, 0, 1))
				inset,
			0 0 2px 6px #2021240f;
	}

	.checkbox:checked:hover {
		box-shadow: 0 0 2px 6px #2021240f;
	}

	.checkbox:indeterminate::before {
		content: '';
		position: absolute;
		width: 10px;
		height: 2px;
		left: 4px;
		top: 8px;
		background-color: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
	}
`,Ni=D`
	:host {
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
		color: var(--cz-color-text-secondary);
	}
	:host a {
		color: var(--primary-link-color, inherit);
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
		background-color: var(--cz-color-bg-quaternary);
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
		vertical-align: bottom;
	}
	cosmoz-omnitable-header-row > div[hidden] {
		display: none !important;
	}

	cosmoz-omnitable-resize-nub {
		display: inline-block;
		position: absolute;
		bottom: 2px;
		width: 7px;
		height: 30px;
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
		background-color: var(--cz-color-bg-secondary);
	}
	.tableContent:has(.tableContent-empty.spinner) {
		opacity: 0.3;
	}

	/* Empty data set styling */
	.tableContent-empty {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ccc;
	}
	.tableContent-empty.overlay {
		color: #333;
		z-index: 1;
	}
	.tableContent-empty > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-bottom: 24px;
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
		padding-bottom: 24px;
	}
	.tableContent-empty.overlay div.tableContent-empty-message {
		padding-bottom: 0;
	}
	.tableContent-empty p {
		font-size: 15px;
		color: #ddd;
		margin: 0;
	}
	.tableContent-empty h3 {
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
		background-color: var(--cz-color-bg-brand-secondary);
		@apply --cosmoz-omnitable-selected-row;
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
		box-shadow: var(--cz-shadow-xl);
		background-color: var(--cosmoz-omnitable-row-hover-color);
	}
	.groupRow:hover .checkbox:not(:checked):not(:hover),
	.itemRow:hover .checkbox:not(:checked):not(:hover) {
		box-shadow: 0 0 0 2px
			var(
				--cosmoz-omnitable-checkbox-shadow-color-not-hover,
				rgba(0, 0, 0, 0.54)
			)
			inset;
	}
	.groupRow:hover .expand:not(:hover),
	.itemRow:hover .expand:not(:hover) {
		color: rgba(0, 0, 0, 0.54);
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
		border: none;
		border-radius: 50%;
		cursor: pointer;
		background: none;
		transition: 0.25s background ease-in;
		outline: none;
		color: var(--cz-color-text-primary);
	}
	.expand svg {
		fill: currentColor;
	}
	.expand:not([aria-expanded]) svg {
		transform: scaleY(-1);
	}
	.expand:active {
		background: rgb(
			from var(--cz-color-text-primary) r g b / calc(alpha * 0.75)
		);
	}
	.expand:hover {
		color: rgb(from var(--cz-color-text-primary) r g b / calc(alpha * 0.75));
	}
	.groupRow .expand {
		margin: 8px;
	}

	.sg {
		display: inline-flex;
		width: 10px;
		cursor: pointer;
		align-items: center;
		overflow: hidden;
		flex: none;
		background: none;
		border: none;
		outline: none;
		color: inherit;
		padding: 0;
	}
	.sg span {
		display: none;
	}
	.sg svg {
		display: block;
	}
	.sg[data-on] {
		color: var(--cosmoz-omnitable-checkbox-checked-color, var(--primary-color));
	}
	.sg:not([data-on='desc']) {
		transform: scaleY(-1);
	}
	:not(:hover) > .sg:not([data-on]) {
		display: none;
	}
	.header-cell {
		display: inline-flex;
		position: relative;
	}
	.header-cell :not(.sg, cosmoz-clear-button) {
		min-width: 0;
		flex: auto;
	}

	:host([mini]) .itemRow .expand,
	:host([mini]) cosmoz-omnitable-item-expand {
		display: none;
	}

	.itemRow-minis {
		display: flex;
		justify-content: space-between;
		margin: 14px 12px 12px 12px;
		color: var(--cosmoz-omnitable-mini-color, #000);
	}

	:host([mini]) .itemRow {
		border-radius: 12px;
		border: 1px solid var(--cosmoz-omnitable-border-color, #e1e2e5);
		margin: 4px 8px;
		padding-top: 2px;
	}

	:host([mini]) .itemRow:not([selected]) {
		background: var(--cosmoz-omnitable-mini-item-background, #fdfdfd);
	}

	:host([mini]) .itemRow:hover {
		box-shadow: none;
	}

	:host([mini]) .header {
		margin: 0 8px;
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
		background: var(--cosmoz-omnitable-mini-scrollbar-thumb-bg, #aaa);
	}

	:host([mini]) .tableContent-scroller::-webkit-scrollbar-button:decrement,
	:host([mini]) .tableContent-scroller::-webkit-scrollbar-button:increment {
		width: 0px;
	}

	:host([mini]) cosmoz-omnitable-settings::part(columns) {
		display: none;
	}

	cz-spinner {
		width: 48px;
		height: 48px;
		position: absolute;
		top: 40%;
		right: 50%;
		border-color: rgba(0, 0, 0, 0.2);
		border-top-color: #000;
	}
`})),Fi,Ii,Li=e((()=>{ke(),Fi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Ii=(e,t,n)=>{let r=e.map(e=>Fi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Fi(String(n))}).join(`;`)+`
`);i.unshift(r),He(new File(i,n,{type:`text/csv;charset=utf-8`}))}})),Ri,zi,Bi=e((()=>{ke(),qe(),Ri=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},zi=(e,t,n,r)=>{let i=Ri(e,t),a=new et(n).addSheetFromData(i,r).generate();He(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})),Vi,Hi=e((()=>{Ke(),a(),o(),Li(),Bi(),Vi=({columns:e,selectedItems:t,csvFilename:n,xlsxFilename:a,xlsxSheetname:o,topPlacement:s})=>r`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!$e(t.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${i(`{count} selected item`,{count:t.length})}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		<cosmoz-dropdown-menu part="extra" slot="extra" .placement=${s}>
			<svg
				slot="button"
				width="14"
				height="18"
				viewBox="0 0 14 18"
				fill="none"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 8.5L7.00024 14.5L13 8.5"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path d="M13 17L1 17" stroke-width="2" stroke-linecap="round" />
				<path d="M7 1V13" stroke-width="2" stroke-linecap="round" />
			</svg>
			<button
				@click=${()=>Ii(e,t,n)}
			>
				${i(`Save selected items as CSV`)}
			</button>
			<button
				@click=${()=>zi(e,t,a,o)}
			>
				${i(`Save selected items as XLSX`)}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`})),Ui,Wi=e((()=>{o(),E(),Ui=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:i,data:a,columns:o,filters:s,groupOnColumn:c,setFilterState:l,settingsConfig:u,hideSelectAll:d})=>r`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${j(!d,()=>r`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!i}
						part="all"
					/>`)}
			${j(d,()=>r` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`})),Gi,Ki,qi=e((()=>{w(),Gi=_e`
	:host {
		max-width: 100%;
		overflow-x: hidden;
		padding: 0 12px;
	}
	.skeleton {
		width: 100%;
	}
	.skeleton > div {
		height: 17.5px;
		display: flex;
		padding: 11px 12px 11px 0;
	}
	.skeleton > div div:not(.handle) {
		background-image: linear-gradient(
			90deg, 
			var(--cosmoz-omnitable-skeleton-bg-from, #e0e0e0), 
			var(--cosmoz-omnitable-skeleton-bg-middle, #f5f5f5), 
			var(--cosmoz-omnitable-skeleton-bg-to, #e0e0e0)
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
`,Ki=({settingsConfig:e})=>{let{columns:t,collapsed:n}=e,i=t.filter(e=>!n.some(t=>t.name===e.name));return r`<div class="skeleton">
		${Array.from({length:5},()=>r`<div>
					<div class="checkbox"></div>
					${i.map(e=>r`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,T(Ki,{styleSheets:[Gi]}))})),Ji,Yi=e((()=>{qi(),a(),o(),E(),Ge(),Ji=(e,t)=>{let{settingsConfig:n}=e,{processedItems:a,dataIsValid:o,filterIsTooStrict:s,loading:c,displayEmptyGroups:l,compareItemsFn:u,setSelectedItems:d,renderItem:f,renderGroup:p,error:m}=t;return r`${j(!c&&!o&&!m,()=>r`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${Te({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${i(`Working set empty`)}</h3>
							<p>${i(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${j(s,()=>r`<div class="tableContent-empty">
					${Te({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div>
						<h3>${i(`Filter too strict`)}</h3>
						<p>${i(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${j(c&&!a.length,()=>r`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${j(c&&a.length,()=>r`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${j(m,()=>r`<div class="tableContent-empty overlay">
					${Qe({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${i(`Error loading data`)}</h3>
						<p>${m.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${a}
				@selected-items-changed=${e=>d(e.detail.value)}
				.displayEmptyGroups=${l}
				.compareItemsFn=${u}
				.renderItem=${f}
				.renderGroup=${p}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})),Xi,Zi,Qi=e((()=>{O(),Pi(),Xi=D`
	:host {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		max-height: var(--ot-height, 60vh);
		outline: none;
		min-width: 270px;
		background-color: var(--cosmoz-omnitable-settings-bg-color, #fff);
	}

	.headline {
		font-weight: 500;
		font-size: 13px;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
		text-transform: uppercase;
		line-height: 0.95;
		padding: 10px 14px;
		display: flex;
		align-items: center;
	}
	.close {
		border: none;
		background: none;
		cursor: pointer;
		padding: 2.5px 6px;
		margin-left: auto;
	}

	.contents {
		overflow-y: auto;
		scrollbar-width: 2px;
		scrollbar-gutter: stable;
		text-transform: uppercase;
		font-size: 12px;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
	}
	.contents::-webkit-scrollbar {
		width: 2px;
	}
	.contents::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.5);
	}
	.contents::-webkit-scrollbar-track-piece:start,
	.contents::-webkit-scrollbar-track-piece:end {
		background: transparent;
	}

	.heading {
		box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);
		font-weight: 400;
		font-size: 13px;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
		line-height: 0.95;
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
			inset 0px -1px 0px rgba(0, 0, 0, 0.15),
			inset 0px 1px 0px rgba(0, 0, 0, 0.15);
	}

	.list {
		flex: 1;
		padding: 2px 14px;
		min-width: 232px;
	}
	.item {
		display: flex;
		align-items: center;
		background: var(
			--cosmoz-omnitable-settings-item-bg-color,
			var(--cz-surface-light, #fff)
		);
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
		color: var(
			--cosmoz-omnitable-settings-pull-color,
			var(--cz-color-muted, #c4c4c4)
		);
	}
	.title {
		flex: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		color: var(
			--cosmoz-omnitable-settings-title-color,
			var(--cz-text-color, inherit)
		);
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
		box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.15);
	}
	.button {
		border: none;
		cursor: pointer;
		background: var(--cosmoz-button-bg-color, #101010);
		color: var(--cosmoz-button-color, #fff);
		font-family: inherit;
		font-size: 13px;
		font-weight: 600;
		line-height: 26px;
		border-radius: 4px;
		padding: 8px;
		flex: 1;
	}
	.button:not(.reset):hover {
		background: var(--cz-action-button-hover-bg, #3a3f44);
	}
	.button[disabled] {
		opacity: 0.2;
		pointer-events: none;
	}
	.reset {
		background: transparent;
		color: inherit;
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
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 6px;
		font-size: 12px;
		text-transform: uppercase;
		line-height: 1;
		text-align: left;
		padding: 6px 12px;
		background: transparent;
		cursor: pointer;
		display: flex;
		align-items: left;
		justify-content: auto;
	}
	.sg span {
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.sg[data-on] {
		background: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
	}
	.sg svg {
		margin-left: 4px;
		flex: none;
		vertical-align: middle;
	}
	.sg:not([data-on]) svg {
		display: none;
	}
	.sg:not([data-on='desc']) svg {
		transform: scaleY(-1);
	}
`,Zi=D`
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
	}
	cosmoz-dropdown::part(anchor) {
		display: inline-block;
	}
	.badge {
		position: absolute;
		top: 1px;
		right: -4px;
		background-color: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
		width: 8px;
		height: 8px;
		border-radius: 100%;
	}
	.headerDots {
		align-items: center;
		color: var(--cosmoz-input-color);
		display: flex;
		font-size: 20px;
		height: 42px;
		justify-content: center;
		margin-left: 12px;
		min-width: 30px;
		transform: rotate(90deg);
	}
	cosmoz-omnitable-settings-ui {
		display: flex;
	}
`})),$i,ea,ta=e((()=>{w(),p(),$i=e=>{let t=parseInt(e,10);return isFinite(t)?t:void 0},ea=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i}=t,a=ct({collapsed:i,settings:n.columns,setSettings:P(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:P(e=>{e.target.closest(`.pull`)&&(a.handle=e.currentTarget)},[a]),onDragStart:P(e=>{let{target:t}=e,n=$i(t.dataset.index);if(!a.handle?.contains(t)||n==null)return e.preventDefault();a.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,n),e.dataTransfer.setData(`text/plain`,n),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>e.target.classList.remove(`drag`),{once:!0})},[a]),onDragEnter:P(e=>{let t=e.currentTarget;t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:P(e=>{e.preventDefault(),e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:P(e=>{let t=e.currentTarget;t.contains(e.relatedTarget)||t.classList.remove(`dragover`)},[]),onDrop:P(e=>{let t=$i(e.dataTransfer.getData(`omnitable/sort-index`)),n=$i(e.currentTarget.dataset.index),{settings:r,setSettings:i}=a;e.currentTarget.classList.remove(`dragover`),e.preventDefault();let o=r.slice();o.splice(n+(t>=n?0:-1),0,o.splice(t,1)[0]),i(o)},[a]),onToggle:P(e=>{let{settings:t,setSettings:n}=a,r=t.map(e=>({...e,disabled:e.disabled||a.collapsed?.some(t=>t.name===e.name)})),i=$i(e.target.closest(`[data-index]`)?.dataset.index);r.splice(i,1,{...t[i],disabled:!e.target.checked,priority:e.target.checked?t.reduce((e,t)=>Math.max(e,t.priority),0)+1:t[i].priority}),n(r)},[a])}}})),na,ra,ia,aa,oa=e((()=>{nt(),_(),O(),Ke(),w(),a(),E(),ii(),li(),Qi(),ta(),na=[h({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...he],ra=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:i,onDrop:a,onDown:o,onToggle:s,collapsed:c,filters:l})=>(u,d)=>{let f=!!c?.find(e=>e.name===u.name),p=!u.disabled&&!f;return r` <div
			class="item"
			data-index=${d}
			@mousedown=${o}
			draggable="true"
			@dragstart=${e}
			@dragenter=${t}
			@dragover=${n}
			@dragleave=${i}
			@drop=${a}
		>
			<button class="pull">${ti}</button>
			<label class="title" ?has-filter=${!$e(l[u.name]?.filter)}
				>${u.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${p}
				@click=${s}
				.indeterminate=${f}
			/>
		</div>`},ia=e=>{let{settings:t,settingsId:n,onSave:a,onReset:o,hasChanges:s,opened:c,setOpened:l,...u}=ea(e);return r` <div class="headline">
			${i(`Sort and filter`)}
			<button
				class="close"
				@click=${e=>{let t=e.currentTarget;t?.focus(),t?.blur()}}
			>
				${ei}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${c.columns}
				@click=${()=>l(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${i(`Columns`)} ${ni}
			</div>
			<cosmoz-collapse
				?opened="${c.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(ra(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.sort}
				@click=${()=>l(e=>({...e,sort:!e.sort}))}
			>
				${i(`Sort on`)} ${ni}
			</div>
			<cosmoz-collapse ?opened=${c.sort}> ${ci()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.group}
				@click=${()=>l(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${i(`Group on`)} ${ni}
			</div>
			<cosmoz-collapse ?opened=${c.group} part="groups groups-heading"
				>${si()}</cosmoz-collapse
			>
		</div>

		${j(n,()=>r`<div class="buttons">
					<button
						class="button reset"
						@click=${o}
						?disabled=${!s}
					>
						${i(`Reset`)}
					</button>
					<button class="button" @click=${a} ?disabled=${!s}>
						${i(`Save`)}
					</button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,T(ia,{styleSheets:[Se(Xi)]})),aa=({config:e,newLayout:t})=>r`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${na}"
	>
		<div title="${i(`Sort and filter`)}" slot="button">
			${j(t,()=>r`<div class="headerDots">...</div>`,()=>r` <svg viewBox="0 0 24 24" width="24" fill="currentColor">
						<circle cx="10" cy="18" r="2"></circle>
						<circle cx="10" cy="12" r="2"></circle>
						<circle cx="10" cy="6" r="2"></circle>
					</svg>`)}
			${j(e?.badge,()=>r`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,T(aa,{styleSheets:[Se(Zi)]}))})),sa,ca,la,ua,da,fa=e((()=>{me(),sa=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],ca=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,la=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(ca(t.name))),i=e.filter(e=>e.name!=null&&!t.some(ca(e.name))&&!n.some(ca(e.name))),a=n.filter(e=>!t.some(ca(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},ua=(e,t)=>({...t,...m(Array.from(sa))(e),columns:e.columns?.map(m([`name`,`priority`,`width`,`flex`,`disabled`]))}),da=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(sa.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?m(Array.from(sa))(n):{},...t,columns:la(e,t?.columns,n?.columns)})})),pa,ma=e((()=>{pa=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(t)try{let n=localStorage.getItem(e+t);return n==null?void 0:JSON.parse(n)}catch(e){console.error(e)}}})})),ha,ga,_a=e((()=>{w(),ma(),ha=le(pa),ga=()=>{let e=ye(ha);return d(()=>e(),[e])}})),va=e((()=>{_a()})),ya,ba=e((()=>{w(),fa(),va(),ya=(e,t,n,r)=>{let[i,a]=C(),{read:o,write:s}=ga();return S(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:P(async()=>{if(!e)return;let r=ua(t,i);await s(e,r),n(),a(r)},[t,i]),onReset:P(async t=>{n(),t.shiftKey&&(await s(e),a()),r?.()},[r]),hasChanges:t!=null}}})),xa,Sa=e((()=>{w(),ba(),fa(),B(),xa=({settingsId:e,host:t})=>{let n=d(()=>Object.fromEntries(sa.map(e=>[e,t[e]])),[]),r=y(),i=P(()=>{r.current?.(n)},[n]),[a,o]=C(),[s,c]=C({columns:!0,sort:!0}),{savedSettings:l,...u}=ya(e,a,o,i),{enabledColumns:f}=t,p=Nt(t,{enabledColumns:f}),m=d(()=>da({columns:p,settings:a,savedSettings:l,initial:n}),[p,a,l]),h=d(()=>m.columns.map(e=>p.find(t=>t.name===e.name)).filter(Boolean),[p,...m.columns.map(e=>e.name)]);return{...u,opened:s,setOpened:c,settings:m,columns:h,setSettings:o,resetRef:r}}})),Ca=e((()=>{oa(),Sa()})),wa,Ta,Ea=e((()=>{wa=e=>Number.isFinite(e)?e:0,Ta=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=wa(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];if(u>i+(a>=0?o*d:i*a/r)){s+=i,c+=u,l+=d,n[t]=u;continue}if(d===0){s+=i,c+=i,n[t]=i;continue}}r-=s,a=t-c-r,i-=l,o=wa(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t];n[t]=i+(a>=0?o*s:i*a/r)}return n}})),Da,Oa,ka=e((()=>{Da=Symbol(`index`),Oa=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})),Aa,ja,Ma,Na=e((()=>{Ea(),ka(),Aa=(e,t)=>{let n=Oa(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${Math.floor(t)}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`;return t.map((t,o)=>{let s=e[o];if(s==null||s===0)return a(t.name);let c=r(t.name,s);return o===n?`${c}\n${i(t.name)}`:c}).join(`
`)},ja=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return ja(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Ta(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Ma=(e,t)=>e.length===0?`.cell {display: none;}`:Aa(e,t)})),Pa,Fa=e((()=>{w(),Pa=({host:e,canvasWidth:t,layout:n,setSettings:r})=>{let i=y();i.current=e=>r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}}),S(()=>{let t=e=>i.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})),Ia,La,Ra=e((()=>{w(),Ia=88,La=(e,t)=>S(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&requestAnimationFrame(()=>t(e.contentRect?.width-Ia))});return n.observe(e),()=>n.unobserve(e)},[])})),za,Ba=e((()=>{w(),Ra(),za=e=>{let[t,n]=C(()=>e.getBoundingClientRect().width-Ia);return La(e,n),t}})),Va,Ha,Ua,Wa=e((()=>{w(),p(),ft(),Va=(e,t)=>{let n=d(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);S(()=>{n.start()},t),S(()=>()=>n.stop(),[])},Ha=(e=0,t=0)=>Math.abs(e-t)<.1,Ua=(e,t=1.9,n=ut)=>{let r=ct({target:e});Va(P(()=>{if(!r.tween)return r.tween=r.target,n(r.tween),!0;if(r.target.every((e,t)=>r.tween[t]===e))return n(r.tween),!0;r.tween=r.target.map((e,n)=>Ha(r.tween[n],e)?e:(r.tween[n]??0)+((e??0)-(r.tween[n]??0))/t||0),n(r.tween)},[]),[e])}})),Ga,Ka=e((()=>{w(),Na(),Ga=({canvasWidth:e,groupOnColumn:t,config:n,miniColumn:r})=>d(()=>{if(!Array.isArray(n)||e==null||e===0)return[];let i=n.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>r?{...e,hidden:r.name!==e.name}:e).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return ja(i,e,i.length)},[e,t,n])})),qa,Ja=e((()=>{w(),qa=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=d(()=>t<=r,[t,r]),[a,...o]=d(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i])??[],s=!!a;return S(()=>{e.toggleAttribute(`mini`,s)},[s]),{isMini:s&&i,miniColumn:a,miniColumns:o}}})),Ya,Xa,Za=e((()=>{w(),Na(),Fa(),Ba(),Wa(),Ka(),Ja(),p(),Ya=e=>{let t=d(()=>new CSSStyleSheet,[]);return S(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},Xa=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:a})=>{let o=za(e),{isMini:s,miniColumn:c,miniColumns:l}=qa({host:e,canvasWidth:o,columns:t}),{groupOnColumn:u}=a,f=Ga({canvasWidth:o,groupOnColumn:u,miniColumn:c,config:n.columns}),p=Ya(e),m=d(()=>n.columns.reduce((e,n,r)=>f[r]!=null||n.name===u?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,f]),h=ct({columns:n.columns});return Ua(f,i,e=>{let t=Ma(e,h.columns);p.replace(t)}),Pa({host:e,canvasWidth:o,layout:f,setSettings:e=>r(e(n))}),{isMini:s,collapsedColumns:m,miniColumns:l}}})),Qa,$a=e((()=>{Qa=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})),eo,to=e((()=>{w(),eo=({host:e,selectedItems:t,data:n,sortAndGroupOptions:r,collapsedColumns:i,settings:a,filterFunctions:o,settingS:s,filters:c,...l})=>{let u=n&&n.length>0&&t.length===n.length,f=t=>{t.target.checked?e.shadowRoot.querySelector(`#groupedList`).selectAll():e.shadowRoot.querySelector(`#groupedList`).deselectAll()},{groupOnColumn:p}=r,m=d(()=>[p,...i,...a.columns.filter(e=>e.disabled)].some(e=>e&&Object.keys(o).includes(e.name)),[o,a,i]),h=d(()=>({...s,collapsed:i,badge:m,filters:c}),[s,i,m,c]);return S(()=>{let t=e.shadowRoot.querySelector(`#tableContent`),n=new ResizeObserver(t=>requestAnimationFrame(()=>{e.style.setProperty(`--ot-height`,t[0]?.contentRect.height+`px`)}));return n.observe(t),()=>n.unobserve(t)},[]),{allSelected:u,onAllCheckboxChange:f,data:n,settingsConfig:h,filters:c,groupOnColumn:p,sortAndGroup:r.sortAndGroup,...l}}})),no,ro,io,ao,oo,so,co=e((()=>{w(),E(),Ke(),ka(),H(),no=r`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,ro=e=>e?`groupRow groupRow-folded`:`groupRow`,io=({item:e,index:t})=>n=>j(n?.length>0,()=>r`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>r`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`),ao=({columns:e,collapsedColumns:t,miniColumns:n,onItemClick:i,onCheckboxChange:a,dataIsValid:o,groupOnColumn:s,onItemChange:c,rowPartFn:l})=>(u,d,{selected:f,expanded:p,toggleCollapse:m})=>r`
		<div
			?selected=${f}
			part="${[`itemRow`,`itemRow-${u[Da]}`,l?.(u,d)].filter(Boolean).join(` `)}"
			.dataIndex=${u[Da]}
			.dataItem=${u}
			class="itemRow"
			@click=${i}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${f}
					.dataItem=${u}
					@input=${a}
					?disabled=${!o}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${e}
					.index=${d}
					.selected=${f}
					.expanded=${p}
					.item=${u}
					.groupOnColumn=${s}
					.onItemChange=${c}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${$e(t.length)}"
					?aria-expanded="${p}"
					@click="${m}"
				>
					${no}
				</button>
			</div>
			${io({item:u,index:d})(n)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${t}
			.item=${u}
			.index=${d}
			?selected=${f}
			?expanded=${p}
			.groupOnColumn=${s}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,oo=({onCheckboxChange:e,dataIsValid:t,groupOnColumn:n})=>(i,a,{selected:o,folded:s,toggleFold:c})=>r` <div
			class="${ro(s)}"
			part="groupRow groupRow-${i[Da]}"
		>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${o}
				.dataItem=${i}
				@input=${e}
				?disabled=${!t}
			/>
			<h3 class="groupRow-label">
				<div><span>${n?.title}</span>: &nbsp;</div>
				<cosmoz-omnitable-group-row
					.column=${n}
					.item=${i.items?.[0]}
					.selected=${o}
					.folded=${s}
					.group=${i}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${i.items.length}</div>
			<button class="expand" ?aria-expanded="${s}" @click=${c}>
				${no}
			</button>
		</div>`,so=({host:e,error:t,dataIsValid:n,processedItems:r,columns:i,collapsedColumns:a,miniColumns:o,sortAndGroupOptions:s,rowPartFn:c,...l})=>{let{loading:u=!1,displayEmptyGroups:f=!1,compareItemsFn:p}=e,m=y({shiftKey:!1,ctrlKey:!1}),h=P(t=>{let n=t.target.dataItem,r=t.target.checked;m.current.shiftKey?e.shadowRoot.querySelector(`#groupedList`).toggleSelectTo(n,r):m.current.ctrlKey?(t.target.checked=!0,e.shadowRoot.querySelector(`#groupedList`).selectOnly(n)):e.shadowRoot.querySelector(`#groupedList`).toggleSelect(n,r),t.preventDefault(),t.stopPropagation()},[]);S(()=>{let e=({shiftKey:e,ctrlKey:t})=>{m.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let g=P(t=>{let n=t.composedPath();n.slice(0,n.indexOf(t.currentTarget)).find(e=>e.matches?.(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:t.currentTarget.dataItem,index:t.currentTarget.dataIndex}}))},[]),{groupOnColumn:_}=s,v=P((t,n)=>r=>Ft(e,t,n,r),[]);return{...l,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:u,compareItemsFn:p,displayEmptyGroups:f,error:t,renderItem:d(()=>ao({columns:i,collapsedColumns:a,miniColumns:o,onItemClick:g,onCheckboxChange:h,dataIsValid:n,groupOnColumn:_,onItemChange:v,rowPartFn:c}),[i,a,g,h,n,_,v,c]),renderGroup:d(()=>oo({onCheckboxChange:h,dataIsValid:n,groupOnColumn:_}),[h,n,_])}}})),lo,uo=e((()=>{lo=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})),fo,po,mo,ho,go,_o,vo=e((()=>{w(),ft(),uo(),B(),mi(),ka(),fo=(e,t)=>(n,r)=>lo(e(n),e(r))*(t?-1:1),po=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),mo=(e,t)=>{!e||!t||Object.entries(t).forEach(([t,n])=>{e[z].__ownChange=!0,e[z][t]=n,e[z].__ownChange=!1,e[z].dispatchEvent(new CustomEvent(`${po(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},ho=(e,t)=>Object.assign(e,{[Da]:t}),go=Symbol(`unparsed`),_o=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:o,groupOnDescending:s,sortOnColumn:c,descending:l}=r,u=P(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),f=P(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[go]:n}];let i={filter:r.deserializeFilter(r,n)};return mo(r,i),[e,i]},[t]),[p,m]=$({},n,{multi:!0,suffix:`-filter--`,write:u,read:f}),h=P((e,n)=>m(r=>{let i=Oe(n,r[e]);return mo(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,m]),g=d(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,p[e.name]?.filter)]).filter(([,e])=>!!e)),[t,...d(()=>Object.values(p).map(e=>e.filter),[p])]),_=d(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(g).length===0||a?e.slice():e.filter(e=>Object.values(g).every(t=>t(e))),[e,g,a]),v=d(()=>{if(!i&&!o&&c!=null&&c.sortOn!=null)return _.slice().sort(fo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l));if(o!=null&&o.groupOn!=null){let e=_.reduce((e,t)=>{let n=o.getComparableValue({...o,valuePath:o.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(fo(e=>o.getComparableValue({...o,valuePath:o.groupOn},e.items[0]),s)),!c||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(fo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l)),e))}return _},[_,o,s,c,l,i]),y=d(()=>{let e=0,t=0,n=[];return v.forEach(r=>{if(Array.isArray(r.items)){ho(r,t++),r.items.forEach(t=>{ho(t,e++),n.push(t)});return}return ho(r,e++),n.push(r)},[]),n},[v]);return S(()=>{m(e=>Object.values(e).some(e=>e[go]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>t[go]==null?[e,t]:f([e,t[go]]))):e)},[f]),{processedItems:v,visibleData:y,filters:p,filterFunctions:g,setFilterState:h}}})),yo,bo,xo=e((()=>{re(),w(),ge(),yo=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(t){let n=[];for(let r=t.length-1;r>=0;--r){let i=e.removeItem(t[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);if(i>-1)return n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},bo=({host:e,visibleData:t,filters:n,...r})=>{let{setFilterState:i}=r,a=d(()=>yo(e),[]);Ze(r,Object.values(r)),Ze(a,Object.values(a)),S(()=>{let t=e=>i(e.detail.name,t=>({...t,...e.detail.state}));return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),b(`visibleData`,t),b(`sortedFilteredGroupedItems`,r.sortedFilteredGroupedItems),b(`selectedItems`,r.selectedItems),b(`sortOn`,r.sortOn),b(`descending`,r.descending),b(`isMini`,r.isMini);let o=d(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);b(`filters`,o,Object.values(o))}})),So,Co=e((()=>{w(),Ca(),Za(),$a(),to(),co(),vo(),xo(),bi(),So=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=xa({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m}=u,h=vi(p,t,d,f,m),{processedItems:g,visibleData:_,filters:v,setFilterState:y,filterFunctions:b}=_o({data:r,columns:p,hashParam:t,sortAndGroupOptions:h,noLocalSort:o,noLocalFilter:s}),{isMini:x,collapsedColumns:S,miniColumns:ee}=Xa({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:h}),te=r&&Array.isArray(r)&&r.length>0,[ne,re]=C([]);return bo({host:e,visibleData:_,sortedFilteredGroupedItems:g,columns:p,filters:v,setFilterState:y,selectedItems:ne,isMini:x,...h}),{header:eo({host:e,selectedItems:ne,sortAndGroupOptions:h,dataIsValid:te,data:r,columns:p,filters:v,collapsedColumns:S,settings:d,filterFunctions:b,settingS:u,setFilterState:y,hideSelectAll:e.hideSelectAll===!0}),list:so({host:e,error:c,dataIsValid:te,processedItems:g,setSelectedItems:re,columns:p,collapsedColumns:S,miniColumns:ee,sortAndGroupOptions:h,rowPartFn:l}),footer:Qa({host:e,selectedItems:ne,columns:p})}}})),wo=e((()=>{o(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||t(this._renderFn(this._item,this._index),this)}})})),To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po=e((()=>{To={group:Symbol(`group`)},Eo=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),Do=(e,t)=>!!Eo(e,t).expanded,Oo=(e,t)=>!!Eo(e,t).folded,ko=e=>e?e.items instanceof Array:!1,Ao=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},jo=(e,t,n)=>{if(Array.isArray(e))return Ao(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?Eo(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[To.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},Mo=(e,...t)=>typeof e==`function`?e(...t):e,No=(e,t)=>e===t})),Fo,Io=e((()=>{w(),Po(),Fo=()=>{let[e,t]=C(()=>[new WeakMap]);return{setItemState:P((e,n)=>t(([t])=>{let r=Eo(e,t);return Object.assign(r,Mo(n,r)),[t]}),[]),state:e[0],signal:e}}})),Lo,Ro=e((()=>{w(),Io(),Po(),Lo=()=>{let{setItemState:e,state:t,signal:n}=Fo();return{state:t,signal:n,toggleFold:P((t,n)=>{ko(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:P((t,n)=>{ko(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})),zo,Bo=e((()=>{w(),Po(),zo=({initial:e,compareItemsFn:t,data:n,flatData:r})=>{let[i,a]=C(e),[o,s]=C(),c=P(e=>i.includes(e),[i]),l=P(e=>e?.items?.every(c)??!1,[c]),u=P(e=>c(e)||l(e),[c,l]),d=P(e=>{let t=e.items??[e];a(e=>[...e,...t.filter(t=>!e.includes(t))]),s(e)},[]),f=P(e=>{let t=e.items??[e];a(e=>e.filter(e=>!t.includes(e))),s(e)},[]),p=P(e=>{a(e.items?.slice()||[e]),s(e)},[]),m=P(()=>{a(n.flatMap(e=>e.items||e)),s(void 0)},[n]),h=P(()=>{a([]),s(void 0)},[]),g=P((e,t=!u(e))=>t?d(e):f(e),[u]),_=P((e,n)=>{if(!r)return;let i=o?r.findIndex(e=>t(e,o)):-1;if(i<0)return g(e,n);let[a,c]=[i,r.indexOf(e)].sort((e,t)=>e-t);r.slice(a,c+1).forEach((e,t,r)=>{t>0&&t<r.length-1&&ko(e)||g(e,n)}),s(e)},[r,t,g]);return S(()=>a(e=>e.length>0&&r?r.filter(n=>e.find(e=>t(n,e))):e),[r]),{selectedItems:i,isItemSelected:c,isGroupSelected:l,isSelected:u,select:d,deselect:f,selectOnly:p,selectAll:m,deselectAll:h,toggleSelect:g,toggleSelectTo:_}}})),Vo,Ho,Uo,Wo=e((()=>{re(),ge(),w(),o(),wo(),Ro(),Bo(),Po(),Ve(),Vo={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Ho=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=No}=e,{toggleFold:o,toggleCollapse:s,state:c,signal:l}=Lo(),u=d(()=>jo(t,i,c),[t,i,l]),{selectedItems:f,isItemSelected:p,isGroupSelected:m,isSelected:h,select:g,deselect:_,selectOnly:v,selectAll:y,deselectAll:x,toggleSelect:S,toggleSelectTo:ee}=zo({initial:[],compareItemsFn:a,data:t,flatData:u}),te=P((e,t)=>Array.isArray(e.items)?r(e,t,{selected:m(e),folded:Oo(e,c),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:f.includes(e),expanded:Do(e,c),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>s(e)}),[n,r,f,S,l]);de(()=>{Object.assign(e.style,Vo.host)},[]),b(`selectedItems`,f);let ne={toggleFold:o,toggleCollapse:s,isItemSelected:p,isGroupSelected:m,isSelected:h,select:g,deselect:_,selectOnly:v,selectAll:y,deselectAll:x,toggleSelect:S,toggleSelectTo:ee};return Ze(ne,Object.values(ne)),{renderRow:te,flatData:u}},Uo=({renderRow:e,flatData:t})=>c({items:t,renderItem:(t,n)=>r`<cosmoz-grouped-list-row
				.item=${t}
				.index=${n}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})),Go,Ko=e((()=>{Wo(),w(),Go=e=>Uo(Ho(e)),customElements.define(`cosmoz-grouped-list`,T(Go,{useShadowDOM:!1}))})),qo=e((()=>{Ko()})),Jo,Yo,Xo,Zo=e((()=>{Ae(),Dt(),Yr(),Zr(),Ci(),Oi(),ji(),ge(),w(),Fe(),o(),Be(),Pi(),Hi(),Wi(),Yi(),Co(),qo(),Jo=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,Yo=e=>{let{header:t,list:n,footer:i}=So(e);return r`
		<style>
			${l([],()=>Jo(Ni))}
		</style>

		<div class="mainContainer">
			${Ui(t)}
			<div class="tableContent" id="tableContent">
				${Ji(t,n)}
			</div>
			${Vi(i)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,class extends T(Yo,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`loading`,`mini-breakpoint`]}){connectedCallback(){super.connectedCallback(),be(this,`selectedItems`,[]),be(this,`visibleData`,[]),be(this,`sortedFilteredGroupedItems`,[])}}),Xo=`
	<slot name="actions" slot="actions"></slot>
`,r(Object.assign([Xo],{raw:[Xo]})),Me(Object.assign([Xo],{raw:[Xo]}))}));export{Zo as t};