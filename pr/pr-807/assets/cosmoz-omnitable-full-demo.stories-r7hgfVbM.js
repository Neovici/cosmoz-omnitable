import{x as m,B as Se,E as mt}from"./iframe-CIYCyO8Y.js";import{t as K,c as L,g as C,P as A,u as M,a as pt,m as gt,s as Lt,D as Tt,b as Rt,e as Mt,i as fe,h as Fe,o as J,d as _,f as Nt,j as be,p as me,n as D,k as jt,l as xe,q as Pt,r as Bt,v as Gt,T as Ht,w as E,x as Wt,y as qt,z as Xt,A as $,B as Ut,C as Kt,E as ht,F as Oe,G as I,H as ft,I as De,J as Jt,K as bt,N as Qt,L as Ve,M as Yt,O as Ae,Q as Zt,R as en,S as ke,U as Ee,V as tn,W as _e,X as P,Y as nn,Z as ve,_ as rn}from"./cosmoz-collapse-BW436bxZ.js";const on=K`
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
`,an=()=>m`
	<style>
		${on}
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
`;customElements.define("cosmoz-clear-button",L(an));const U=({valuePath:n},e)=>C(e,n),ln=U,sn=U,un=({valuePath:n},e)=>t=>{const r=C(t,n);return r==null?!1:r.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},cn=(n,e)=>e===""||e==null?null:e,N=n=>class extends n{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:"right"},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return U(e,t)}toXlsxValue(e,t){return ln(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return cn(e,t)}deserializeFilter(e,t){return t==null?null:typeof t=="string"?window.decodeURIComponent(t):t}getComparableValue(e,t){return sn(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,r){super._propertiesChanged(e,t,r),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},dn=n=>e=>n(t=>{if(t.inputValue===void 0&&e.target.value==="")return t;clearTimeout(t.t);const r=setTimeout(()=>n(o=>({...o,filter:o.inputValue})),1e3);return{...t,inputValue:e.target.value,t:r}}),mn=n=>()=>n(e=>({...e,filter:e.inputValue})),pn=n=>e=>{e.keyCode===13&&(e.preventDefault(),n(t=>({...t,filter:t.inputValue})))},gn=n=>e=>n(t=>({...t,headerFocused:e.detail.value})),hn=n=>()=>n(e=>({...e,filter:null,inputValue:null})),fn=n=>n!=null&&n!=="";class bn extends N(A){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===""))return un(e,t)}renderCell(e,{item:t}){return m`<span class="default-column">${U(e,t)}</span>`}renderEditCell(e,{item:t},r){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${U(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:r,headerFocused:o},i){return m`<cosmoz-input
			label=${e.title}
			.value=${r??t}
			@value-changed=${dn(i)}
			focused=${o}
			@focused-changed=${gn(i)}
			@keydown=${pn(i)}
			@blur=${mn(i)}
		>
			<cosmoz-clear-button
				suffix
				slot="suffix"
				?visible=${fn(t)}
				light
				@click=${hn(i)}
			></cosmoz-clear-button>
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",bn);const B=Symbol("column"),xn=n=>{let e=!0;const t=n.map(r=>r.name);return n.forEach(r=>{r.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",r))}),n.forEach(r=>{t.indexOf(r.name)!==t.lastIndexOf(r.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",r))}),e},yn=n=>{const e=n.valuePath??n.name;return{name:n.name,title:n.title,valuePath:e,groupOn:n.groupOn??e,sortOn:n.sortOn??e,minWidth:n.minWidth,width:n.width,flex:n.flex,priority:n.priority,getString:n.getString,getComparableValue:n.getComparableValue,serializeFilter:n.serializeFilter,deserializeFilter:n.deserializeFilter,toXlsxValue:n.toXlsxValue,renderHeader:n.renderHeader,renderCell:n.renderCell,renderEditCell:n.renderEditCell,renderGroup:n.renderGroup,cellTitleFn:n.cellTitleFn,headerTitleFn:n.headerTitleFn,getFilterFn:n.getFilterFn,headerCellClass:n.headerCellClass,cellClass:n.cellClass,editable:n.editable,values:n.values,source:gt(n.computeSource),noLocalFilter:n.noLocalFilter,mini:n.mini,renderMini:n.renderMini,loading:n.loading,externalValues:n.externalValues,computeSource:n.computeSource,trueLabel:n.trueLabel,falseLabel:n.falseLabel,valueProperty:n.valueProperty,textProperty:n.textProperty,emptyLabel:n.emptyLabel,emptyValue:n.emptyValue,min:n.min,max:n.max,locale:n.locale,autoupdate:n.autoupdate,maximumFractionDigits:n.maximumFractionDigits,minimumFractionDigits:n.minimumFractionDigits,currency:n.currency,rates:n.rates,autodetect:n.autodetect,ownerTree:n.ownerTree,keyProperty:n.keyProperty,...n.getConfig?.(n),[B]:n}},vn=n=>n.isOmnitableColumn&&!n.hidden,$n=n=>{const e=n.assignedElements({flatten:!0}).filter(vn);return xn(e)?e:[]},wn=(n,e)=>(Array.isArray(e)?n.filter(r=>e.includes(r.name)):n.filter(r=>!r.disabled)).map(yn),zn=(n,{enabledColumns:e})=>{const[t,r]=M([]);return pt(()=>{let o;const i=n.shadowRoot.querySelector("#columnsSlot"),a=()=>{r(wn($n(i),e))},l=()=>{cancelAnimationFrame(o),o=requestAnimationFrame(a)};return l(),i.addEventListener("slotchange",l),n.addEventListener("cosmoz-column-prop-changed",l),()=>{i.removeEventListener("slotchange",l),n.removeEventListener("cosmoz-column-prop-changed",l),cancelAnimationFrame(o)}},[e]),t},xt=(n,e)=>Array.isArray(n)?n.map(t=>C(t,e)).filter((t,r,o)=>t!=null&&o.indexOf(t)===r):void 0,Z=({externalValues:n,values:e,valuePath:t},r)=>{if(n)return n;if(typeof e=="function")return e;if(t!==void 0)return xt(r,t)},Cn=(n,e,t,r)=>{const{valuePath:o}=e,i=o!==void 0?C(t,o):void 0;if(r===i)return;o!==void 0&&Lt(t,o,r);const a={item:t,valuePath:o,value:r,oldValue:i,column:e[B]};n.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:a}))},yt=n=>typeof n.close=="function"?n:yt(n.parentElement),Le=n=>class extends n{static get properties(){return{filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,t,r){if(e==null||e==="")return;const o=typeof e=="number"?e:Number(e);if(Number.isNaN(o))return;if(r==null||t==null)return o;const i=this.toNumber(t);return i==null?o:r(o,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let r=e;return t!=null&&(r=this.get(t,e)),this.toValue(r)}renderValue(){}getInputString(e,t=this.valuePath){const r=this.toValue(this.get(t,e));return this._toInputString(r)}_computeRange(e){const t=e.base,r=Array.isArray(t)&&t.length&&t.map(o=>this.toValue(o)).filter(o=>o!=null);return!r||r.length<1?{min:null,max:null}:r.reduce((o,i)=>({min:this.toValue(i,o.min,Math.min),max:this.toValue(i,o.max,Math.max)}),{})}_computeLimit(e,t,r,o){if(!e)return;const i=t.base,a=this.toValue(r),l=this.toValue(o),s=a??this.toValue(e.min),u=l??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(u,this._fromInputString(i.max,"max"),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,"min"),Math.max),toMax:u}}_computeFilterText(e){if(e.base==null)return;const t=e.base,r=this.toValue(t.min),o=this.toValue(t.max),i=[];return r!=null&&i.push(this.renderValue(r)),i.push(" - "),o!=null&&i.push(this.renderValue(o)),i.length>1?i.join(""):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const t=this.toValue(e);return t??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){const r=e.path.split(".")[1];this.__inputChangePath=r||null,t&&(this._limitInputDebouncer=Tt.debounce(this._limitInputDebouncer,Rt.after(600),()=>{this._limitInput(),this._updateFilter()}),Mt(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const t=e.currentTarget,r=Array.from(t.parentElement.querySelectorAll("cosmoz-input")),o=r[r.findIndex(l=>l===t)+1],i=!o,a=r[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)o.focus();else{const l=this._limitInput();this._updateFilter(),l||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){yt(e).close()}_onDropdownOpenedChanged({currentTarget:e,detail:{value:t}}){t&&setTimeout(()=>e.querySelector("cosmoz-input").focus(),100)}_limitInput(){const e=this._filterInput,t=this.__inputChangePath,r=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,r==null)return!1;const o=this._limit,i=t==="min"?"from":"to",a=this.get(i+"Min",o),l=this.get(i+"Max",o),s=this.toValue(r,a,Math.max),u=this.toValue(s,l,Math.min);return this.getComparableValue(r)!==this.getComparableValue(u)?(this.set(["_filterInput",t],this._toInputString(u,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,t=this.filter,r=this._fromInputString(e.min,"min"),o=this._fromInputString(e.max,"max");this.getComparableValue(r)===this.getComparableValue(t,"min")&&this.getComparableValue(o)===this.getComparableValue(t,"max")||this.set("filter",{min:r,max:o})}_filterChanged(e){if(this._filterInput==null)return;const t=this._filterInput,r=e.base,o=this._fromInputString(t.min,"min"),i=this._fromInputString(t.max,"max");this.getComparableValue(o)===this.getComparableValue(r,"min")&&this.getComparableValue(i)===this.getComparableValue(r,"max")||(this.set("_filterInput",{min:this._toInputString(r.min),max:this._toInputString(r.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(fe(e,{active:t})).then(r=>{const{min:o,max:i}=r??{};Object.assign(this,{...o!=null?{min:o}:{},...i!=null?{max:i}:{}})})}},ee=n=>class extends n{static get template(){return Fe`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),Se(this.render(),this.$.output)}_propertiesChanged(e,t,r){super._propertiesChanged(e,t,r),requestAnimationFrame(()=>Se(this.render(),this.$.output))}};class Sn extends Le(ee(A)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, _formatters)"}}}static get observers(){return["_valuesChanged(autodetect, currency, values)"]}render(){const e=t=>{this.headerFocused=t.detail.value,this._onDropdownOpenedChanged(t)};return m`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
					text-align: right;
				}

				.dropdown-content h3 {
					font-weight: 500;
					font-size: 13px;
					margin: 0;
					font-family: var(
						--cosmoz-input-font-family,
						var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
					);
				}

				.dropdown-content {
					padding: 10px 10px 10px 10px;
					min-width: 150px;
					text-align: left;
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					backdrop-filter: blur(16px) saturate(180%);
					-webkit-backdrop-filter: blur(16px) saturate(180%);
					box-shadow:
						0 4px 24px 0 rgba(0, 0, 0, 0.18),
						0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
				}

				cosmoz-input[type='number'] {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-input[type='number']:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${this.title}
				placeholder=${J(this._filterText)}
				class="external-values-${this.externalValues}"
				title=${this._tooltip}
				horizontal-align="right"
				?opened=${this.headerFocused}
				@opened-changed=${e}
			>
				<div class="dropdown-content" slot="dropdown-content">
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						title=${_("Minimum amount")}
						label=${_("Min amount")}
						.value=${this._filterInput?.min}
						@value-changed=${t=>{this.set("_filterInput.min",t.detail.value)}}
						@blur=${t=>this._onBlur(t)}
						@keydown=${t=>this._onKeyDown(t)}
						min=${this._toInputStringAmount(this._limit.fromMin)}
						max=${this._toInputStringAmount(this._limit.fromMax)}
					>
						<div slot="suffix" suffix>${this.filter?.min?.currency}</div>
					</cosmoz-input>
					<cosmoz-input
						class=${this._toClasses}
						type="number"
						title=${_("Maximum amount")}
						label=${_("Max amount")}
						.value=${this._filterInput?.max}
						@value-changed=${t=>{this.set("_filterInput.max",t.detail.value)}}
						@blur=${t=>this._onBlur(t)}
						@keydown=${t=>this._onKeyDown(t)}
						min=${this._toInputStringAmount(this._limit.toMin)}
						max=${this._toInputStringAmount(this._limit.toMax)}
					>
						<div slot="suffix" suffix>${this.filter?.max?.currency}</div>
					</cosmoz-input>
				</div>
			</paper-dropdown-menu>
		`}_valuesChanged(e,t,r){if(!Array.isArray(r)||r.length<1||!e&&t)return;const o=r.reduce((a,l)=>{if(l.currency){const s=l.currency;a[s]=(a[s]||0)+1}return a},{});let i=Object.keys(o)[0];Object.keys(o).reduce((a,l)=>{const s=Math.max(a,o[l]);return s===o[l]&&(i=l),s},0),this.set("currency",i)}toAmount(e,t,r){if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const o=this.toNumber(e.amount);if(o==null||Number.isNaN(o))return null;const i={currency:e.currency,amount:o};if(r==null||t==null)return i;const a=this.toAmount(t);if(a==null)return i;const l=this.rates||{},s=i.amount*(l[i.currency]||1),u=a.amount*(l[a.currency]||1);return this.toNumber(s,u,r)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){const r=super.getComparableValue(e,t);if(r==null)return;const o=this.toNumber(r.amount),i=this.rates;return i==null?o:o*(i[r.currency]||1)}getString(e,t=this.valuePath){const r=this.toValue(this.get(t,e));return r===void 0?"":r===null?"Invalid value":this.renderValue(r)}getCurrency(e,t){const r=this.get(t,e);return r&&r.currency}getFormatter(e,t){const r=t||"",o=e+r||"",i=this._formatters=this._formatters||{};return i[o]||(i[o]=new Intl.NumberFormat(t||void 0,{style:"currency",currency:e})),i[o]}renderValue(e){const t=this.toAmount(e);return t==null?"":this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){const t=e.target,r=t.value,o=e.model.item,i=this.get(this.valuePath,o),a=Number(r),l={amount:a,currency:i.currency};this.set(this.valuePath,l,o),this._fireItemChangeEvent(o,this.valuePath,i,this.renderValue.bind(this))}_toInputString(e){const t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){const t=this.rates;if(t==null)return this._toInputString(e);const r=this.toValue(e);return r==null?null:(this.toNumber(r.amount)*(t[r.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){const r=this.toNumber(e);if(r!=null)return this.toValue({amount:r,currency:t&&this.get(["filter",t,"currency"])||this.currency})}}customElements.define("cosmoz-omnitable-amount-range-input",Sn);const T=(n,e,t)=>{if(n==null||n==="")return;const r=typeof n=="number"?n:Number(n);if(!Number.isNaN(r))return r},vt=n=>{const e=T(n);return e==null?null:e.toString()},kn=({valuePath:n},e)=>{const t=T(n?C(e,n):e);return vt(t)},Xe=n=>{const e=vt(n);return e??""},W=({valuePath:n,maximumFractionDigits:e},t)=>{if(t==null)return;const r=n?C(t,n):t,o=T(r);if(o!=null)return e!==null?T(o.toFixed(e)):o},_n=Nt((n,e,t)=>{const r={localeMatcher:"best fit"};return e!==null&&(r.minimumFractionDigits=e),t!==null&&(r.maximumFractionDigits=t),new Intl.NumberFormat(n||void 0,r)}),Ue=({valuePath:n,locale:e,minimumFractionDigits:t,maximumFractionDigits:r},o)=>{const i=n?C(o,n):o;if(i==null)return"";const a=T(i);return a==null?void 0:_n(e,t,r).format(a)},In=(n,e)=>t=>{const r=W(n,t);if(r==null)return!1;const o=W({...n,valuePath:"min"},e),i=W({...n,valuePath:"max"},e);return!(r<(o??-1/0)||r>(i??1/0))},Y=(n={},e,t,r)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const o=T(e.amount);return o==null||Number.isNaN(o)?null:{currency:e.currency,amount:o}},q=({valuePath:n,rates:e},t)=>{if(t==null)return;let r=t;n!=null&&(r=C(t,n));const o=Y(e,r);if(o==null)return;const i=T(o.amount);return e==null||i==null?i:i*(e?.[o.currency]||1)},Fn=(n,e)=>t=>{const r=q(n,t);if(r===void 0)return!1;const o=q({...n,valuePath:"min"},e),i=q({...n,valuePath:"max"},e);return o===void 0||i===void 0?!0:!(r<o||r>i)},te={},On=(n,e)=>{const r=n+(e||"")||"";return te[r]||(te[r]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:n})),te[r]},Dn=(n,e,t)=>{const r=Y(n,e);return r==null?"":On(r.currency,t).format(r.amount)},Ke=({valuePath:n,rates:e,locale:t},r)=>{const o=Y(e,n?C(r,n):void 0);return o===void 0?"":o===null?"Invalid value":Dn(e,o,t)},Je=n=>n?n.amount+n.currency:"",Qe=n=>{if(n==null||n==="")return;const e=n.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(e)||e.length<0))return{amount:Number(e[1]),currency:e[2]}},Vn=({valuePath:n},e)=>n?C(e,n)?.currency:null,An=({valuePath:n},e)=>n?C(e,n)?.amount:void 0;class En extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell align-right"},headerCellClass:{type:String,value:"amount-header-cell"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=q({...e,valuePath:"min"},t),o=q({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Fn(e,t)}getString(e,t){return Ke(e,t)}toXlsxValue(e,t){return Ke(e,t)}getComparableValue(e,t){return q(e,t)}serializeFilter({rates:e},t){if(t==null)return;const r=Y(e,t.min),o=Y(e,t.max);if(!(r==null&&o==null))return Je(r)+"~"+Je(o)}deserializeFilter(e,t){if(t==null||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:Qe(r[1]),max:Qe(r[2])}:null}renderCell(e,{item:t}){return m`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},r){return m`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>r({amount:i.target.value,currency:C(t,e.valuePath)?.currency})}
			.value=${An(e,t)}
		>
			<div slot="suffix">${Vn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,rates:a,currency:l,autoupdate:s,autodetect:u},{filter:c},d,h){return m`<cosmoz-omnitable-amount-range-input
			.title=${e}
			.filter=${c}
			.values=${h}
			.rates=${a}
			.min=${t}
			.max=${r}
			.limits=${o}
			.locale=${i}
			.currency=${l}
			.autoupdate=${s}
			.autodetect=${u}
			@filter-changed=${({detail:{value:p}})=>d(z=>({...z,filter:p}))}
			@header-focused-changed=${({detail:{value:p}})=>d(z=>({...z,headerFocused:p}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return Z(e,t)}}customElements.define("cosmoz-omnitable-column-amount",En);const Ln=(n,e)=>{if(!Array.isArray(n))return;const t=[];return n.reduce((r,o)=>Array.isArray(o)?(o.forEach(i=>{r.push(i)}),r):(r.push(o),r),[]).filter((r,o,i)=>{if(i.indexOf(r)!==o)return!1;if(e){const a=C(r,e);if(t.indexOf(a)!==-1)return!1;t.push(a)}return!0})},Tn=(n,e,t)=>{if(n==null)return[];if(Array.isArray(n))return Ln(n,e);if(typeof n=="object"){const r=e??"id",o=t??"label";return Object.entries(n).map(([i,a])=>({[r]:i,[o]:a})).sort((i,a)=>i[o]<a[o]?-1:i[o]>a[o]?1:0)}return[]},Te=(n,e,t)=>be(e&&C(n,e)).map(me(t)),Re=({valuePath:n,textProperty:e},t)=>Te(t,n,e).filter(r=>r!=null).join(", "),Rn=Re,Mn=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:r},o)=>i=>{const a=me(n),l=be(C(i,e));return o.some(s=>l.length===0&&me(r||n)(s)===t||l.some(u=>a(u)===a(s)))},Me=n=>e=>n(t=>({...t,filter:e})),Ne=n=>e=>n(t=>({...t,headerFocused:e})),je=n=>e=>n(t=>({...t,query:e})),$t=({emptyValue:n,emptyLabel:e,emptyProperty:t,textProperty:r,valueProperty:o},i)=>{const a=Tn(i,o,r);return!e||n===void 0||!r||!(t||o)||!a?a:[{[r]:e,[t||o]:n},...a]},Nn=(n,e)=>$t(n,xt(e,n.valuePath)),Pe=n=>class extends n{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Re(e,t)}toXlsxValue(e,t){return Rn(e,t)}getComparableValue({valuePath:e,valueProperty:t},r){const o=C(r,e);return t==null?o:be(o).reduce((a,l)=>(a.push(C(l,t)),a),[]).sort().join(" ")}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return Mn(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){return JSON.parse(decodeURIComponent(t))}computeSource(e,t){return e.externalValues||typeof e.values=="function"?async(...r)=>$t(e,await Promise.resolve(fe(e.values,...r))):Nn(e,t)}},jn=({valuePath:n,textProperty:e,valueProperty:t},r)=>{const o=e?jt(e):me(t),i=be(n&&C(r,n)).map(o);return i.length>1?i.filter(Boolean).join(","):i[0]};class Pn extends Pe(N(A)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return m`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${U(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},o,i){return m`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[B]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			.onChange=${Me(o)}
			.onFocus=${Ne(o)}
			.onText=${je(o)}
			>${D(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return jn(e,t)}}customElements.define("cosmoz-omnitable-column-autocomplete",Pn);const Be=(n,e)=>e.find(({value:t})=>n===t),Bn=(n,e,t)=>{const r=Be(e,t);return r?r.text:n},Ye=(n,e,t,r)=>Bn(n,C(e,t),r),Gn=({valuePath:n},e,t)=>Be(C(e,n),t),Hn=n=>e=>{n(t=>({...t,filter:e?.[0]?.value??null}))},Wn=n=>e=>{n(t=>({...t,headerFocused:e}))},qn=n=>e=>{n(t=>({...t,query:e}))},Xn=n=>e=>n(e?.[0]?.value),Ze=({valuePath:n,trueLabel:e,falseLabel:t},r)=>C(r,n)?e:t,Un=({valuePath:n},e)=>t=>C(t,n)===e,ne=gt((n,e)=>[{text:n,value:!0},{text:e,value:!1}]),Kn=({valuePath:n,trueLabel:e,falseLabel:t},r)=>n?C(r,n)?e:t:"",Jn=(n,e)=>{try{return JSON.parse(e)}catch{return null}};class Qn extends N(A){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,t){return Ze(e,t)}renderCell(e,{item:t}){return Ze(e,t)}renderEditCell(e,{item:t},r){const{trueLabel:o,falseLabel:i}=e;return m`<cosmoz-autocomplete
			no-label-float
			.title=${Ye(e.title,t,e.valuePath,ne(o,i))}
			.source=${ne(o,i)}
			.textProperty=${"text"}
			.value=${Gn(e,t,ne(o,i))}
			.onChange=${Xn(r)}
			.limit=${1}
			>${D(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:r},o,i){return m`<cosmoz-autocomplete-ui
			.label=${e.title}
			.title=${Ye(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${"text"}
			.value=${Be(t,i)}
			.text=${r}
			.onChange=${Hn(o)}
			.onFocus=${Wn(o)}
			.onText=${qn(o)}
			.limit=${1}
			>${D(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return ne(e,t)}getFilterFn(e,t){if(t!=null)return Un(e,t)}toXlsxValue(e,t){return Kn(e,t)}deserializeFilter(e,t){return Jn(e,t)}}customElements.define("cosmoz-omnitable-column-boolean",Qn);const Ge=n=>class extends Le(n){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"}}}toDate(e,t,r){if(e==null||e==="")return;let o=e;if(o instanceof Date||(typeof e=="string"&&(o=this.getAbsoluteISOString(o)),o=new Date(o)),Number.isNaN(o.getTime()))return null;if(r==null||t==null)return o;const i=this.toDate(t);if(i==null)return o;const a=this.getComparableValue(o),l=this.getComparableValue(i);return r(a,l)===a?o:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){const r=super.getComparableValue(e,t);if(r!=null)return this.toNumber(r.getTime())}getString(e,t=this.valuePath,r=this.formatter){const o=this.toValue(this.get(t,e));return o===void 0?"":o===null?"Invalid Date":this.renderValue(o,r)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const t=-new Date(e).getTimezoneOffset()/60;return(t<0?"-":"+")+["0",Math.abs(t)].join("").substr(-2)+":00"}renderValue(e,t=this.formatter){if(t==null)return;const r=this.toValue(e);if(r!=null)return t.format(r)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){const t=e.currentTarget,r=t.value,o=e.model.item,i=this.get(this.valuePath,o),a=this._fromInputString(r);this.set(this.valuePath,a,o),this._fireItemChangeEvent(o,this.valuePath,i,this.renderValue.bind(this))}_toLocalISOString(e){return xe(e)}};class Yn extends Ge(ee(A)){render(){return m`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
				}

				.dropdown-content h3 {
					font-weight: 500;
					font-size: 13px;
					margin: 0;
					font-family: var(
						--cosmoz-input-font-family,
						var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
					);
				}

				.dropdown-content {
					padding: 10px 10px 10px 10px;
					min-width: 120px;
					text-align: left;
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					backdrop-filter: blur(16px) saturate(180%);
					-webkit-backdrop-filter: blur(16px) saturate(180%);
					box-shadow:
						0 4px 24px 0 rgba(0, 0, 0, 0.18),
						0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
				}

				cosmoz-input[type='date'] {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-input[type='date']:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${this.title}
				placeholder=${J(this._filterText)}
				class="external-values-${this.externalValues}"
				title=${this._tooltip}
				horizontal-align="right"
				?opened=${this.headerFocused}
				@opened-changed=${e=>{this.headerFocused=e.detail.value}}
			>
				<div class="dropdown-content" slot="dropdown-content">
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="date"
						label=${_("From date")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						.value=${this._filterInput?.min}
						@value-changed=${e=>this.set("_filterInput.min",e.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="date"
						label=${_("Until date")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						.value=${this._filterInput?.max}
						@value-changed=${e=>this.set("_filterInput.max",e.detail.value)}
					></cosmoz-input>
				</div>
			</paper-dropdown-menu>
		`}_fromInputString(e,t){const r=this.toDate(e);if(r!=null)return t==="min"&&r.setHours(0,0,0,0),t==="max"&&r.setHours(23,59,59),r}_filterInputChanged(e,t){const r=e.path.split(".")[1],o=r&&e.value;if(o&&o.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}}customElements.define("cosmoz-omnitable-date-range-input",Yn);const Zn=n=>{const e=-new Date(n).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},He=n=>n.length===19?n+Zn(n):n,wt=n=>{if(n==null||n==="")return;let e=n;return!(e instanceof Date)&&(typeof n=="string"&&(e=He(e)),e=Pt(e),!e)||Number.isNaN(e.getTime())?null:e},j=({valuePath:n},e)=>{if(e==null)return;let t=e;n!=null&&(t=C(e,n));const r=wt(t);if(r!=null)return T(r.getTime())},V=(n,e,t)=>{const r=wt(n);return r??null},We=(n,e)=>{if(e==null)return;const t=V(n);if(t!=null)return e.format(t)},re={},er=n=>{const e=n||"";return re[e]||(re[e]=new Intl.DateTimeFormat(n||void 0)),re[e]},et=({valuePath:n,locale:e},t)=>{let r=C(t,n||"");return r===void 0?"":(r=V(r),r===null?"Invalid Date":We(r,er(e)))},zt=n=>{const e=V(n);if(e==null)return null;const t=xe(e);return t==null?null:t.slice(0,10)},tr=({valuePath:n},e)=>zt(C(e,n||"")),Ct=(n,e)=>{const t=V(n);if(t!=null)return t},tt=n=>{const e=zt(n);return e??""},nr=({valuePath:n},e)=>{if(!n)return"";const t=V(C(e,n));if(!t)return"";const r=V(xe(t));return r?(r.setHours(0,0,0,0),r):""},St=(n,e)=>t=>{const r=j(n,t);if(r==null)return!1;const o=j({...n,valuePath:"min"},e),i=j({...n,valuePath:"max"},e);return!(r<(o??-1/0)||r>(i??1/0))};class rr extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=j({...e,valuePath:"min"},t),o=j({...e,valuePath:"max"},t);if(!(r==null&&o==null))return St(e,t)}getString(e,t){return et(e,t)}toXlsxValue(e,t){return nr(e,t)}getComparableValue(e,t){return j(e,t)}serializeFilter(e,t){if(t==null)return;const r=V(t.min),o=V(t.max);if(!(r==null&&o==null))return tt(r)+"~"+tt(o)}deserializeFilter(e,t){if(t==null||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:V(r[1]),max:V(r[2])}:null}renderCell(e,{item:t}){return m`<div class="omnitable-cell-date">
			${et(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return m`<cosmoz-input
			no-label-float
			type="date"
			@change=${i=>r(Ct(i.target.value))}
			.value=${tr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i},{filter:a},l,s){return m`<cosmoz-omnitable-date-range-input
			.title=${e}
			.filter=${a}
			.values=${s}
			.min=${t}
			.max=${r}
			.limits=${o}
			.locale=${i}
			@filter-changed=${({detail:{value:u}})=>l(c=>({...c,filter:u}))}
			@header-focused-changed=${({detail:{value:u}})=>l(c=>({...c,headerFocused:u}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return Z(e,t)}}customElements.define("cosmoz-omnitable-column-date",rr);class or extends Pe(N(A)){renderCell({valuePath:e,textProperty:t},{item:r}){const o=Te(r,e,t).map(i=>m`<li>${i}</li>`);return m`
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
				${o}
			</ul>
		`}renderEditCell(){return"not implemented"}renderHeader(e,{filter:t,query:r},o,i){return m`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${r}
			.onChange=${Me(o)}
			.onFocus=${Ne(o)}
			.onText=${je(o)}
			>${D(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",or);window.Cosmoz=window.Cosmoz||{};class nt extends Bt(Gt(Ht,A)){static get template(){return Fe`
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
		`}static get is(){return"cosmoz-omnitable-column-list-data"}static get properties(){return{items:{type:Array},_expanded:{type:Boolean,value:!1},_othersCount:{type:Number,computed:"_computeOthersCount(items)"}}}static get observers(){return["_itemsLengthChanged(items.length)"]}_itemsLengthChanged(){requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent("expand",{bubbles:!0})))}_firstItem(e){if(e!=null&&e.length>0)return e[0]}_hideExpand(e,t){return e!==void 0&&e.length!==null?e.length<=2||t:!0}_hideCollapse(e,t){return e!==void 0&&e.length!==null?e.length<=2||!t:!0}_otherItems(e,t){if(e!=null&&(e.length<=2||t))return e.slice(1)}_computeOthersCount(e){if(e!=null)return e.length-1}_toggleExpand(e){this._expanded=!this._expanded,e.stopPropagation(),e.preventDefault()}}customElements.define(nt.is,nt);class ir extends Pe(N(A)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:r}){return m`<cosmoz-omnitable-column-list-data
			.items=${Te(r,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},r){const o=i=>r(i.target.value.split(/,\s*/gu));return m`<cosmoz-input
			no-label-float
			type="text"
			.value=${Re(e,t)}
			@change=${o}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},o,i){return m`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			.textual=${e.textual}
			.column=${e}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[B]?.itemRenderer}
			.value=${t}
			.text=${r}
			.onChange=${Me(o)}
			.onFocus=${Ne(o)}
			.onText=${je(o)}
			>${D(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",ir);class ar extends Le(ee(A)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"}}}render(){const e=t=>{this.headerFocused=t.detail.value,this._onDropdownOpenedChanged(t)};return m`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
					text-align: right;
				}

				.dropdown-content h3 {
					font-weight: 500;
					font-size: 13px;
					margin: 0;
					font-family: var(
						--cosmoz-input-font-family,
						var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
					);
				}

				.dropdown-content {
					padding: 10px 10px 10px 10px;
					min-width: 120px;
					text-align: left;
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					backdrop-filter: blur(16px) saturate(180%);
					-webkit-backdrop-filter: blur(16px) saturate(180%);
					box-shadow:
						0 4px 24px 0 rgba(0, 0, 0, 0.18),
						0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
				}

				cosmoz-input[type='number'] {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-input[type='number']:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>

			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${this.title}
				placeholder=${J(this._filterText)}
				class="external-values-${this.externalValues}"
				title=${this._tooltip}
				horizontal-align="right"
				?opened=${this.headerFocused}
				@opened-changed=${e}
			>
				<div class="dropdown-content" slot="dropdown-content">
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						label=${_("From")}
						.value=${this._filterInput?.min}
						@value-changed=${t=>{this.set("_filterInput.min",t.detail.value)}}
						@blur=${t=>this._onBlur(t)}
						@keydown=${t=>this._onKeyDown(t)}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
					></cosmoz-input>
					<cosmoz-input
						class=${this._toClasses}
						type="number"
						label=${_("To")}
						.value=${this._filterInput?.max}
						@value-changed=${t=>{this.set("_filterInput.max",t.detail.value)}}
						@blur=${t=>this._onBlur(t)}
						@keydown=${t=>this._onKeyDown(t)}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
					></cosmoz-input>
				</div>
			</paper-dropdown-menu>
		`}_computeFormatter(e,t,r){const o={localeMatcher:"best fit"};return t!==null&&(o.minimumFractionDigits=t),r!==null&&(o.maximumFractionDigits=r),new Intl.NumberFormat(e||void 0,o)}getComparableValue(e,t){if(e==null)return;let r=e;if(t!=null&&(r=this.get(t,e)),r=this.toValue(r),r==null)return;const o=this.maximumFractionDigits;return o!==null?this.toValue(r.toFixed(o)):r}renderValue(e,t=this.formatter){const r=this.toNumber(e);if(r!=null)return t.format(r)}}customElements.define("cosmoz-omnitable-number-range-input",ar);class lr extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell align-right"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=W({...e,valuePath:"min"},t),o=W({...e,valuePath:"max"},t);if(!(r==null&&o==null))return In(e,t)}getString(e,t){return Ue(e,t)}toXlsxValue({valuePath:e},t){return C(t,e)}getComparableValue(e,t){return W(e,t)}serializeFilter(e,t){if(t==null)return;const r=T(t.min),o=T(t.max);if(!(r==null&&o==null))return Xe(r)+"~"+Xe(o)}deserializeFilter(e,t){if(t==null||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:T(r[1]),max:T(r[2])}:null}renderCell(e,{item:t}){return m`<div class="omnitable-cell-number">
			${Ue(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return m`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>r(i.target.value)}
			.value=${kn(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,maximumFractionDigits:a,minimumFractionDigits:l,autoupdate:s},{filter:u},c,d){return m`<cosmoz-omnitable-number-range-input
			.title=${e}
			.filter=${u}
			.values=${d}
			.min=${t}
			.max=${r}
			.limits=${o}
			.locale=${i}
			.maximumFractionDigits=${a}
			.minimumFractionDigsits=${l}
			.autoupdate=${s}
			@filter-changed=${({detail:{value:h}})=>c(p=>({...p,filter:h}))}
			@header-focused-changed=${({detail:{value:h}})=>c(p=>({...p,headerFocused:h}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return Z(e,t)}}customElements.define("cosmoz-omnitable-column-number",lr);const kt="1970-01-01",G=(n,e,t)=>{const r=typeof n=="string"&&n.length>3&&n.length<=9?He(kt+"T"+n):n;return V(r)},oe={},sr=n=>{const e=n||"";if(oe[e])return oe[e];const t={hour:"numeric",minute:"numeric",second:"numeric"};return oe[e]=new Intl.DateTimeFormat(n||void 0,t),oe[e]},de=({valuePath:n,locale:e},t)=>{const r=G(C(t,n||""));return r===void 0?"":r===null?"Invalid Date":We(r,sr(e))},ur=(n,e)=>n.valuePath?de(n,e):"",cr=n=>{const e=G(n);if(e==null)return null;const t=xe(e);return t&&t.slice(11,19)},X=({valuePath:n},e)=>{if(e==null)return;const t=cr(n==null?e:C(e,n));if(t==null)return;const r=G(He(kt+"T"+t));return r==null?r:T(r.getTime())},dr=(n,e)=>t=>{const r=X(n,t);if(r==null)return!1;const o=X({...n,valuePath:"min"},e),i=X({...n,valuePath:"max"},e);return o==null||i==null?!1:!(r<o||r>i)},rt=n=>{const e=G(n);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},ot=n=>{if(!(n==null||n===""))return G(typeof n=="string"?n.replace(/\./gu,":")+"Z":n)};class mr extends Ge(ee(A)){render(){return m`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
				}
			</style>

			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${this.title}
				placeholder=${J(this._filterText)}
				class="external-values-${this.externalValues}"
				title=${this._tooltip}
				horizontal-align="right"
				?opened=${this.headerFocused}
				@opened-changed=${e=>this.set("headerFocused",e.detail.value)}
			>
				>
				<div
					class="dropdown-content"
					slot="dropdown-content"
					style="padding: 15px; min-width: 100px;"
				>
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="time"
						label=${_("From time")}
						step=${this.filterStep}
						.value=${this._filterInput.min}
						@value-changed=${e=>this.set("_filterInput.min",e.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="time"
						label=${_("Until time")}
						step=${this.filterStep}
						.value=${this._filterInput.max}
						@value-changed=${e=>this.set("_filterInput.max",e.detail.value)}
					></cosmoz-input>
				</div>
			</paper-dropdown-menu>
		`}get _fixedDate(){return"1970-01-01"}toDate(e,t,r){const o=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(o,t,r)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let r=this._toInputString(t==null?e:this.get(t,e));if(r!=null&&(r=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+r)),r!=null))return this.toNumber(r.getTime())}_timeValueChanged(e){const t=e.target,r=t.value,o=e.model.item,i=this.toDate(o.date),a=this.toDate(i!=null?i.toISOString().slice(0,10)+"T"+r:r),l=s=>s;a==null&&(this.set(this.valuePath,a,o),this._fireItemChangeEvent(o,this.valuePath,i,l.bind(this)))}_computeFormatter(e){const t={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-time-range-input",mr);class pr extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,t){const r=X({...e,valuePath:"min"},t),o=X({...e,valuePath:"max"},t);if(!(r==null&&o==null))return dr(e,t)}getString(e,t){return de(e,t)}toXlsxValue(e,t){return ur(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;const r=G(t.min),o=G(t.max);if(!(r==null&&o==null))return rt(r)+"~"+rt(o)}deserializeFilter(e,t){if(t==null||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:ot(r[1]),max:ot(r[2])}:null}renderCell(e,{item:t}){return de(e,t)}renderEditCell(e,{item:t},r){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${de(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,locale:o,filterStep:i},{filter:a},l,s){return m`<cosmoz-omnitable-time-range-input
			.title=${e}
			.filter=${a}
			.values=${s}
			.min=${t}
			.max=${r}
			.locale=${o}
			.filterStep=${i}
			@filter-changed=${({detail:{value:u}})=>l(c=>({...c,filter:u}))}
			@header-focused-changed=${({detail:{value:u}})=>l(c=>({...c,headerFocused:u}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return Z(e,t)}}customElements.define("cosmoz-omnitable-column-time",pr);const ie={},gr=n=>{const e=n||"";if(ie[e])return ie[e];const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return ie[e]=new Intl.DateTimeFormat(n||void 0,t),ie[e]},$e=({valuePath:n,locale:e},t)=>{const r=V(C(t,n||""));return r===void 0?"":r===null?"Invalid Date":We(r,gr(e))},hr=({valuePath:n},e)=>n?C(e,n):"",it=n=>{const e=V(n);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},at=n=>{if(!(n==null||n==="")&&typeof n=="string")return V(n.replace(/\./gu,":")+"Z")};class fr extends Ge(ee(A)){render(){return m`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
					text-align: right;
				}

				.dropdown-content h3 {
					font-weight: 500;
					font-size: 13px;
					margin: 0;
					font-family: var(
						--cosmoz-input-font-family,
						var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
					);
				}

				.dropdown-content {
					padding: 10px 10px 10px 10px;
					min-width: 120px;
					text-align: left;
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					backdrop-filter: blur(16px) saturate(180%);
					-webkit-backdrop-filter: blur(16px) saturate(180%);
					box-shadow:
						0 4px 24px 0 rgba(0, 0, 0, 0.18),
						0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
				}

				cosmoz-datetime-input {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-datetime-input:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>

			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${this.title}
				placeholder=${J(this._filterText)}
				class="external-values-${this.externalValues}"
				title=${this._tooltip}
				horizontal-align="right"
				?opened=${this.headerFocused}
				@opened-changed=${e=>this.set("headerFocused",e.detail.value)}
			>
				<div class="dropdown-content" slot="dropdown-content">
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-datetime-input
						date-label=${_("From date")}
						time-label=${_("From time")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.min}
						@value-changed=${e=>this.set("_filterInput.min",e.detail.value)}
					></cosmoz-datetime-input>
					<cosmoz-datetime-input
						date-label=${_("To date")}
						time-label=${_("To time")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.max}
						@value-changed=${e=>this.set("_filterInput.max",e.detail.value)}
					></cosmoz-datetime-input>
				</div>
			</paper-dropdown-menu>
		`}_toInputString(e){const t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-datetime-range-input",fr);class lt extends N(A){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=j({...e,valuePath:"min"},t),o=j({...e,valuePath:"max"},t);if(!(r==null&&o==null))return St(e,t)}getString(e,t){return $e(e,t)}toXlsxValue(e,t){return hr(e,t)}getComparableValue(e,t){return j(e,t)}serializeFilter(e,t){if(t==null)return;const r=V(t.min),o=V(t.max);if(!(r==null&&o==null))return it(r)+"~"+it(o)}deserializeFilter(e,t){if(t==null||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:at(r[1]),max:at(r[2])}:null}renderCell(e,{item:t}){return $e(e,t)}renderEditCell(e,{item:t},r){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(Ct(i.target.value))}
			.value=${$e(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,filterStep:a},{filter:l},s,u){return m`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			.filter=${l}
			.values=${u}
			.min=${t}
			.max=${r}
			.limits=${o}
			.locale=${i}
			.filterStep=${a}
			@filter-changed=${({detail:{value:c}})=>s(d=>({...d,filter:c}))}
			@header-focused-changed=${({detail:{value:c}})=>s(d=>({...d,headerFocused:c}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return Z(e,t)}}customElements.define(lt.is,lt);const br=({column:n,item:e,selected:t,folded:r,group:o})=>n?(n.renderGroup??n.renderCell)(n,{item:e,selected:t,folded:r,group:o}):mt;customElements.define("cosmoz-omnitable-group-row",L(br,{useShadowDOM:!1}));const xr=n=>{const{column:e}=n;return E(()=>{let t=0,r=0;const o=l=>{n.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+l.pageX-t),column:e}}))},i=()=>{document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",i)},a=l=>{t=l.pageX,r=n.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",o),document.addEventListener("pointerup",i)};return n.addEventListener("pointerdown",a),()=>n.removeEventListener("pointerdown",a)},[e]),mt};customElements.define("cosmoz-omnitable-resize-nub",L(xr));const yr=m`<svg
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
</svg>`,vr=m`
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
`,we=m` <svg
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
</svg>`,$r=m`<svg
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
</svg> `,_t=({column:n,on:e,descending:t,setOn:r,setDescending:o})=>{const{name:i,title:a}=n??{};return m`<button
		class="sg"
		title=${a}
		data-on=${J(i===e&&(t?"desc":"asc")||void 0)}
		@click=${l=>{const s=l.currentTarget?.dataset.on;s||(r(i),o(!1)),s==="asc"?o(!0):s==="desc"&&(r(),o(!1))}}
	>
		<span>${a}</span> ${$r}
	</button>`},It=({columns:n,...e})=>n?.map(t=>_t({column:t,...e})),wr=()=>m`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,groupOn:e,setGroupOn:t,groupOnDescending:r,setGroupOnDescending:o}={})=>It({columns:n?.filter?.(i=>i.groupOn),on:e,setOn:t,descending:r,setDescending:o})}
	>
	</sort-and-group-consumer>
`,zr=()=>m`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,sortOn:e,setSortOn:t,descending:r,setDescending:o}={})=>It({columns:n?.filter?.(i=>i.sortOn),on:e,setOn:t,descending:r,setDescending:o})}
	>
	</sort-and-group-consumer>
`,Ft=n=>(e,t,r=Wt)=>{const o=Kt(),i=new URLSearchParams(o.hash.replace("#",""));return n(e,t,r,i),"#!"+Object.assign(o,{hash:i}).href.replace(location.origin,"")},Ot=n=>n==null||n==="",Cr=Ft((n,e,t,r)=>Ot(t(e))?r.delete(n):r.set(n,t(e))),Sr=Ft((n,e,t,r)=>Object.entries(e).map(t).forEach(([o,i])=>Ot(i)?r.delete(n+o):r.set(n+o,i))),Q=(n,e,{suffix:t="",read:r,write:o,multi:i}={})=>{const[a,l]=i?[Sr,qt]:[Cr,Xt],[s,u]=M(()=>e==null?n:l(e+t,r)??n),c=$(d=>u(h=>{const p=fe(d,h);return e!=null&&Ut(a(e+t,p,o),null,{notify:!1}),p}),[e,t,a,o]);return[s,c]},kr=n=>[!0,"true",1,"yes","on"].includes(n),ae=n=>n===""||(n==null?void 0:kr(n)),le=(n,e,t)=>$(r=>{n(r),t(o=>({...o,[e]:r}))},[n,e,t]),_r=(n,e,t,r,o)=>{const[i,a]=Q(t.sortOn,e,{suffix:"-sortOn"}),[l,s]=Q(ae(t.descending),e,{suffix:"-descending",read:ae}),[u,c]=Q(t.groupOn,e,{suffix:"-groupOn"}),[d,h]=Q(ae(t.groupOnDescending),e,{suffix:"-groupOnDescending",read:ae}),p=I(()=>n.find(g=>g.name===i),[n,i]),z=I(()=>n.find(g=>g.name===u),[n,u]),b={groupOn:u,setGroupOn:le(c,"groupOn",r),groupOnDescending:d,setGroupOnDescending:le(h,"groupOnDescending",r),sortOn:i,setSortOn:le(a,"sortOn",r),descending:l,setDescending:le(s,"descending",r),columns:n},v=I(()=>b,Object.values(b)),F=$(g=>{a(g.sortOn),c(g.groupOn),s(g.descending),h(g.groupOnDescending)},[]);return E(()=>void(o.current=F),[]),{...v,sortAndGroup:v,groupOnColumn:z,sortOnColumn:p}},qe=ht();customElements.define("sort-and-group-provider",qe.Provider);customElements.define("sort-and-group-consumer",L(({render:n})=>n(Oe(qe)),{useShadowDOM:!1}));const Ir=({data:n,columns:e,groupOnColumn:t,filters:r,setFilterState:o,sortAndGroup:{sortOn:i,setSortOn:a,descending:l,setDescending:s}={}})=>ft(e,u=>u.name,u=>[m`<div
				class="cell ${u.headerCellClass} header-cell"
				part="cell header-cell cell-${u.name} header-cell-${u.name}"
				?hidden="${u===t}"
				title="${u.headerTitleFn(u)}"
				name="${u.name}"
			>
				${u.renderHeader(u,r[u.name]??{},c=>o(u.name,c),u.source(u,n))}
				${_t({on:i,setOn:a,descending:l,setDescending:s,column:u})}
			</div>`,m`<cosmoz-omnitable-resize-nub
				.column="${u}"
				name="${u.name}"
			></cosmoz-omnitable-resize-nub>`]),Fr=({columns:n,settingsConfig:e,hideSelectAll:t,...r})=>{const o=Oe(qe);return m`
		${D(n,i=>Ir({columns:i,sortAndGroup:o,...r}))}
		${D(!t,()=>m` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`};customElements.define("cosmoz-omnitable-header-row",L(Fr,{useShadowDOM:!1}));const Or=K`
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
`,Dr=({column:n})=>m`
	<div class="label" title="${n.title}" part="item-expand-label">
		${n.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;customElements.define("cosmoz-omnitable-item-expand-line",L(Dr,{styleSheets:[De(Or)]}));const Vr=({columns:n,item:e,selected:t,expanded:r,groupOnColumn:o})=>Jt(n,i=>m`<cosmoz-omnitable-item-expand-line
				.column=${i}
				?hidden=${i===o}
				exportparts="item-expand-label, item-expand-value"
				>${i.renderCell(i,{item:e,selected:t,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",L(Vr,{useShadowDOM:!1}));const Ar=(n,e,t)=>n.editable?n.renderEditCell(n,e,t(n,e.item)):n.renderCell(n,e),Er=({columns:n,groupOnColumn:e,item:t,index:r,selected:o,expanded:i,onItemChange:a})=>ft(n,l=>l.name,l=>m`<div
				class="cell itemRow-cell ${l.cellClass??""}"
				part="cell itemRow-cell cell-${l.name} itemRow-cell-${l.name}"
				?hidden="${l===e}"
				?editable="${l.editable}"
				title="${l.cellTitleFn(l,t)}"
				name="${l.name}"
			>
				${Ar(l,{item:t,index:r,selected:o,expanded:i},a)}
			</div>`);customElements.define("cosmoz-omnitable-item-row",L(Er,{useShadowDOM:!1}));const Dt=K`
	.checkbox {
		box-sizing: border-box;
		width: 18px;
		height: 18px;
		background: transparent;
		border-radius: 4px;
		appearance: none;
		-webkit-appearance: none;
		outline: none;
		position: relative;
		user-select: none;
		cursor: pointer;
		display: inline-block;
		box-shadow: 0 0 0 2px
			var(--cosmoz-omnitable-checkbox-shadow-color, rgba(0, 0, 0, 0.16)) inset;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		vertical-align: middle;
		transition: background-color 140ms;
		margin: 1px 12px;
		flex: none;
	}

	.checkbox:checked {
		background-color: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
		box-shadow: none;
	}

	.checkbox:checked::before {
		content: '';
		position: absolute;
		box-sizing: content-box;
		width: 5px;
		height: 10px;
		border: 2.4px solid
			var(--cosmoz-omnitable-checkbox-checked-tick-color, #fff);
		border-top: none;
		border-left: none;
		transform-origin: 5px 10px;
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
`,Lr=K`
	:host {
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
		color: var(--cosmoz-omnitable-text-color, rgb(89, 102, 121));
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
		background-color: var(--cosmoz-omnitable-bg-color, rgb(255, 255, 255));
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
		background-color: var(--cosmoz-omnitable-header-bg-color, inherit);
		border-top-left-radius: var(--cosmoz-omnitable-header-border-radius-top-left, 8px);
		border-top-right-radius: var(--cosmoz-omnitable-header-border-radius-top-right, 8px);
		border-bottom-left-radius: var(--cosmoz-omnitable-header-border-radius-bottom-left, 2px);
		border-bottom-right-radius: var(--cosmoz-omnitable-header-border-radius-bottom-right, 2px);
	}

	[hidden] {
		display: none;
	}

	cosmoz-grouped-list-row {
		width: 100%;
	}

	cosmoz-omnitable-header-row .external-values-false {
		--paper-input-container-color: var(
			--cosmoz-omnitable-local-filter-header-color
		);
	}

	cosmoz-omnitable-header-row .external-values-true {
		--paper-input-container-color: var(
			--cosmoz-omnitable-remote-filter-header-color
		);
	}

	.header > cosmoz-omnitable-header-row {
		flex: auto;
	}

	.header-cell {
		--paper-input-container: {
			padding-top: 0;
			padding-bottom: 1px;
			--paper-font-caption_-_line-height: 18px;
		}
		--paper-input-container-underline: {
			border-color: var(--cosmoz-omnitable-header-line-color);
			display: var(--cosmoz-omnitable-paper-input-underline-display, block);
		}
		--paper-input-container-underline-focus {
			border-color: var(--cosmoz-omnitable-header-line-focused-color);
			display: var(--cosmoz-omnitable-paper-input-underline-display, block);
		}

		--paper-font-subhead_-_font-family: var(
			--cosmoz-omnitable-header-font-family,
			'Roboto',
			'Noto',
			sans-serif
		);
		text-transform: var(--cosmoz-omnitable-header-text-transform, none);
		--paper-font-subhead_-_font-weight: var(
			--cosmoz-omnitable-header-font-weight,
			normal
		);
		--paper-font-subhead_-_font-size: var(
			--cosmoz-omnitable-header-font-size,
			16px
		);
		--cosmoz-input-padding: var(--cosmoz-omnitable-header-input-padding, 0);
		--cosmoz-input-label-text-transform: var(--cosmoz-omnitable-header-text-transform, none);
		--cosmoz-input-label-font-weight: var(--cosmoz-omnitable-header-font-weight, normal);
		--cosmoz-input-line-color: var(--cosmoz-omnitable-header-line-color);
		--cosmoz-input-line-display: var(--cosmoz-omnitable-header-line-display, block);
		--cosmoz-input-focused-color: var(--cosmoz-omnitable-header-line-focused-color);
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
	.tableContent-empty iron-icon {
		height: 96px;
		min-height: 96px;
		width: 96px;
		min-width: 96px;
		margin-right: 24px;
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
		border-bottom-color: var(--cosmoz-omnitable-border-color, #e1e2e5);
		border-bottom-width: 1px;
		border-bottom-style: var(
			--cosmoz-omnitable-item-row-border-bottom-style,
			solid
		);
		/* set a min-height for rows so that rows with empty values are visible */
	}
	.itemRow-wrapper {
		display: flex;
		align-items: center;
		min-height: var(--item-row-min-height, 39px);
		padding-right: 8px;
	}

	.itemRow[selected] {
		background-color: var(
			--cosmoz-omnitable-selection-color,
			rgb(195, 212, 248)
		);
		@apply --cosmoz-omnitable-selected-row;
	}

	.tableContent .itemRow-cell paper-dropdown-menu {
		margin-top: -20px;

	}

	cosmoz-omnitable-item-expand[expanded] {
		display: flex;
		flex-direction: column;
		padding: 5px 4%;
		line-height: 1.3em;
		border-bottom: solid 1px var(--cosmoz-omnitable-border-color, #e1e2e5);
		background-color: #fafafa;
	}

	cosmoz-omnitable-item-expand:not([expanded]) {
		display: none;
	}

	.groupRow {
		display: flex;
		align-items: center;
		background-color: #f5f6f9;
		font-weight: 700;
		color: #101010;
		border-bottom: 1px solid var(--cosmoz-omnitable-border-color, #e1e2e5);
	}

	.groupRow-label {
		display: flex;
		flex: auto;
		align-items: center;
		flex-wrap: wrap;
		padding-left: 8px;
		margin: 0;
		font-size: 1.15em;
		font-weight: 400;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.groupRow-label > cosmoz-omnitable-group-row {
		flex: auto;
	}

	.groupRow-badge {
		background: #8be5c6;
		color: #fff;
		line-height: 30px;
		width: 30px;
		text-align: center;
		border-radius: 50%;
		font-size: 13px;
		font-weight: 500;
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
		background-color: var(--cosmoz-omnitable-bottom-bar-color, #5f5a92);
		overflow: hidden;
	}
	cosmoz-bottom-bar::part(bar) {
		padding: 0 24px;
	}

	cosmoz-bottom-bar::slotted(*) {
		background-color: #4c4875;
		color: #fff;
		border-color: #fff;
	}

	cosmoz-bottom-bar::slotted([disabled]) {
		color: #b7b6c8;
		border-color: #b7b6c8;
		cursor: not-allowed;
	}

	.boolean-cell[editable] {
		overflow: initial;
	}

	.omnitable-cell-number, .omnitable-cell-date {
		font-variant-numeric: tabular-nums;
	}

	.itemRow:hover {
		box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
			0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
		background-color: var(--cosmoz-omnitable-row-hover-color);
	}
	.groupRow:hover .checkbox:not(:checked):not(:hover),
	.itemRow:hover .checkbox:not(:checked):not(:hover) {
		box-shadow: 0 0 0 2px var(--cosmoz-omnitable-checkbox-shadow-color-not-hover, rgba(0, 0, 0, 0.54))
		inset;
	}
	.groupRow:hover .expand:not(:hover),
	.itemRow:hover .expand:not(:hover) {
		color: rgba(0, 0, 0, 0.54);
	}

	${Dt}

	.all {
		margin-bottom: 6px;
	}

	.expand {
		width: 24px;
		height: 24px;
		padding: 0;
		flex: none;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		background: none;
		transition: 0.15s background ease-in;
		outline: none;
		color: rgba(0, 0, 0, 0.16);
	}
	.expand svg {
		fill: currentColor;
	}
	.expand:not([aria-expanded]) svg {
		transform: scaleY(-1);
	}
	.expand:active {
		background: rgba(33, 33, 33, 0.25);
	}
	.expand:hover {
		color: #000;
	}
	.groupRow .expand {
		margin: 8px;
	}

	.sg {
		display: inline-flex;
		width: 10px;
		cursor: pointer;
		align-items: center;
		margin-top: 18px;
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
		display:none;
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
`,st=n=>{const e=n.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':n},Tr=(n,e,t)=>{const i=n.map(l=>st(l.title)).join(";")+`
`,a=e.map(l=>n.map(s=>{const u=s.getString(s,l);return u==null?"":st(String(u))}).join(";")+`
`);a.unshift(i),bt(new File(a,t,{type:"text/csv;charset=utf-8"}))},Rr=(n,e)=>{const t=n.map(o=>o.title),r=e.map(o=>n.map(i=>{const a=i.toXlsxValue(i,o);return a??""}));return r.unshift(t),r},Mr=(n,e,t,r)=>{const o=Rr(n,e),i=new Qt(t).addSheetFromData(o,r).generate();bt(new File([i],t,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},Nr=({columns:n,selectedItems:e,csvFilename:t,xlsxFilename:r,xlsxSheetname:o,topPlacement:i})=>m`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!Ve(e.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${_("{count} selected item",{count:e.length})}
		</slot>
		<slot name="actions" id="actions"></slot>
		<!-- These slots are needed by cosmoz-bottom-bar
        as it might change the slot of the actions to distribute them in the menu -->
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		<cosmoz-dropdown-menu part="extra" slot="extra" .placement=${i}>
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
				@click=${()=>Tr(n,e,t)}
			>
				${_("Save as CSV")}
			</button>
			<button
				@click=${()=>Mr(n,e,r,o)}
			>
				${_("Save as XLSX")}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`,jr=({allSelected:n,onAllCheckboxChange:e,sortAndGroup:t,dataIsValid:r,data:o,columns:i,filters:a,groupOnColumn:l,setFilterState:s,settingsConfig:u,hideSelectAll:c})=>m`<sort-and-group-provider .value=${t}>
		<div class="header" id="header" part="header">
			${D(!c,()=>m`<input
						class="checkbox all"
						type="checkbox"
						.checked=${n}
						@input=${e}
						?disabled=${!r}
						part="all"
					/>`)}
			${D(c,()=>m` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${u}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${o}
				.columns=${i}
				.filters=${a}
				.groupOnColumn=${l}
				.setFilterState=${s}
				.settingsConfig=${u}
				.hideSelectAll=${c}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`,Pr=Yt`
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
`,Br=({settingsConfig:n})=>{const{columns:e,collapsed:t}=n,r=e.filter(o=>!t.some(i=>i.name===o.name));return m`<div class="skeleton">
		${Array.from({length:5},()=>m`<div>
					<div class="checkbox"></div>
					${r.map(o=>m`<div
								class="cell"
								part=${`cell-${o.name}`}
								name=${o.name}
							></div>`)}
				</div>`)}
	</div>`};customElements.define("cosmoz-omnitable-skeleton",L(Br,{styleSheets:[Pr]}));const Gr=(n,e)=>{const{settingsConfig:t}=n,{processedItems:r,dataIsValid:o,filterIsTooStrict:i,loading:a,displayEmptyGroups:l,compareItemsFn:s,setSelectedItems:u,renderItem:c,renderGroup:d,error:h}=e;return m`${D(!a&&!o&&!h,()=>m`<div class="tableContent-empty">
					<slot name="empty-set-message">
						<iron-icon icon="icons:announcement"></iron-icon>
						<div class="tableContent-empty-message">
							<h3>${_("Working set empty")}</h3>
							<p>${_("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${D(i,()=>m`<div class="tableContent-empty">
					<iron-icon icon="icons:announcement"></iron-icon>
					<div>
						<h3>${_("Filter too strict")}</h3>
						<p>${_("No matches for selection")}</p>
					</div>
				</div>`)}
		${D(a&&!r.length,()=>m`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${t}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${D(a&&r.length,()=>m`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${D(h,()=>m`<div class="tableContent-empty overlay">
					<iron-icon icon="icons:error"></iron-icon>
					<div class="tableContent-empty-message">
						<h3>${_("Error loading data")}</h3>
						<p>${h.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				@selected-items-changed=${p=>u(p.detail.value)}
				.displayEmptyGroups=${l}
				.compareItemsFn=${s}
				.renderItem=${c}
				.renderGroup=${d}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`},Hr=K`
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
	${Dt}
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
`,Wr=K`
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
		padding: 0;
		background: transparent;
		color: inherit;
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
`,se=n=>{const e=parseInt(n,10);return isFinite(e)?e:void 0},qr=n=>{const{config:e}=n,{settings:t,setSettings:r,collapsed:o}=e,i=Ae({collapsed:o,settings:t.columns,setSettings:$(a=>r(l=>({...l,columns:a})),[r])});return{...e,onDown:$(a=>{a.target.closest(".pull")&&(i.handle=a.currentTarget)},[i]),onDragStart:$(a=>{const{target:l}=a,s=se(l.dataset.index);if(!i.handle?.contains(l)||s==null)return a.preventDefault();i.handle=null,a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("omnitable/sort-index",s),a.dataTransfer.setData("text/plain",s),setTimeout(()=>l.classList.add("drag"),0),l.addEventListener("dragend",u=>u.target.classList.remove("drag"),{once:!0})},[i]),onDragEnter:$(a=>{const l=a.currentTarget;l===a.target&&(a.preventDefault(),a.dataTransfer.dropEffect="move",l.classList.add("dragover"))},[]),onDragOver:$(a=>{a.preventDefault(),a.currentTarget.classList.add("dragover")},[]),onDragLeave:$(a=>{const l=a.currentTarget;l.contains(a.relatedTarget)||l.classList.remove("dragover")},[]),onDrop:$(a=>{const l=se(a.dataTransfer.getData("omnitable/sort-index")),s=se(a.currentTarget.dataset.index),{settings:u,setSettings:c}=i;a.currentTarget.classList.remove("dragover"),a.preventDefault();const d=u.slice();d.splice(s+(l>=s?0:-1),0,d.splice(l,1)[0]),c(d)},[i]),onToggle:$(a=>{const{settings:l,setSettings:s}=i,u=l.map(d=>({...d,disabled:d.disabled||i.collapsed?.some(h=>h.name===d.name)})),c=se(a.target.closest("[data-index]")?.dataset.index);u.splice(c,1,{...l[c],disabled:!a.target.checked,priority:a.target.checked?l.reduce((d,h)=>Math.max(d,h.priority),0)+1:l[c].priority}),s(u)},[i])}},Xr=[Zt({apply({availableHeight:n,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,n)}px`})}}),...en],Ur=({onDragStart:n,onDragEnter:e,onDragOver:t,onDragLeave:r,onDrop:o,onDown:i,onToggle:a,collapsed:l,filters:s})=>(u,c)=>{const d=!!l?.find(p=>p.name===u.name),h=!u.disabled&&!d;return m` <div
			class="item"
			data-index=${c}
			@mousedown=${i}
			draggable="true"
			@dragstart=${n}
			@dragenter=${e}
			@dragover=${t}
			@dragleave=${r}
			@drop=${o}
		>
			<button class="pull">${vr}</button>
			<label class="title" ?has-filter=${!Ve(s[u.name]?.filter)}
				>${u.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${h}
				@click=${a}
				.indeterminate=${d}
			/>
		</div>`},Kr=n=>{const{settings:e,settingsId:t,onSave:r,onReset:o,hasChanges:i,opened:a,setOpened:l,...s}=qr(n);return m` <div class="headline">
			${_("Sort and filter")}
			<button
				class="close"
				@click=${u=>{const c=u.currentTarget;c?.focus(),c?.blur()}}
			>
				${yr}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${a.columns}
				@click=${()=>l(u=>({...u,columns:!u.columns}))}
				part="columns columns-heading"
			>
				${_("Columns")} ${we}
			</div>
			<cosmoz-collapse
				?opened="${a.columns}"
				part="columns columns-content"
			>
				<div class="list">${e.columns?.map(Ur(s))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${a.sort}
				@click=${()=>l(u=>({...u,sort:!u.sort}))}
			>
				${_("Sort on")} ${we}
			</div>
			<cosmoz-collapse ?opened=${a.sort}> ${zr()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${a.group}
				@click=${()=>l(u=>({...u,group:!u.group}))}
				part="groups groups-heading"
			>
				${_("Group on")} ${we}
			</div>
			<cosmoz-collapse ?opened=${a.group} part="groups groups-heading"
				>${wr()}</cosmoz-collapse
			>
		</div>

		${D(t,()=>m`<div class="buttons">
					<button
						class="button reset"
						@click=${o}
						?disabled=${!i}
					>
						${_("Reset")}
					</button>
					<button class="button" @click=${r} ?disabled=${!i}>
						${_("Save")}
					</button>
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",L(Kr,{styleSheets:[De(Hr)]}));const Jr=({config:n,newLayout:e})=>m`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${Xr}"
	>
		${D(e,()=>m`<div class="headerDots" slot="button">...</div>`,()=>m` <svg
					viewBox="0 0 24 24"
					width="24"
					slot="button"
					fill="currentColor"
				>
					<circle cx="10" cy="18" r="2"></circle>
					<circle cx="10" cy="12" r="2"></circle>
					<circle cx="10" cy="6" r="2"></circle>
				</svg>`)}
		${D(n?.badge,()=>m`<div class="badge" slot="button"></div>`)}
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${n}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",L(Jr,{styleSheets:[De(Wr)]}));const pe=["sortOn","descending","groupOn","groupOnDescending"],ue=n=>e=>typeof e=="object"&&e!==null&&"name"in e&&e.name===n,Qr=(n=[],e=[],t=[])=>{const r=e.filter(a=>n.some(ue(a.name))),o=n.filter(a=>a.name!=null&&!e.some(ue(a.name))&&!t.some(ue(a.name))),i=t.filter(a=>!e.some(ue(a.name)));return[...r,...i.flatMap(a=>{const l=n.find(s=>s.name===a.name);return l?{...a,title:l.title??a.title??"",minWidth:parseInt(l.minWidth??"0",10)}:[]}),...o.map(a=>{const{name:l,title:s,priority:u,minWidth:c,width:d,flex:h}=a;return{name:l??"",title:s??"",priority:u??0,minWidth:parseInt(c??"0",10),width:parseInt(d??"0",10),flex:parseInt(h??"0",10)}})]},Yr=(n,e)=>({...e,...ke(Array.from(pe))(n),columns:n.columns?.map(ke(["name","priority","width","flex","disabled"]))}),Zr=({columns:n,settings:e,savedSettings:t,initial:r})=>({...Object.fromEntries(pe.flatMap(i=>r?.[i]!=null?[[i,r[i]]]:[])),...t?ke(Array.from(pe))(t):{},...e,columns:Qr(n,e?.columns,t?.columns)}),eo=({prefix:n="omnitable-"}={})=>({write:async(t,r)=>{const o=n+t;try{r?localStorage.setItem(o,JSON.stringify(r)):localStorage.removeItem(o)}catch(i){console.error(i)}},read:async t=>{if(t)try{return JSON.parse(localStorage.getItem(n+t))}catch(r){console.error(r)}}}),to=ht(eo),no=()=>{const n=Oe(to);return I(()=>n(),[n])},ro=(n,e,t,r)=>{const[o,i]=M(),{read:a,write:l}=no();return E(async()=>{n&&i(await a(n))},[n,a]),{settingsId:n,savedSettings:o,onSave:$(async()=>{if(!n)return;const s=Yr(e,o);await l(n,s),t(),i(s)},[e,o]),onReset:$(async s=>{t(),s.shiftKey&&(await l(n),i()),r?.()},[r]),hasChanges:e!=null}},oo=({settingsId:n,host:e})=>{const t=I(()=>Object.fromEntries(pe.map(b=>[b,e[b]])),[]),r=Ee(),o=$(()=>{r.current?.(t)},[t]),[i,a]=M(),[l,s]=M({columns:!0,sort:!0}),{savedSettings:u,...c}=ro(n,i,a,o),{enabledColumns:d}=e,h=zn(e,{enabledColumns:d}),p=I(()=>Zr({columns:h,settings:i,savedSettings:u,initial:t}),[h,i,u]),z=I(()=>p.columns.map(b=>h.find(v=>v.name===b.name)).filter(Boolean),[h,...p.columns.map(b=>b.name)]);return{...c,opened:l,setOpened:s,settings:p,columns:z,setSettings:a,resetRef:r}},ut=n=>Number.isFinite(n)?n:0,io=(n,e)=>{const t=[];let[r,o]=n.reduce(([c,d],{width:h,flex:p})=>[c+h,d+p],[0,0]),i=e-r,a=ut(i/o),l=0,s=0,u=0;for(let c=0;c<n.length;c++){const{width:d,minWidth:h,flex:p}=n[c],z=i>=0?a*p:d*i/r;if(h>d+z){l+=d,s+=h,u+=p,t[c]=h;continue}if(p===0){l+=d,s+=d,t[c]=d;continue}}r-=l,i=e-s-r,o-=u,a=ut(i/o);for(let c=0;c<n.length;c++){if(t[c]!=null)continue;const{width:d,flex:h}=n[c],p=i>=0?a*h:d*i/r;t[c]=d+p}return t},ge=Symbol("index"),ao=(n,e)=>{if(typeof n.findLastIndex=="function")return n.findLastIndex(e);for(let t=n.length-1;t>=0;t--)if(e(n[t],t,n))return t;return-1},lo=(n,e)=>{const t=ao(n,a=>a!=null&&a>0),r=(a,l)=>`.cell[name="${a}"], cosmoz-omnitable-skeleton::part(cell-${a}){width: ${Math.floor(l)}px;padding: 0 min(3px, ${l/2}px)}`,o=a=>`cosmoz-omnitable-resize-nub[name="${a}"]{display:none}`,i=a=>`cosmoz-omnitable-resize-nub[name="${a}"], .cell[name="${a}"]{display:none}`;return e.map((a,l)=>{const s=n[l];if(s==null||s===0)return i(a.name);const u=r(a.name,s);return l===t?`${u}
${o(a.name)}`:u}).join(`
`)},Vt=(n,e,t)=>{const r=n.filter(l=>!l.hidden),o=r.reduce((l,{width:s})=>l+s,0);if(r.length>1&&o>e)return Vt(r.slice(1),e,t);const i=r.reduce(([l,s],u,c)=>[Math.max(l,u.index),u.index>l?c:s],[-1,-1])[1];return i!==-1&&(r[i].flex=1),io(r,e).reduce((l,s,u)=>(l[r[u].index]=s,l),new Array(t).fill(void 0))},so=(n,e)=>n.length===0?".cell {display: none;}":lo(n,e),uo=({host:n,canvasWidth:e,layout:t,setSettings:r})=>{const o=Ee();o.current=i=>r(a=>{const l=a.columns,{detail:{newWidth:s,column:u}}=i,c=l.findIndex(p=>p.name===u.name),d=[],h=l.reduce((p,z)=>Math.max(p,z.priority),-1/0);for(let p=0;p<t.length;p++)if(d[p]={...l[p]},p<c&&t[p]&&(d[p].width=t[p],d[p].flex=0,d[p].priority=h),p===c){const z=t.reduce((b,v,F)=>F<c&&v?b-v:b,e);d[p].width=Math.min(z,Math.max(s,l[p].minWidth)),d[p].flex=0,d[p].priority=h}return{...a,columns:d}}),E(()=>{const i=a=>o.current(a);return n.addEventListener("column-resize",i),()=>n.removeEventListener("column-resize",i)},[])},co=(n,e)=>E(()=>{const t=([o])=>{o.contentRect?.width!==0&&requestAnimationFrame(()=>e(o.contentRect?.width-20-44-24))},r=new ResizeObserver(t);return r.observe(n),()=>r.unobserve(n)},[]),mo=n=>{const[e,t]=M(()=>n.getBoundingClientRect().width);return co(n,t),e},po=(n,e)=>{const t=I(()=>{let r=!1,o;const i=()=>{if(!r)return;o=requestAnimationFrame(i),n()&&(r=!1)};return{start:()=>{r=!0,cancelAnimationFrame(o),o=requestAnimationFrame(i)},stop:()=>{r=!1,cancelAnimationFrame(o)}}},[]);E(()=>{t.start()},e),E(()=>()=>t.stop(),[])},go=(n=0,e=0)=>Math.abs(n-e)<.1,ho=(n,e=1.9,t=tn)=>{const r=Ae({target:n}),o=$(()=>{if(r.tween||(r.tween=r.target),r.target.every((i,a)=>r.tween[a]===i))return t(r.tween),!0;r.tween=r.target.map((i,a)=>go(r.tween[a],i)?i:(r.tween[a]??0)+((i??0)-(r.tween[a]??0))/e||0),t(r.tween)},[]);po(o,[n])},fo=({canvasWidth:n,groupOnColumn:e,config:t,miniColumn:r})=>I(()=>{if(!Array.isArray(t)||n==null||n===0)return[];const o=t.map((i,a)=>({minWidth:i.minWidth,width:i.width,flex:i.flex,priority:i.priority,name:i.name,index:a,hidden:i.name===e?.name||i.disabled})).map(i=>r?{...i,hidden:r.name!==i.name}:i).sort(({index:i,priority:a},{index:l,priority:s})=>a===s?l-i:a-s);return Vt(o,n,o.length)},[n,e,t]),bo=({host:n,canvasWidth:e,columns:t})=>{const r=n.miniBreakpoint??480,o=I(()=>e<=r,[e,r]),i=I(()=>o?t?.filter(u=>u.mini!=null).sort((u,c)=>(u.mini??0)-(c.mini??0)):[],[t,o]),[a,...l]=i??[],s=!!a;return E(()=>{n.toggleAttribute("mini",s)},[s]),{isMini:s&&o,miniColumn:a,miniColumns:l}},xo=n=>{const e=I(()=>new CSSStyleSheet,[]);return E(()=>{n.shadowRoot.adoptedStyleSheets=[...n.shadowRoot.adoptedStyleSheets,e]},[]),e},yo=({host:n,columns:e,settings:t,setSettings:r,resizeSpeedFactor:o,sortAndGroupOptions:i})=>{const a=mo(n),{isMini:l,miniColumn:s,miniColumns:u}=bo({host:n,canvasWidth:a,columns:e}),{groupOnColumn:c}=i,d=fo({canvasWidth:a,groupOnColumn:c,miniColumn:s,config:t.columns}),h=xo(n),p=I(()=>t.columns.reduce((b,v,F)=>d[F]!=null||v.name===c?.name||v.disabled?b:[...b,e.find(g=>g.name===v.name)],[]),[e,t,d]),z=Ae({columns:t.columns});return ho(d,o,b=>{const v=so(b,z.columns);h.replace(v)}),uo({host:n,canvasWidth:a,layout:d,setSettings:b=>r(b(t))}),{isMini:l,collapsedColumns:p,miniColumns:u}},vo=({host:n,...e})=>{const{csvFilename:t="omnitable.csv",xlsxFilename:r="omnitable.xlsx",xlsxSheetname:o="Omnitable",topPlacement:i="top-end"}=n;return{csvFilename:t,xlsxFilename:r,xlsxSheetname:o,topPlacement:i,...e}},$o=({host:n,selectedItems:e,data:t,sortAndGroupOptions:r,collapsedColumns:o,settings:i,filterFunctions:a,settingS:l,filters:s,...u})=>{const c=t&&t.length>0&&e.length===t.length,d=b=>{b.target.checked?n.shadowRoot.querySelector("#groupedList").selectAll():n.shadowRoot.querySelector("#groupedList").deselectAll()},{groupOnColumn:h}=r,p=I(()=>[h,...o,...i.columns.filter(b=>b.disabled)].some(b=>b&&Object.keys(a).includes(b.name)),[a,i,o]),z=I(()=>({...l,collapsed:o,badge:p,filters:s}),[l,o,p,s]);return E(()=>{const b=n.shadowRoot.querySelector("#tableContent"),v=new ResizeObserver(F=>requestAnimationFrame(()=>{n.style.setProperty("--ot-height",F[0]?.contentRect.height+"px")}));return v.observe(b),()=>v.unobserve(b)},[]),{allSelected:c,onAllCheckboxChange:d,data:t,settingsConfig:z,filters:s,groupOnColumn:h,sortAndGroup:r.sortAndGroup,...u}},At=m`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,wo=n=>n?"groupRow groupRow-folded":"groupRow",zo=({item:n,index:e})=>t=>D(t?.length>0,()=>m`
				<div class="itemRow-minis" part="item-minis">
					${t.map(r=>m`<div
								class="itemRow-mini"
								part="item-mini item-mini-${r.name}"
							>
								${(r.renderMini??r.renderCell)(r,{item:n,index:e})}
							</div>`)}
				</div>
			`),Co=({columns:n,collapsedColumns:e,miniColumns:t,onItemClick:r,onCheckboxChange:o,dataIsValid:i,groupOnColumn:a,onItemChange:l,rowPartFn:s})=>(u,c,{selected:d,expanded:h,toggleCollapse:p})=>m`
		<div
			?selected=${d}
			part="${["itemRow",`itemRow-${u[ge]}`,s?.(u,c)].filter(Boolean).join(" ")}"
			.dataIndex=${u[ge]}
			.dataItem=${u}
			class="itemRow"
			@click=${r}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${d}
					.dataItem=${u}
					@input=${o}
					?disabled=${!i}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${n}
					.index=${c}
					.selected=${d}
					.expanded=${h}
					.item=${u}
					.groupOnColumn=${a}
					.onItemChange=${l}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${Ve(e.length)}"
					?aria-expanded="${h}"
					@click="${p}"
				>
					${At}
				</button>
			</div>
			${zo({item:u,index:c})(t)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${e}
			.item=${u}
			.index=${c}
			?selected=${d}
			?expanded=${h}
			.groupOnColumn=${a}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,So=({onCheckboxChange:n,dataIsValid:e,groupOnColumn:t})=>(r,o,{selected:i,folded:a,toggleFold:l})=>m` <div
			class="${wo(a)}"
			part="groupRow groupRow-${r[ge]}"
		>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${i}
				.dataItem=${r}
				@input=${n}
				?disabled=${!e}
			/>
			<h3 class="groupRow-label">
				<div><span>${t?.title}</span>: &nbsp;</div>
				<cosmoz-omnitable-group-row
					.column=${t}
					.item=${r.items?.[0]}
					.selected=${i}
					.folded=${a}
					.group=${r}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${r.items.length}</div>
			<button class="expand" ?aria-expanded="${a}" @click=${l}>
				${At}
			</button>
		</div>`,ko=({host:n,error:e,dataIsValid:t,processedItems:r,columns:o,collapsedColumns:i,miniColumns:a,sortAndGroupOptions:l,rowPartFn:s,...u})=>{const{loading:c=!1,displayEmptyGroups:d=!1,compareItemsFn:h}=n,p=Ee({shiftKey:!1,ctrlKey:!1}),z=$(g=>{const k=g.target.dataItem,f=g.target.checked;p.current.shiftKey?n.shadowRoot.querySelector("#groupedList").toggleSelectTo(k,f):p.current.ctrlKey?(g.target.checked=!0,n.shadowRoot.querySelector("#groupedList").selectOnly(k)):n.shadowRoot.querySelector("#groupedList").toggleSelect(k,f),g.preventDefault(),g.stopPropagation()},[]);E(()=>{const g=({shiftKey:k,ctrlKey:f})=>{p.current={shiftKey:k,ctrlKey:f}};return window.addEventListener("keydown",g),window.addEventListener("keyup",g),()=>{window.removeEventListener("keydown",g),window.removeEventListener("keyup",g)}},[]);const b=$(g=>{const k=g.composedPath();k.slice(0,k.indexOf(g.currentTarget)).find(y=>y.matches?.("a, .checkbox, .expand"))||n.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:g.currentTarget.dataItem,index:g.currentTarget.dataIndex}}))},[]),{groupOnColumn:v}=l,F=$((g,k)=>f=>Cn(n,g,k,f),[]);return{...u,processedItems:r,dataIsValid:t,filterIsTooStrict:t&&r.length<1,loading:c,compareItemsFn:h,displayEmptyGroups:d,error:e,renderItem:I(()=>Co({columns:o,collapsedColumns:i,miniColumns:a,onItemClick:b,onCheckboxChange:z,dataIsValid:t,groupOnColumn:v,onItemChange:F,rowPartFn:s}),[o,i,b,z,t,v,F,s]),renderGroup:I(()=>So({onCheckboxChange:z,dataIsValid:t,groupOnColumn:v}),[z,t,v])}},_o=(n,e)=>{if(n===e)return 0;if(n==null)return-1;if(e==null)return 1;const t=typeof n,r=typeof e;return t==="object"&&r==="object"?n.toString()<e.toString()?-1:1:t==="number"&&r==="number"?n-e:t==="string"&&r==="string"?n<e?-1:1:t==="boolean"&&r==="boolean"?n?-1:1:(console.warn("unsupported sort",t,n,r,e),0)},ze=(n,e)=>(t,r)=>_o(n(t),n(r))*(e?-1:1),Io=n=>n.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),ct=(n,e)=>{!n||!e||Object.entries(e).forEach(([t,r])=>{n[B].__ownChange=!0,n[B][t]=r,n[B].__ownChange=!1,n[B].dispatchEvent(new CustomEvent(`${Io(t)}-changed`,{bubbles:!0,detail:{value:r}}))})},Ce=(n,e)=>Object.assign(n,{[ge]:e}),ce=Symbol("unparsed"),Fo=({data:n,columns:e,hashParam:t,sortAndGroupOptions:r,noLocalSort:o,noLocalFilter:i})=>{const{groupOnColumn:a,groupOnDescending:l,sortOnColumn:s,descending:u}=r,c=$(([f,y])=>{const x=e.find(({name:w})=>w===f);return x==null?[f,void 0]:[f,y.filter&&x.serializeFilter(x,y.filter)]},[e]),d=$(([f,y])=>{const x=e.find(({name:S})=>S===f);if(x==null)return[f,{[ce]:y}];const w={filter:x.deserializeFilter(x,y)};return ct(x,w),[f,w]},[e]),[h,p]=Q({},t,{multi:!0,suffix:"-filter--",write:c,read:d}),z=$((f,y)=>p(x=>{const w=fe(y,x[f]);return ct(e.find(S=>S.name===f),w),{...x,[f]:{...x[f],...w}}}),[e,p]),b=I(()=>Object.values(h).map(f=>f.filter),[h]),v=I(()=>Object.fromEntries(e.map(f=>[f.name,!f.noLocalFilter&&f.getFilterFn(f,h[f.name]?.filter)]).filter(([,f])=>!!f)),[e,...b]),F=I(()=>!Array.isArray(n)||n.length===0?[]:Object.entries(v).length===0||i?n.slice():n.filter(f=>Object.values(v).every(y=>y(f))),[n,v,i]),g=I(()=>{if(!o&&!a&&s!=null&&s.sortOn!=null)return F.slice().sort(ze(f=>s.getComparableValue({...s,valuePath:s.sortOn},f),u));if(a!=null&&a.groupOn!=null){const f=F.reduce((y,x)=>{const w=a.getComparableValue({...a,valuePath:a.groupOn},x);if(w===void 0)return y;let S=y.find(R=>R.id===w);return S?(S.items.push(x),y):(S={id:w,name:w,items:[x]},[...y,S])},[]);return f.sort(ze(y=>a.getComparableValue({...a,valuePath:a.groupOn},y.items[0]),l)),!s||o?f:f.filter(y=>Array.isArray(y.items)).map(y=>(y.items.sort(ze(x=>s.getComparableValue({...s,valuePath:s.sortOn},x),u)),y))}return F},[F,a,l,s,u,o]),k=I(()=>{let f=0,y=0;const x=[];return g.forEach(w=>{if(Array.isArray(w.items)){Ce(w,y++),w.items.forEach(S=>{Ce(S,f++),x.push(S)});return}return Ce(w,f++),x.push(w)},[]),x},[g]);return E(()=>{p(f=>Object.values(f).some(x=>x[ce]!=null)?Object.fromEntries(Object.entries(f).map(([x,w])=>w[ce]==null?[x,w]:d([x,w[ce]]))):f)},[d]),{processedItems:g,visibleData:k,filters:h,filterFunctions:v,setFilterState:z}},Oo=n=>{const e=r=>{const o=n.data.indexOf(r);if(o<0)return null;const i=n.data.splice(o,1);if(n.data=n.data.slice(),Array.isArray(i)&&i.length>0)return i[0]},t=(r,o)=>{n.data.splice(r,1,o),n.data=n.data.slice()};return{removeItem:e,removeItems(r){const o=[];for(let i=r.length-1;i>=0;i-=1){const a=n.removeItem(r[i]);a!=null&&o.push(a)}return o},replaceItemAtIndex:t,replaceItem(r,o){const i=n.data.indexOf(r);if(i>-1)return t(i,o)},selectItem(r){n.shadowRoot.querySelector("#groupedList").select(r)},selectAll(){n.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){n.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(r){n.shadowRoot.querySelector("#groupedList").deselect(r)},isItemSelected(r){return n.shadowRoot.querySelector("#groupedList").isItemSelected(r)}}},Do=({host:n,visibleData:e,filters:t,...r})=>{const{setFilterState:o}=r,i=I(()=>Oo(n),[]);_e(r,Object.values(r)),_e(i,Object.values(i)),E(()=>{const l=s=>o(s.detail.name,u=>({...u,...s.detail.state}));return n.addEventListener("legacy-filter-changed",l),()=>n.removeEventListener("legacy-filter-changed",l)},[]),P("visibleData",e),P("sortedFilteredGroupedItems",r.sortedFilteredGroupedItems),P("selectedItems",r.selectedItems),P("sortOn",r.sortOn),P("descending",r.descending),P("isMini",r.isMini);const a=I(()=>Object.fromEntries(Object.entries(t).filter(([,{filter:l}])=>l!==void 0).map(([l,{filter:s}])=>[l,s])),[t]);P("filters",a,Object.values(a))},Vo=n=>{const{hashParam:e,settingsId:t,data:r,resizeSpeedFactor:o,noLocal:i,noLocalSort:a=i,noLocalFilter:l=i,error:s,rowPartFn:u}=n,c=oo({settingsId:t,host:n}),{settings:d,setSettings:h,columns:p,resetRef:z}=c,b=_r(p,e,d,h,z),{processedItems:v,visibleData:F,filters:g,setFilterState:k,filterFunctions:f}=Fo({data:r,columns:p,hashParam:e,sortAndGroupOptions:b,noLocalSort:a,noLocalFilter:l}),{isMini:y,collapsedColumns:x,miniColumns:w}=yo({host:n,columns:p,settings:d,setSettings:h,resizeSpeedFactor:o,sortAndGroupOptions:b}),S=r&&Array.isArray(r)&&r.length>0,[R,H]=M([]);return Do({host:n,visibleData:F,sortedFilteredGroupedItems:v,columns:p,filters:g,setFilterState:k,selectedItems:R,isMini:y,...b}),{header:$o({host:n,selectedItems:R,sortAndGroupOptions:b,dataIsValid:S,data:r,columns:p,filters:g,collapsedColumns:x,settings:d,filterFunctions:f,settingS:c,setFilterState:k,hideSelectAll:n.hideSelectAll===!0}),list:ko({host:n,error:s,dataIsValid:S,processedItems:v,setSelectedItems:H,columns:p,collapsedColumns:x,miniColumns:w,sortAndGroupOptions:b,rowPartFn:u}),footer:vo({host:n,selectedItems:R,columns:p})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||Se(this._renderFn(this._item,this._index),this)}});const Ao={group:Symbol("group")},ye=(n,e)=>(e.has(n)||e.set(n,{}),e.get(n)),Eo=(n,e)=>!!ye(n,e).expanded,Lo=(n,e)=>!!ye(n,e).folded,Ie=n=>n?n.items instanceof Array:!1,To=n=>{if(!Array.isArray(n)||n.length===0)return;const e=Array.isArray(n[0]?.items);if(!n.every(r=>Array.isArray(r.items)===e))throw new Error("Data must be homogeneous.")},Ro=(n,e,t)=>Array.isArray(n)?(To(n),n.reduce((o,i)=>{const a=i;return a.items?a.items.length?ye(i,t).folded?o.concat(i):o.concat(i,a.items.map(l=>Object.assign(l,{[Ao.group]:i}))):e?o.concat(i):o:o.concat(i)},[])):void 0,Mo=(n,...e)=>typeof n=="function"?n(...e):n,No=(n,e)=>n===e,jo=()=>{const[n,e]=M(()=>[new WeakMap]);return{setItemState:$((r,o)=>e(([i])=>{const a=ye(r,i);return Object.assign(a,Mo(o,a)),[i]}),[]),state:n[0],signal:n}},Po=()=>{const{setItemState:n,state:e,signal:t}=jo(),r=$((i,a)=>{Ie(i)&&n(i,l=>({folded:a!==void 0?a:!l.folded}))},[]),o=$((i,a)=>{Ie(i)||n(i,l=>({expanded:a!==void 0?!a:!l.expanded}))},[]);return{state:e,signal:t,toggleFold:r,toggleCollapse:o}},Bo=({initial:n,compareItemsFn:e,data:t,flatData:r})=>{const[o,i]=M(n),[a,l]=M(),s=$(g=>o.includes(g),[o]),u=$(g=>g?.items?.every(s)??!1,[s]),c=$(g=>s(g)||u(g),[s,u]),d=$(g=>{const f=g.items??[g];i(y=>[...y,...f.filter(x=>!y.includes(x))]),l(g)},[]),h=$(g=>{const f=g.items??[g];i(y=>y.filter(x=>!f.includes(x))),l(g)},[]),p=$(g=>{i(g.items?.slice()||[g]),l(g)},[]),z=$(()=>{i(t.flatMap(g=>g.items||g)),l(void 0)},[t]),b=$(()=>{i([]),l(void 0)},[]),v=$((g,k=!c(g))=>k?d(g):h(g),[c]),F=$((g,k)=>{if(!r)return;const f=a?r.findIndex(w=>e(w,a)):-1;if(f<0)return v(g,k);const[y,x]=[f,r.indexOf(g)].sort((w,S)=>w-S);r.slice(y,x+1).forEach((w,S,R)=>{S>0&&S<R.length-1&&Ie(w)||v(w,k)}),l(g)},[r,e,v]);return E(()=>i(g=>g.length>0&&r?r.filter(k=>g.find(f=>e(k,f))):g),[r]),{selectedItems:o,isItemSelected:s,isGroupSelected:u,isSelected:c,select:d,deselect:h,selectOnly:p,selectAll:z,deselectAll:b,toggleSelect:v,toggleSelectTo:F}},Go={host:{position:"relative",display:"flex",flexDirection:"column"}},Ho=n=>{const{data:e,renderItem:t,renderGroup:r,displayEmptyGroups:o,compareItemsFn:i=No}=n,{toggleFold:a,toggleCollapse:l,state:s,signal:u}=Po(),c=I(()=>Ro(e,o,s),[e,o,u]),{selectedItems:d,isItemSelected:h,isGroupSelected:p,isSelected:z,select:b,deselect:v,selectOnly:F,selectAll:g,deselectAll:k,toggleSelect:f,toggleSelectTo:y}=Bo({initial:[],compareItemsFn:i,data:e,flatData:c}),x=$((S,R)=>Array.isArray(S.items)?r(S,R,{selected:p(S,d),folded:Lo(S,s),toggleSelect:H=>f(S,typeof H=="boolean"?H:void 0),toggleFold:()=>a(S)}):t(S,R,{selected:d.includes(S),expanded:Eo(S,s),toggleSelect:H=>f(S,typeof H=="boolean"?H:void 0),toggleCollapse:()=>l(S)}),[t,r,d,f,u]);pt(()=>Object.assign(n.style,Go.host),[]),P("selectedItems",d);const w={toggleFold:a,toggleCollapse:l,isItemSelected:h,isGroupSelected:p,isSelected:z,select:b,deselect:v,selectOnly:F,selectAll:g,deselectAll:k,toggleSelect:f,toggleSelectTo:y};return _e(w,Object.values(w)),{renderRow:x,flatData:c}},Wo=({renderRow:n,flatData:e})=>nn({items:e,renderItem:(t,r)=>m`<cosmoz-grouped-list-row
				.item=${t}
				.index=${r}
				.renderFn=${n}
			></cosmoz-grouped-list-row>`}),qo=n=>Wo(Ho(n));customElements.define("cosmoz-grouped-list",L(qo,{useShadowDOM:!1}));const Xo=n=>window.ShadyCSS?.ApplyShim?.transformCssText?.(n)||n,Uo=n=>{const{header:e,list:t,footer:r}=Vo(n);return m`
		<style>
			${rn([],()=>Xo(Lr))}
		</style>

		<div class="mainContainer">
			${jr(e)}
			<div class="tableContent" id="tableContent">
				${Gr(e,t)}
			</div>
			${Nr(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`};customElements.define("cosmoz-omnitable",class extends L(Uo,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","loading","mini-breakpoint"]}){connectedCallback(){super.connectedCallback(),ve(this,"selectedItems",[]),ve(this,"visibleData",[]),ve(this,"sortedFilteredGroupedItems",[])}});const he=`
	<slot name="actions" slot="actions"></slot>
`;m(Object.assign([he],{raw:[he]}));Fe(Object.assign([he],{raw:[he]}));const Ko=()=>m`<style>
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
</style>`;customElements.define("cz-spinner",L(Ko));const dt=(n,e,t)=>{let r=String(n),o=-1;const i=t,a=e-r.length;for(;++o<a;)r=i+r;return r},O=(n,e)=>Math.floor(Math.random()*(e-n+1))+n,Jo=()=>"2015-"+dt(O(1,12),2,"0")+"-"+dt(O(1,28),2,"0"),Qo=()=>{const n=O(0,20);return n===1?new Date(2015,3,2,14,26,10,299):n===2?new Date(2016,4,2,10,9,10,444):n===3?new Date(2016,4,2,10,9,10,443):n===4?new Date(2016,4,2,10,9,10,442):new Date(O(2014,2017),O(1,12),O(1,28),O(0,23),O(0,59),O(0,59),O(0,999))},Et=(n,e,t)=>{const r=O(n,e),o=[],i=["Lorem ipsum dolor sit amet","Nunc tristique","Curabitur vestibulum","Cras laoreet","Himenaeos","maximus diam purus at mauris"],a=["SEK","USD","EUR","AUD"];let l=0;for(let s=0;s<r;s+=1){const u="Group "+s,c=s*2+1;for(let d=0;d<c;d+=1){const h=[],p=[],z=l%10;for(let b=0;b<z;b+=1)h.push("Item "+b),p.push({name:"Item "+b,value:"item-value-"+b});o.push({id:l,name:u+" item "+d,value:O(0,1e4),bool:O(0,100)>50,object:{value:O(0,1e4),label:"Random string "+O(1,t)},sub:{subProp:i[l%i.length]},randomString:"Random string "+O(1,t),randomString2:"Random string 2 "+O(1,t),randomString3:"Random string 3 "+O(1,t),randomString4:"Random string 4 "+O(1,t),date:Qo(),dateJSON:Jo(),amount:{amount:O(10,100),currency:a[l%a.length]},group:u,list:h,objectList:p}),l+=1}}return o},ti={title:"Components/ComsmozOmnitableFullDemo",component:"cosmoz-omnitable",tags:["autodocs"],args:{loading:!1,locale:"en",sortOn:"",groupOn:"",descending:!1,groupOnDescending:!1,hashParam:"",settingsId:"",selectedItems:[],disabled:!1},argTypes:{loading:{control:"boolean",description:"Show loading state",table:{defaultValue:{summary:"false"}}},locale:{control:"select",options:["en","fr","sv"],description:"Language locale",table:{defaultValue:{summary:"en"}}},selectedItems:{control:"object",description:"Show selected items"},data:{control:"object",description:"Show specified items"},sortOn:{control:"text",description:'Column property name to sort on (e.g., "amount", "date", "id")'},groupOn:{control:"text",description:'Column property name to group on (e.g., "amount", "date", "id")'},descending:{control:"boolean",description:"Sort on descending"},groupOnDescending:{control:"boolean",description:"Group on descending"},hashParam:{control:"text",description:"Hash parameter for URL state management"},settingsId:{control:"text",description:"ID for storing table settings"},disabled:{control:"boolean",description:"Hide one column",table:{defaultValue:{summary:"false"}}}},render:n=>m`
            <style>
                cosmoz-omnitable {
                    min-height: 400px;
                }
            </style>

            <cosmoz-omnitable
                id="omnitable"
                .loading=${n.loading}
                .data=${n.data}
                .selectedItems=${n.selectedItems}
                hash-param=${n.hashParam}
                sort-on=${n.sortOn}
                group-on=${n.groupOn}
                .descending=${n.descending}
                .group-on-descending=${n.groupOnDescending}
                settings-id=${n.settingsId}
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
                    locale=${n.locale}
                    rates='{"EUR": 1, "USD":0.8169982616, "AUD":0.6529827192, "SEK": 0.1019271438}'
                ></cosmoz-omnitable-column-amount>

                <cosmoz-omnitable-column-date
                    title="Date"
                    name="date"
                    value-path="date"
                    locale=${n.locale}
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

                <cosmoz-omnitable-column-date
                    title="DateJSON"
                    name="datejson"
                    value-path="dateJSON"
                    locale=${n.locale}
                ></cosmoz-omnitable-column-date>

                <cosmoz-omnitable-column-time
                    title="Time"
                    name="time"
                    value-path="date"
                    locale=${n.locale}
                ></cosmoz-omnitable-column-time>

                <cosmoz-omnitable-column-datetime
                    title="Datetime"
                    name="datetime"
                    value-path="date"
                    locale=${n.locale}
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
                    locale=${n.locale}
                    priority="1"
                ></cosmoz-omnitable-column-number>

                <paper-button slot="actions" on-run="removeItems">
                    <iron-icon icon="delete"></iron-icon>
                    <span>Remove items</span>
                </paper-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log("Current hash:",window.location.hash)}},ni={args:{data:Et(10,10,10)}},ri={args:{data:Et(2,2,10)}},oi={args:{data:[]}},ii=["TableWithLargeData","TableWithSmallData","TableWithNoData"];export{ni as TableWithLargeData,oi as TableWithNoData,ri as TableWithSmallData,ii as __namedExportsOrder,ti as default};
