import{x as d,B as Ie,E as xt,b as Pt}from"./iframe-BzsO-atj.js";import{t as K,c as E,g as C,P as A,u as M,a as vt,m as yt,s as Bt,D as Gt,b as Ht,e as Wt,i as ve,h as Ae,d as Je,f as qt,r as Xt,j as Ut,k as _,l as Kt,n as ye,p as he,o as D,q as Yt,v as $e,w as Jt,x as Qt,y as Zt,T as en,z as T,A as Fe,B as tn,C as nn,E as rn,F as $,G as on,H as an,I as $t,J as Ee,K as I,L as wt,M as Te,N as ln,O as zt,Q as sn,R as Le,S as un,U as Qe,V as cn,W as Re,X as dn,Y as mn,Z as Oe,_ as Me,$ as pn,a0 as De,a1 as P,a2 as gn,a3 as ze,a4 as hn}from"./cosmoz-collapse-spSvJ_No.js";import"./preload-helper-D9Z9MdNV.js";const fn=K`
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
`,bn=()=>d`
	<style>
		${fn}
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
`;customElements.define("cosmoz-clear-button",E(bn));const U=({valuePath:n},e)=>C(e,n),xn=U,vn=U,yn=({valuePath:n},e)=>t=>{const r=C(t,n);return r==null?!1:r.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},$n=(n,e)=>e===""||e==null?null:e,N=n=>class extends n{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:"right"},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return U(e,t)}toXlsxValue(e,t){return xn(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return $n(e,t)}deserializeFilter(e,t){return t==null?null:typeof t=="string"?window.decodeURIComponent(t):t}getComparableValue(e,t){return vn(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,r){super._propertiesChanged(e,t,r),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},wn=n=>e=>n(t=>{if(t.inputValue===void 0&&e.target.value==="")return t;clearTimeout(t.t);const r=setTimeout(()=>n(o=>({...o,filter:o.inputValue})),1e3);return{...t,inputValue:e.target.value,t:r}}),zn=n=>()=>n(e=>({...e,filter:e.inputValue})),Cn=n=>e=>{e.keyCode===13&&(e.preventDefault(),n(t=>({...t,filter:t.inputValue})))},Sn=n=>e=>n(t=>({...t,headerFocused:e.detail.value})),kn=n=>()=>n(e=>({...e,filter:null,inputValue:null})),_n=n=>n!=null&&n!=="";class In extends N(A){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===""))return yn(e,t)}renderCell(e,{item:t}){return d`<span class="default-column">${U(e,t)}</span>`}renderEditCell(e,{item:t},r){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${U(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:r,headerFocused:o},i){return d`<cosmoz-input
			label=${e.title}
			.value=${r??t}
			@value-changed=${wn(i)}
			focused=${o}
			@focused-changed=${Sn(i)}
			@keydown=${Cn(i)}
			@blur=${zn(i)}
		>
			<cosmoz-clear-button
				suffix
				slot="suffix"
				?visible=${_n(t)}
				light
				@click=${kn(i)}
			></cosmoz-clear-button>
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",In);const B=Symbol("column"),Fn=n=>{let e=!0;const t=n.map(r=>r.name);return n.forEach(r=>{r.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",r))}),n.forEach(r=>{t.indexOf(r.name)!==t.lastIndexOf(r.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",r))}),e},On=n=>{const e=n.valuePath??n.name;return{name:n.name,title:n.title,valuePath:e,groupOn:n.groupOn??e,sortOn:n.sortOn??e,minWidth:n.minWidth,width:n.width,flex:n.flex,priority:n.priority,getString:n.getString,getComparableValue:n.getComparableValue,serializeFilter:n.serializeFilter,deserializeFilter:n.deserializeFilter,toXlsxValue:n.toXlsxValue,renderHeader:n.renderHeader,renderCell:n.renderCell,renderEditCell:n.renderEditCell,renderGroup:n.renderGroup,cellTitleFn:n.cellTitleFn,headerTitleFn:n.headerTitleFn,getFilterFn:n.getFilterFn,headerCellClass:n.headerCellClass,cellClass:n.cellClass,editable:n.editable,values:n.values,source:yt(n.computeSource),noLocalFilter:n.noLocalFilter,mini:n.mini,renderMini:n.renderMini,loading:n.loading,externalValues:n.externalValues,computeSource:n.computeSource,trueLabel:n.trueLabel,falseLabel:n.falseLabel,valueProperty:n.valueProperty,textProperty:n.textProperty,emptyLabel:n.emptyLabel,emptyValue:n.emptyValue,min:n.min,max:n.max,locale:n.locale,autoupdate:n.autoupdate,maximumFractionDigits:n.maximumFractionDigits,minimumFractionDigits:n.minimumFractionDigits,currency:n.currency,rates:n.rates,autodetect:n.autodetect,ownerTree:n.ownerTree,keyProperty:n.keyProperty,...n.getConfig?.(n),[B]:n}},Dn=n=>n.isOmnitableColumn&&!n.hidden,Vn=n=>{const e=n.assignedElements({flatten:!0}).filter(Dn);return Fn(e)?e:[]},An=(n,e)=>(Array.isArray(e)?n.filter(r=>e.includes(r.name)):n.filter(r=>!r.disabled)).map(On),En=(n,{enabledColumns:e})=>{const[t,r]=M([]);return vt(()=>{let o;const i=n.shadowRoot.querySelector("#columnsSlot"),a=()=>{r(An(Vn(i),e))},l=()=>{cancelAnimationFrame(o),o=requestAnimationFrame(a)};return l(),i.addEventListener("slotchange",l),n.addEventListener("cosmoz-column-prop-changed",l),()=>{i.removeEventListener("slotchange",l),n.removeEventListener("cosmoz-column-prop-changed",l),cancelAnimationFrame(o)}},[e]),t},Ct=(n,e)=>Array.isArray(n)?n.map(t=>C(t,e)).filter((t,r,o)=>t!=null&&o.indexOf(t)===r):void 0,Q=({externalValues:n,values:e,valuePath:t},r)=>{if(n)return n;if(typeof e=="function")return e;if(t!==void 0)return Ct(r,t)},Tn=(n,e,t,r)=>{const{valuePath:o}=e,i=o!==void 0?C(t,o):void 0;if(r===i)return;o!==void 0&&Bt(t,o,r);const a={item:t,valuePath:o,value:r,oldValue:i,column:e[B]};n.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:a}))},St=n=>n?typeof n.close=="function"?n:St(n.parentElement):null,Ne=n=>class extends n{static get properties(){return{filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,t,r){if(e==null||e==="")return;const o=typeof e=="number"?e:Number(e);if(Number.isNaN(o))return;if(r==null||t==null)return o;const i=this.toNumber(t);return i==null?o:r(o,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let r=e;return t!=null&&(r=this.get(t,e)),this.toValue(r)}renderValue(){}getInputString(e,t=this.valuePath){const r=this.toValue(this.get(t,e));return this._toInputString(r)}_computeRange(e){const t=e.base,r=Array.isArray(t)&&t.length&&t.map(o=>this.toValue(o)).filter(o=>o!=null);return!r||r.length<1?{min:null,max:null}:r.reduce((o,i)=>({min:this.toValue(i,o.min,Math.min),max:this.toValue(i,o.max,Math.max)}),{})}_computeLimit(e,t,r,o){if(!e)return;const i=t.base,a=this.toValue(r),l=this.toValue(o),s=a??this.toValue(e.min),u=l??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(u,this._fromInputString(i.max,"max"),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,"min"),Math.max),toMax:u}}_computeFilterText(e){if(e.base==null)return;const t=e.base,r=this.toValue(t.min),o=this.toValue(t.max),i=[];return r!=null&&i.push(this.renderValue(r)),i.push(" - "),o!=null&&i.push(this.renderValue(o)),i.length>1?i.join(""):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const t=this.toValue(e);return t??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){const r=e.path.split(".")[1];this.__inputChangePath=r||null,t&&(this._limitInputDebouncer=Gt.debounce(this._limitInputDebouncer,Ht.after(600),()=>{this._limitInput(),this._updateFilter()}),Wt(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const t=e.currentTarget,r=Array.from(t.parentElement.querySelectorAll("cosmoz-input")),o=r[r.findIndex(l=>l===t)+1],i=!o,a=r[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)o.focus();else{const l=this._limitInput();this._updateFilter(),l||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){const t=St(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:r}){(t==="focus"||r?.value===!0)&&setTimeout(()=>e.querySelector("cosmoz-input")?.focus(),100)}_limitInput(){const e=this._filterInput,t=this.__inputChangePath,r=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,r==null)return!1;const o=this._limit,i=t==="min"?"from":"to",a=this.get(i+"Min",o),l=this.get(i+"Max",o),s=this.toValue(r,a,Math.max),u=this.toValue(s,l,Math.min);return this.getComparableValue(r)!==this.getComparableValue(u)?(this.set(["_filterInput",t],this._toInputString(u,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,t=this.filter,r=this._fromInputString(e.min,"min"),o=this._fromInputString(e.max,"max");this.getComparableValue(r)===this.getComparableValue(t,"min")&&this.getComparableValue(o)===this.getComparableValue(t,"max")||this.set("filter",{min:r,max:o})}_filterChanged(e){if(this._filterInput==null)return;const t=this._filterInput,r=e.base,o=this._fromInputString(t.min,"min"),i=this._fromInputString(t.max,"max");this.getComparableValue(o)===this.getComparableValue(r,"min")&&this.getComparableValue(i)===this.getComparableValue(r,"max")||(this.set("_filterInput",{min:this._toInputString(r.min),max:this._toInputString(r.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(ve(e,{active:t})).then(r=>{const{min:o,max:i}=r??{};Object.assign(this,{...o!=null?{min:o}:{},...i!=null?{max:i}:{}})})}},Z=n=>class extends n{static get template(){return Ae`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),Ie(this.render(),this.$.output)}_propertiesChanged(e,t,r){super._propertiesChanged(e,t,r),requestAnimationFrame(()=>Ie(this.render(),this.$.output))}},Ln=["label","value","slot"],Rn=n=>{const{label:e,value:t,slot:r}=n,o=d`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
		?has-value=${!!t}
	>
		${t||""}
	</div>`;return Xt(o,{label:e})};customElements.define("cosmoz-omnitable-dropdown-input",E(Rn,{observedAttributes:Ln,styleSheets:[Je(qt),Je`
				:host {
					--text-align: left;
				}

				:host([text-align='right']) {
					--text-align: right;
				}

				:host([text-align='center']) {
					--text-align: center;
				}

				:host([input-focused='true']) .line::before {
					transform: none;
					transition: 0.25s transform ease;
				}

				:host([input-focused='true']) .line {
					transform: none;
					transition: 0.25s transform ease;
				}

				:host([input-focused='true']) {
					--contour-color: var(--focused-color);
					caret-color: var(--focused-color);
				}

				:host([input-focused='true']) .wrap {
					background: var(--focused-bg);
				}

				:host([input-focused='true']) label {
					color: var(--focused-color);
					opacity: 1;
				}

				#input {
					color: #737373;
					user-select: none;
					cursor: pointer;
					min-height: var(--line-height);
					text-align: var(--text-align);
				}

				label {
					text-align: var(--text-align);
					width: 100%;
					cursor: pointer;
				}

				#input:not(:placeholder-shown) + label {
					transform: none;
					background-color: unset;
				}

				#input[has-value] + label {
					transform: translateY(
							calc(var(--label-scale) * -100% + var(--label-translate-y))
						)
						scale(var(--label-scale));
					background-color: var(--cosmoz-input-floating-label-bg, var(--bg));
				}

				#input[has-value] {
					transform: translateY(var(--label-translate-y));
				}

				.wrap:has(#input[has-value]) slot[name='suffix']::slotted(*),
				.wrap:has(#input[has-value]) slot[name='prefix']::slotted(*) {
					transform: translateY(var(--label-translate-y));
				}
			`]}));const ee=({title:n,tooltip:e="",filterText:t="",onOpenedChanged:r,content:o,horizontalAlign:i="left",externalValues:a=null,headerFocused:l})=>{const s={filtered:!!t,...a!=null&&{[`external-values-${a}`]:!0}};return d`
		<style>
			.dropdown {
				outline: none;
			}

			.dropdown::part(button) {
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
				position: absolute;
				top: 100%;
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
			@focus=${r}
			@focusout=${r}
			class=${`${Ut(s)} dropdown`}
			title=${e||""}
		>
			<cosmoz-omnitable-dropdown-input
				input-focused=${l}
				slot="button"
				.label=${n}
				.placeholder=${n}
				.value=${t??""}
				text-align=${i}
			></cosmoz-omnitable-dropdown-input>

			<div class="dropdown-content" @mousedown=${u=>u.stopPropagation()}>
				${o}
			</div>
		</cosmoz-dropdown>
	`};class Mn extends Ne(Z(A)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, _formatters)"},headerFocused:{type:Boolean,value:!1}}}static get observers(){return["_valuesChanged(autodetect, currency, values)"]}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return d`
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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,content:d`
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
				`})}
		`}_valuesChanged(e,t,r){if(!Array.isArray(r)||r.length<1||!e&&t)return;const o=r.reduce((a,l)=>{if(l.currency){const s=l.currency;a[s]=(a[s]||0)+1}return a},{});let i=Object.keys(o)[0];Object.keys(o).reduce((a,l)=>{const s=Math.max(a,o[l]);return s===o[l]&&(i=l),s},0),this.set("currency",i)}toAmount(e,t,r){if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const o=this.toNumber(e.amount);if(o==null||Number.isNaN(o))return null;const i={currency:e.currency,amount:o};if(r==null||t==null)return i;const a=this.toAmount(t);if(a==null)return i;const l=this.rates||{},s=i.amount*(l[i.currency]||1),u=a.amount*(l[a.currency]||1);return this.toNumber(s,u,r)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){const r=super.getComparableValue(e,t);if(r==null)return;const o=this.toNumber(r.amount),i=this.rates;return i==null?o:o*(i[r.currency]||1)}getString(e,t=this.valuePath){const r=this.toValue(this.get(t,e));return r===void 0?"":r===null?"Invalid value":this.renderValue(r)}getCurrency(e,t){const r=this.get(t,e);return r&&r.currency}getFormatter(e,t){const r=t||"",o=e+r||"",i=this._formatters=this._formatters||{};return i[o]||(i[o]=new Intl.NumberFormat(t||void 0,{style:"currency",currency:e})),i[o]}renderValue(e){const t=this.toAmount(e);return t==null?"":this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){const t=e.target,r=t.value,o=e.model.item,i=this.get(this.valuePath,o),a=Number(r),l={amount:a,currency:i.currency};this.set(this.valuePath,l,o),this._fireItemChangeEvent(o,this.valuePath,i,this.renderValue.bind(this))}_toInputString(e){const t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){const t=this.rates;if(t==null)return this._toInputString(e);const r=this.toValue(e);return r==null?null:(this.toNumber(r.amount)*(t[r.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){const r=this.toNumber(e);if(r!=null)return this.toValue({amount:r,currency:t&&this.get(["filter",t,"currency"])||this.currency})}}customElements.define("cosmoz-omnitable-amount-range-input",Mn);const L=(n,e,t)=>{if(n==null||n==="")return;const r=typeof n=="number"?n:Number(n);if(!Number.isNaN(r))return r},kt=n=>{const e=L(n);return e==null?null:e.toString()},Nn=({valuePath:n},e)=>{const t=L(n?C(e,n):e);return kt(t)},Ze=n=>{const e=kt(n);return e??""},W=({valuePath:n,maximumFractionDigits:e},t)=>{if(t==null)return;const r=n?C(t,n):t,o=L(r);if(o!=null)return e!==null?L(o.toFixed(e)):o},jn=Kt((n,e,t)=>{const r={localeMatcher:"best fit"};return e!==null&&(r.minimumFractionDigits=e),t!==null&&(r.maximumFractionDigits=t),new Intl.NumberFormat(n||void 0,r)}),et=({valuePath:n,locale:e,minimumFractionDigits:t,maximumFractionDigits:r},o)=>{const i=n?C(o,n):o;if(i==null)return"";const a=L(i);return a==null?void 0:jn(e,t,r).format(a)},Pn=(n,e)=>t=>{const r=W(n,t);if(r==null)return!1;const o=W({...n,valuePath:"min"},e),i=W({...n,valuePath:"max"},e);return!(r<(o??-1/0)||r>(i??1/0))},J=(n={},e,t,r)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const o=L(e.amount);return o==null||Number.isNaN(o)?null:{currency:e.currency,amount:o}},q=({valuePath:n,rates:e},t)=>{if(t==null)return;let r=t;n!=null&&(r=C(t,n));const o=J(e,r);if(o==null)return;const i=L(o.amount);return e==null||i==null?i:i*(e?.[o.currency]||1)},Bn=(n,e)=>t=>{const r=q(n,t);if(r===void 0)return!1;const o=q({...n,valuePath:"min"},e),i=q({...n,valuePath:"max"},e);return o===void 0||i===void 0?!0:!(r<o||r>i)},te={},Gn=(n,e)=>{const r=n+(e||"")||"";return te[r]||(te[r]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:n})),te[r]},Hn=(n,e,t)=>{const r=J(n,e);return r==null?"":Gn(r.currency,t).format(r.amount)},tt=({valuePath:n,rates:e,locale:t},r)=>{const o=J(e,n?C(r,n):void 0);return o===void 0?"":o===null?"Invalid value":Hn(e,o,t)},nt=n=>n?n.amount+n.currency:"",rt=n=>{if(n==null||n==="")return;const e=n.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(e)||e.length<0))return{amount:Number(e[1]),currency:e[2]}},Wn=({valuePath:n},e)=>n?C(e,n)?.currency:null,qn=({valuePath:n},e)=>n?C(e,n)?.amount:void 0;class Xn extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell align-right"},headerCellClass:{type:String,value:"amount-header-cell"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=q({...e,valuePath:"min"},t),o=q({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Bn(e,t)}getString(e,t){return tt(e,t)}toXlsxValue(e,t){return tt(e,t)}getComparableValue(e,t){return q(e,t)}serializeFilter({rates:e},t){if(t==null)return;const r=J(e,t.min),o=J(e,t.max);if(!(r==null&&o==null))return nt(r)+"~"+nt(o)}deserializeFilter(e,t){if(t==null||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:rt(r[1]),max:rt(r[2])}:null}renderCell(e,{item:t}){return d`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},r){return d`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>r({amount:i.target.value,currency:C(t,e.valuePath)?.currency})}
			.value=${qn(e,t)}
		>
			<div slot="suffix">${Wn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,rates:a,currency:l,autoupdate:s,autodetect:u},{filter:c},m,h){return d`<cosmoz-omnitable-amount-range-input
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
			@filter-changed=${({detail:{value:p}})=>m(z=>({...z,filter:p}))}
			@header-focused-changed=${({detail:{value:p}})=>m(z=>({...z,headerFocused:p}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return Q(e,t)}}customElements.define("cosmoz-omnitable-column-amount",Xn);const Un=(n,e)=>{if(!Array.isArray(n))return;const t=[];return n.reduce((r,o)=>Array.isArray(o)?(o.forEach(i=>{r.push(i)}),r):(r.push(o),r),[]).filter((r,o,i)=>{if(i.indexOf(r)!==o)return!1;if(e){const a=C(r,e);if(t.indexOf(a)!==-1)return!1;t.push(a)}return!0})},Kn=(n,e,t)=>{if(n==null)return[];if(Array.isArray(n))return Un(n,e);if(typeof n=="object"){const r=e??"id",o=t??"label";return Object.entries(n).map(([i,a])=>({[r]:i,[o]:a})).sort((i,a)=>i[o]<a[o]?-1:i[o]>a[o]?1:0)}return[]},je=(n,e,t)=>ye(e&&C(n,e)).map(he(t)),Pe=({valuePath:n,textProperty:e},t)=>je(t,n,e).filter(r=>r!=null).join(", "),Yn=Pe,Jn=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:r},o)=>i=>{const a=he(n),l=ye(C(i,e));return o.some(s=>l.length===0&&he(r||n)(s)===t||l.some(u=>a(u)===a(s)))},Be=n=>e=>n(t=>({...t,filter:e})),Ge=n=>e=>n(t=>({...t,headerFocused:e})),He=n=>e=>n(t=>({...t,query:e})),_t=({emptyValue:n,emptyLabel:e,emptyProperty:t,textProperty:r,valueProperty:o},i)=>{const a=Kn(i,o,r);return!e||n===void 0||!r||!(t||o)||!a?a:[{[r]:e,[t||o]:n},...a]},Qn=(n,e)=>_t(n,Ct(e,n.valuePath)),We=n=>class extends n{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Pe(e,t)}toXlsxValue(e,t){return Yn(e,t)}getComparableValue({valuePath:e,valueProperty:t},r){const o=C(r,e);return t==null?o:ye(o).reduce((a,l)=>(a.push(C(l,t)),a),[]).sort().join(" ")}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return Jn(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){return JSON.parse(decodeURIComponent(t))}computeSource(e,t){return e.externalValues||typeof e.values=="function"?async(...r)=>_t(e,await Promise.resolve(ve(e.values,...r))):Qn(e,t)}},Zn=({valuePath:n,textProperty:e,valueProperty:t},r)=>{const o=e?Yt(e):he(t),i=ye(n&&C(r,n)).map(o);return i.length>1?i.filter(Boolean).join(","):i[0]};class er extends We(N(A)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return d`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${U(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},o,i){return d`<cosmoz-autocomplete-ui
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
			.onChange=${Be(o)}
			.onFocus=${Ge(o)}
			.onText=${He(o)}
			>${D(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Zn(e,t)}}customElements.define("cosmoz-omnitable-column-autocomplete",er);const qe=(n,e)=>e.find(({value:t})=>n===t),tr=(n,e,t)=>{const r=qe(e,t);return r?r.text:n},ot=(n,e,t,r)=>tr(n,C(e,t),r),nr=({valuePath:n},e,t)=>qe(C(e,n),t),rr=n=>e=>{n(t=>({...t,filter:e?.[0]?.value??null}))},or=n=>e=>{n(t=>({...t,headerFocused:e}))},ir=n=>e=>{n(t=>({...t,query:e}))},ar=n=>e=>n(e?.[0]?.value),it=({valuePath:n,trueLabel:e,falseLabel:t},r)=>C(r,n)?e:t,lr=({valuePath:n},e)=>t=>C(t,n)===e,ne=yt((n,e)=>[{text:n,value:!0},{text:e,value:!1}]),sr=({valuePath:n,trueLabel:e,falseLabel:t},r)=>n?C(r,n)?e:t:"",ur=(n,e)=>{try{return JSON.parse(e)}catch{return null}};class cr extends N(A){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,t){return it(e,t)}renderCell(e,{item:t}){return it(e,t)}renderEditCell(e,{item:t},r){const{trueLabel:o,falseLabel:i}=e;return d`<cosmoz-autocomplete
			no-label-float
			.title=${ot(e.title,t,e.valuePath,ne(o,i))}
			.source=${ne(o,i)}
			.textProperty=${"text"}
			.value=${nr(e,t,ne(o,i))}
			.onChange=${ar(r)}
			.limit=${1}
			>${D(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:r},o,i){return d`<cosmoz-autocomplete-ui
			.label=${e.title}
			.title=${ot(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${"text"}
			.value=${qe(t,i)}
			.text=${r}
			.onChange=${rr(o)}
			.onFocus=${or(o)}
			.onText=${ir(o)}
			.limit=${1}
			>${D(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return ne(e,t)}getFilterFn(e,t){if(t!=null)return lr(e,t)}toXlsxValue(e,t){return sr(e,t)}deserializeFilter(e,t){return ur(e,t)}}customElements.define("cosmoz-omnitable-column-boolean",cr);const Xe=n=>class extends Ne(n){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"}}}toDate(e,t,r){if(e==null||e==="")return;let o=e;if(o instanceof Date||(typeof e=="string"&&(o=this.getAbsoluteISOString(o)),o=new Date(o)),Number.isNaN(o.getTime()))return null;if(r==null||t==null)return o;const i=this.toDate(t);if(i==null)return o;const a=this.getComparableValue(o),l=this.getComparableValue(i);return r(a,l)===a?o:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){const r=super.getComparableValue(e,t);if(r!=null)return this.toNumber(r.getTime())}getString(e,t=this.valuePath,r=this.formatter){const o=this.toValue(this.get(t,e));return o===void 0?"":o===null?"Invalid Date":this.renderValue(o,r)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const t=-new Date(e).getTimezoneOffset()/60;return(t<0?"-":"+")+["0",Math.abs(t)].join("").substr(-2)+":00"}renderValue(e,t=this.formatter){if(t==null)return;const r=this.toValue(e);if(r!=null)return t.format(r)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){const t=e.currentTarget,r=t.value,o=e.model.item,i=this.get(this.valuePath,o),a=this._fromInputString(r);this.set(this.valuePath,a,o),this._fireItemChangeEvent(o,this.valuePath,i,this.renderValue.bind(this))}_toLocalISOString(e){return $e(e)}};class dr extends Xe(Z(A)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return d`
			<style>
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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,content:d`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="date"
						label=${_("From date")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						.value=${this._filterInput?.min}
						@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="date"
						label=${_("Until date")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						.value=${this._filterInput?.max}
						@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
					></cosmoz-input>
				`})}
		`}_fromInputString(e,t){const r=this.toDate(e);if(r!=null)return t==="min"&&r.setHours(0,0,0,0),t==="max"&&r.setHours(23,59,59),r}_filterInputChanged(e,t){const r=e.path.split(".")[1],o=r&&e.value;if(o&&o.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}}customElements.define("cosmoz-omnitable-date-range-input",dr);const mr=n=>{const e=-new Date(n).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},Ue=n=>n.length===19?n+mr(n):n,It=n=>{if(n==null||n==="")return;let e=n;return!(e instanceof Date)&&(typeof n=="string"&&(e=Ue(e)),e=Jt(e),!e)||Number.isNaN(e.getTime())?null:e},j=({valuePath:n},e)=>{if(e==null)return;let t=e;n!=null&&(t=C(e,n));const r=It(t);if(r!=null)return L(r.getTime())},V=(n,e,t)=>{const r=It(n);return r??null},Ke=(n,e)=>{if(e==null)return;const t=V(n);if(t!=null)return e.format(t)},re={},pr=n=>{const e=n||"";return re[e]||(re[e]=new Intl.DateTimeFormat(n||void 0)),re[e]},at=({valuePath:n,locale:e},t)=>{let r=C(t,n||"");return r===void 0?"":(r=V(r),r===null?"Invalid Date":Ke(r,pr(e)))},Ft=n=>{const e=V(n);if(e==null)return null;const t=$e(e);return t==null?null:t.slice(0,10)},gr=({valuePath:n},e)=>Ft(C(e,n||"")),Ot=(n,e)=>{const t=V(n);if(t!=null)return t},lt=n=>{const e=Ft(n);return e??""},hr=({valuePath:n},e)=>{if(!n)return"";const t=V(C(e,n));if(!t)return"";const r=V($e(t));return r?(r.setHours(0,0,0,0),r):""},Dt=(n,e)=>t=>{const r=j(n,t);if(r==null)return!1;const o=j({...n,valuePath:"min"},e),i=j({...n,valuePath:"max"},e);return!(r<(o??-1/0)||r>(i??1/0))};class fr extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=j({...e,valuePath:"min"},t),o=j({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Dt(e,t)}getString(e,t){return at(e,t)}toXlsxValue(e,t){return hr(e,t)}getComparableValue(e,t){return j(e,t)}serializeFilter(e,t){if(t==null)return;const r=V(t.min),o=V(t.max);if(!(r==null&&o==null))return lt(r)+"~"+lt(o)}deserializeFilter(e,t){if(t==null||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:V(r[1]),max:V(r[2])}:null}renderCell(e,{item:t}){return d`<div class="omnitable-cell-date">
			${at(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return d`<cosmoz-input
			no-label-float
			type="date"
			@change=${i=>r(Ot(i.target.value))}
			.value=${gr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i},{filter:a},l,s){return d`<cosmoz-omnitable-date-range-input
			.title=${e}
			.filter=${a}
			.values=${s}
			.min=${t}
			.max=${r}
			.limits=${o}
			.locale=${i}
			@filter-changed=${({detail:{value:u}})=>l(c=>({...c,filter:u}))}
			@header-focused-changed=${({detail:{value:u}})=>l(c=>({...c,headerFocused:u}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return Q(e,t)}}customElements.define("cosmoz-omnitable-column-date",fr);class br extends We(N(A)){renderCell({valuePath:e,textProperty:t},{item:r}){const o=je(r,e,t).map(i=>d`<li>${i}</li>`);return d`
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
		`}renderEditCell(){return"not implemented"}renderHeader(e,{filter:t,query:r},o,i){return d`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${r}
			.onChange=${Be(o)}
			.onFocus=${Ge(o)}
			.onText=${He(o)}
			>${D(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",br);window.Cosmoz=window.Cosmoz||{};class st extends Qt(Zt(en,A)){static get template(){return Ae`
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
		`}static get is(){return"cosmoz-omnitable-column-list-data"}static get properties(){return{items:{type:Array},_expanded:{type:Boolean,value:!1},_othersCount:{type:Number,computed:"_computeOthersCount(items)"}}}static get observers(){return["_itemsLengthChanged(items.length)"]}_itemsLengthChanged(){requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent("expand",{bubbles:!0})))}_firstItem(e){if(e!=null&&e.length>0)return e[0]}_hideExpand(e,t){return e!==void 0&&e.length!==null?e.length<=2||t:!0}_hideCollapse(e,t){return e!==void 0&&e.length!==null?e.length<=2||!t:!0}_otherItems(e,t){if(e!=null&&(e.length<=2||t))return e.slice(1)}_computeOthersCount(e){if(e!=null)return e.length-1}_toggleExpand(e){this._expanded=!this._expanded,e.stopPropagation(),e.preventDefault()}}customElements.define(st.is,st);class xr extends We(N(A)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:r}){return d`<cosmoz-omnitable-column-list-data
			.items=${je(r,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},r){const o=i=>r(i.target.value.split(/,\s*/gu));return d`<cosmoz-input
			no-label-float
			type="text"
			.value=${Pe(e,t)}
			@change=${o}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},o,i){return d`<cosmoz-autocomplete-ui
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
			.onChange=${Be(o)}
			.onFocus=${Ge(o)}
			.onText=${He(o)}
			>${D(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",xr);class vr extends Ne(Z(A)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},headerFocused:{type:Boolean,value:!1}}}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return d`
			<style>
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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,content:d`
					<h3>${this.title}</h3>
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
				`})}
		`}_computeFormatter(e,t,r){const o={localeMatcher:"best fit"};return t!==null&&(o.minimumFractionDigits=t),r!==null&&(o.maximumFractionDigits=r),new Intl.NumberFormat(e||void 0,o)}getComparableValue(e,t){if(e==null)return;let r=e;if(t!=null&&(r=this.get(t,e)),r=this.toValue(r),r==null)return;const o=this.maximumFractionDigits;return o!==null?this.toValue(r.toFixed(o)):r}renderValue(e,t=this.formatter){const r=this.toNumber(e);if(r!=null)return t.format(r)}}customElements.define("cosmoz-omnitable-number-range-input",vr);class yr extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell align-right"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=W({...e,valuePath:"min"},t),o=W({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Pn(e,t)}getString(e,t){return et(e,t)}toXlsxValue({valuePath:e},t){return C(t,e)}getComparableValue(e,t){return W(e,t)}serializeFilter(e,t){if(t==null)return;const r=L(t.min),o=L(t.max);if(!(r==null&&o==null))return Ze(r)+"~"+Ze(o)}deserializeFilter(e,t){if(t==null||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:L(r[1]),max:L(r[2])}:null}renderCell(e,{item:t}){return d`<div class="omnitable-cell-number">
			${et(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return d`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>r(i.target.value)}
			.value=${Nn(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,maximumFractionDigits:a,minimumFractionDigits:l,autoupdate:s},{filter:u},c,m){return d`<cosmoz-omnitable-number-range-input
			.title=${e}
			.filter=${u}
			.values=${m}
			.min=${t}
			.max=${r}
			.limits=${o}
			.locale=${i}
			.maximumFractionDigits=${a}
			.minimumFractionDigsits=${l}
			.autoupdate=${s}
			@filter-changed=${({detail:{value:h}})=>c(p=>({...p,filter:h}))}
			@header-focused-changed=${({detail:{value:h}})=>c(p=>({...p,headerFocused:h}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return Q(e,t)}}customElements.define("cosmoz-omnitable-column-number",yr);const Vt="1970-01-01",G=(n,e,t)=>{const r=typeof n=="string"&&n.length>3&&n.length<=9?Ue(Vt+"T"+n):n;return V(r)},oe={},$r=n=>{const e=n||"";if(oe[e])return oe[e];const t={hour:"numeric",minute:"numeric",second:"numeric"};return oe[e]=new Intl.DateTimeFormat(n||void 0,t),oe[e]},ge=({valuePath:n,locale:e},t)=>{const r=G(C(t,n||""));return r===void 0?"":r===null?"Invalid Date":Ke(r,$r(e))},wr=(n,e)=>n.valuePath?ge(n,e):"",zr=n=>{const e=G(n);if(e==null)return null;const t=$e(e);return t&&t.slice(11,19)},X=({valuePath:n},e)=>{if(e==null)return;const t=zr(n==null?e:C(e,n));if(t==null)return;const r=G(Ue(Vt+"T"+t));return r==null?r:L(r.getTime())},Cr=(n,e)=>t=>{const r=X(n,t);if(r==null)return!1;const o=X({...n,valuePath:"min"},e),i=X({...n,valuePath:"max"},e);return o==null||i==null?!1:!(r<o||r>i)},ut=n=>{const e=G(n);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},ct=n=>{if(!(n==null||n===""))return G(typeof n=="string"?n.replace(/\./gu,":")+"Z":n)};class Sr extends Xe(Z(A)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return d`
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,content:d`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="time"
						label=${_("From time")}
						step=${this.filterStep}
						.value=${this._filterInput.min}
						@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="time"
						label=${_("Until time")}
						step=${this.filterStep}
						.value=${this._filterInput.max}
						@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
					></cosmoz-input>
				`})}
		`}get _fixedDate(){return"1970-01-01"}toDate(e,t,r){const o=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(o,t,r)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let r=this._toInputString(t==null?e:this.get(t,e));if(r!=null&&(r=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+r)),r!=null))return this.toNumber(r.getTime())}_timeValueChanged(e){const t=e.target,r=t.value,o=e.model.item,i=this.toDate(o.date),a=this.toDate(i!=null?i.toISOString().slice(0,10)+"T"+r:r),l=s=>s;a==null&&(this.set(this.valuePath,a,o),this._fireItemChangeEvent(o,this.valuePath,i,l.bind(this)))}_computeFormatter(e){const t={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-time-range-input",Sr);class kr extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,t){const r=X({...e,valuePath:"min"},t),o=X({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Cr(e,t)}getString(e,t){return ge(e,t)}toXlsxValue(e,t){return wr(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;const r=G(t.min),o=G(t.max);if(!(r==null&&o==null))return ut(r)+"~"+ut(o)}deserializeFilter(e,t){if(t==null||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:ct(r[1]),max:ct(r[2])}:null}renderCell(e,{item:t}){return ge(e,t)}renderEditCell(e,{item:t},r){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${ge(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,locale:o,filterStep:i},{filter:a},l,s){return d`<cosmoz-omnitable-time-range-input
			.title=${e}
			.filter=${a}
			.values=${s}
			.min=${t}
			.max=${r}
			.locale=${o}
			.filterStep=${i}
			@filter-changed=${({detail:{value:u}})=>l(c=>({...c,filter:u}))}
			@header-focused-changed=${({detail:{value:u}})=>l(c=>({...c,headerFocused:u}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return Q(e,t)}}customElements.define("cosmoz-omnitable-column-time",kr);const ie={},_r=n=>{const e=n||"";if(ie[e])return ie[e];const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return ie[e]=new Intl.DateTimeFormat(n||void 0,t),ie[e]},Ce=({valuePath:n,locale:e},t)=>{const r=V(C(t,n||""));return r===void 0?"":r===null?"Invalid Date":Ke(r,_r(e))},Ir=({valuePath:n},e)=>n?C(e,n):"",dt=n=>{const e=V(n);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},mt=n=>{if(!(n==null||n==="")&&typeof n=="string")return V(n.replace(/\./gu,":")+"Z")};class Fr extends Xe(Z(A)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return d`
			<style>
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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,content:d`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-datetime-input
						date-label=${_("From date")}
						time-label=${_("From time")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.min}
						@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
					></cosmoz-datetime-input>
					<cosmoz-datetime-input
						date-label=${_("To date")}
						time-label=${_("To time")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.max}
						@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
					></cosmoz-datetime-input>
				`})}
		`}_toInputString(e){const t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-datetime-range-input",Fr);class pt extends N(A){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=j({...e,valuePath:"min"},t),o=j({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Dt(e,t)}getString(e,t){return Ce(e,t)}toXlsxValue(e,t){return Ir(e,t)}getComparableValue(e,t){return j(e,t)}serializeFilter(e,t){if(t==null)return;const r=V(t.min),o=V(t.max);if(!(r==null&&o==null))return dt(r)+"~"+dt(o)}deserializeFilter(e,t){if(t==null||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:mt(r[1]),max:mt(r[2])}:null}renderCell(e,{item:t}){return Ce(e,t)}renderEditCell(e,{item:t},r){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(Ot(i.target.value))}
			.value=${Ce(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,filterStep:a},{filter:l},s,u){return d`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			.filter=${l}
			.values=${u}
			.min=${t}
			.max=${r}
			.limits=${o}
			.locale=${i}
			.filterStep=${a}
			@filter-changed=${({detail:{value:c}})=>s(m=>({...m,filter:c}))}
			@header-focused-changed=${({detail:{value:c}})=>s(m=>({...m,headerFocused:c}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return Q(e,t)}}customElements.define(pt.is,pt);const Or=({column:n,item:e,selected:t,folded:r,group:o})=>n?(n.renderGroup??n.renderCell)(n,{item:e,selected:t,folded:r,group:o}):xt;customElements.define("cosmoz-omnitable-group-row",E(Or,{useShadowDOM:!1}));const Dr=n=>{const{column:e}=n;return T(()=>{let t=0,r=0;const o=l=>{n.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+l.pageX-t),column:e}}))},i=()=>{document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",i)},a=l=>{t=l.pageX,r=n.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",o),document.addEventListener("pointerup",i)};return n.addEventListener("pointerdown",a),()=>n.removeEventListener("pointerdown",a)},[e]),xt};customElements.define("cosmoz-omnitable-resize-nub",E(Dr));const Vr=d`<svg
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
</svg>`,Ar=d`
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
`,Se=d` <svg
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
</svg>`,Er=d`<svg
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
</svg> `,At=({column:n,on:e,descending:t,setOn:r,setDescending:o})=>{const{name:i,title:a}=n??{};return d`<button
		class="sg"
		title=${a}
		data-on=${Fe(i===e&&(t?"desc":"asc")||void 0)}
		@click=${l=>{const s=l.currentTarget?.dataset.on;s||(r(i),o(!1)),s==="asc"?o(!0):s==="desc"&&(r(),o(!1))}}
	>
		<span>${a}</span> ${Er}
	</button>`},Et=({columns:n,...e})=>n?.map(t=>At({column:t,...e})),Tr=()=>d`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,groupOn:e,setGroupOn:t,groupOnDescending:r,setGroupOnDescending:o}={})=>Et({columns:n?.filter?.(i=>i.groupOn),on:e,setOn:t,descending:r,setDescending:o})}
	>
	</sort-and-group-consumer>
`,Lr=()=>d`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,sortOn:e,setSortOn:t,descending:r,setDescending:o}={})=>Et({columns:n?.filter?.(i=>i.sortOn),on:e,setOn:t,descending:r,setDescending:o})}
	>
	</sort-and-group-consumer>
`,Tt=n=>(e,t,r=tn)=>{const o=an(),i=new URLSearchParams(o.hash.replace("#",""));return n(e,t,r,i),"#!"+Object.assign(o,{hash:i}).href.replace(location.origin,"")},Lt=n=>n==null||n==="",Rr=Tt((n,e,t,r)=>Lt(t(e))?r.delete(n):r.set(n,t(e))),Mr=Tt((n,e,t,r)=>Object.entries(e).map(t).forEach(([o,i])=>Lt(i)?r.delete(n+o):r.set(n+o,i))),Y=(n,e,{suffix:t="",read:r,write:o,multi:i}={})=>{const[a,l]=i?[Mr,nn]:[Rr,rn],[s,u]=M(()=>e==null?n:l(e+t,r)??n),c=$(m=>u(h=>{const p=ve(m,h);return e!=null&&on(a(e+t,p,o),null,{notify:!1}),p}),[e,t,a,o]);return[s,c]},Nr=n=>[!0,"true",1,"yes","on"].includes(n),ae=n=>n===""||(n==null?void 0:Nr(n)),le=(n,e,t)=>$(r=>{n(r),t(o=>({...o,[e]:r}))},[n,e,t]),jr=(n,e,t,r,o)=>{const[i,a]=Y(t.sortOn,e,{suffix:"-sortOn"}),[l,s]=Y(ae(t.descending),e,{suffix:"-descending",read:ae}),[u,c]=Y(t.groupOn,e,{suffix:"-groupOn"}),[m,h]=Y(ae(t.groupOnDescending),e,{suffix:"-groupOnDescending",read:ae}),p=I(()=>n.find(g=>g.name===i),[n,i]),z=I(()=>n.find(g=>g.name===u),[n,u]),b={groupOn:u,setGroupOn:le(c,"groupOn",r),groupOnDescending:m,setGroupOnDescending:le(h,"groupOnDescending",r),sortOn:i,setSortOn:le(a,"sortOn",r),descending:l,setDescending:le(s,"descending",r),columns:n},y=I(()=>b,Object.values(b)),F=$(g=>{a(g.sortOn),c(g.groupOn),s(g.descending),h(g.groupOnDescending)},[]);return T(()=>void(o.current=F),[]),{...y,sortAndGroup:y,groupOnColumn:z,sortOnColumn:p}},Ye=$t();customElements.define("sort-and-group-provider",Ye.Provider);customElements.define("sort-and-group-consumer",E(({render:n})=>n(Ee(Ye)),{useShadowDOM:!1}));const Pr=({data:n,columns:e,groupOnColumn:t,filters:r,setFilterState:o,sortAndGroup:{sortOn:i,setSortOn:a,descending:l,setDescending:s}={}})=>wt(e,u=>u.name,u=>[d`<div
				class="cell ${u.headerCellClass} header-cell"
				part="cell header-cell cell-${u.name} header-cell-${u.name}"
				?hidden="${u===t}"
				title="${u.headerTitleFn(u)}"
				name="${u.name}"
			>
				${u.renderHeader(u,r[u.name]??{},c=>o(u.name,c),u.source(u,n))}
				${At({on:i,setOn:a,descending:l,setDescending:s,column:u})}
			</div>`,d`<cosmoz-omnitable-resize-nub
				.column="${u}"
				name="${u.name}"
			></cosmoz-omnitable-resize-nub>`]),Br=({columns:n,settingsConfig:e,hideSelectAll:t,...r})=>{const o=Ee(Ye);return d`
		${D(n,i=>Pr({columns:i,sortAndGroup:o,...r}))}
		${D(!t,()=>d` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`};customElements.define("cosmoz-omnitable-header-row",E(Br,{useShadowDOM:!1}));const Gr=K`
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
`,Hr=({column:n})=>d`
	<div class="label" title="${n.title}" part="item-expand-label">
		${n.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;customElements.define("cosmoz-omnitable-item-expand-line",E(Hr,{styleSheets:[Te(Gr)]}));const Wr=({columns:n,item:e,selected:t,expanded:r,groupOnColumn:o})=>ln(n,i=>d`<cosmoz-omnitable-item-expand-line
				.column=${i}
				?hidden=${i===o}
				exportparts="item-expand-label, item-expand-value"
				>${i.renderCell(i,{item:e,selected:t,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",E(Wr,{useShadowDOM:!1}));const qr=(n,e,t)=>n.editable?n.renderEditCell(n,e,t(n,e.item)):n.renderCell(n,e),Xr=({columns:n,groupOnColumn:e,item:t,index:r,selected:o,expanded:i,onItemChange:a})=>wt(n,l=>l.name,l=>d`<div
				class="cell itemRow-cell ${l.cellClass??""}"
				part="cell itemRow-cell cell-${l.name} itemRow-cell-${l.name}"
				?hidden="${l===e}"
				?editable="${l.editable}"
				title="${l.cellTitleFn(l,t)}"
				name="${l.name}"
			>
				${qr(l,{item:t,index:r,selected:o,expanded:i},a)}
			</div>`);customElements.define("cosmoz-omnitable-item-row",E(Xr,{useShadowDOM:!1}));const Rt=K`
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
`,Ur=K`
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

	${Rt}

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
`,gt=n=>{const e=n.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':n},Kr=(n,e,t)=>{const i=n.map(l=>gt(l.title)).join(";")+`
`,a=e.map(l=>n.map(s=>{const u=s.getString(s,l);return u==null?"":gt(String(u))}).join(";")+`
`);a.unshift(i),zt(new File(a,t,{type:"text/csv;charset=utf-8"}))},Yr=(n,e)=>{const t=n.map(o=>o.title),r=e.map(o=>n.map(i=>{const a=i.toXlsxValue(i,o);return a??""}));return r.unshift(t),r},Jr=(n,e,t,r)=>{const o=Yr(n,e),i=new sn(t).addSheetFromData(o,r).generate();zt(new File([i],t,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},Qr=({columns:n,selectedItems:e,csvFilename:t,xlsxFilename:r,xlsxSheetname:o,topPlacement:i})=>d`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!Le(e.length)}
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
				@click=${()=>Kr(n,e,t)}
			>
				${_("Save as CSV")}
			</button>
			<button
				@click=${()=>Jr(n,e,r,o)}
			>
				${_("Save as XLSX")}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`,Zr=({allSelected:n,onAllCheckboxChange:e,sortAndGroup:t,dataIsValid:r,data:o,columns:i,filters:a,groupOnColumn:l,setFilterState:s,settingsConfig:u,hideSelectAll:c})=>d`<sort-and-group-provider .value=${t}>
		<div class="header" id="header" part="header">
			${D(!c,()=>d`<input
						class="checkbox all"
						type="checkbox"
						.checked=${n}
						@input=${e}
						?disabled=${!r}
						part="all"
					/>`)}
			${D(c,()=>d` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`,eo=un`
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
`,to=({settingsConfig:n})=>{const{columns:e,collapsed:t}=n,r=e.filter(o=>!t.some(i=>i.name===o.name));return d`<div class="skeleton">
		${Array.from({length:5},()=>d`<div>
					<div class="checkbox"></div>
					${r.map(o=>d`<div
								class="cell"
								part=${`cell-${o.name}`}
								name=${o.name}
							></div>`)}
				</div>`)}
	</div>`};customElements.define("cosmoz-omnitable-skeleton",E(to,{styleSheets:[eo]}));const no=({slot:n,title:e,className:t,width:r="24",height:o="24",styles:i}={})=>d`
  <svg
    slot=${Fe(n)}
    class=${`delete-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${o}
    style=${Fe(i)}
  >
    ${D(e,()=>Pt`<title>${e}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`,ro=(n,e)=>{const{settingsConfig:t}=n,{processedItems:r,dataIsValid:o,filterIsTooStrict:i,loading:a,displayEmptyGroups:l,compareItemsFn:s,setSelectedItems:u,renderItem:c,renderGroup:m,error:h}=e;return d`${D(!a&&!o&&!h,()=>d`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${Qe({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
						<div class="tableContent-empty-message">
							<h3>${_("Working set empty")}</h3>
							<p>${_("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${D(i,()=>d`<div class="tableContent-empty">
					${Qe({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div>
						<h3>${_("Filter too strict")}</h3>
						<p>${_("No matches for selection")}</p>
					</div>
				</div>`)}
		${D(a&&!r.length,()=>d`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${t}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${D(a&&r.length,()=>d`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${D(h,()=>d`<div class="tableContent-empty overlay">
					${cn({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
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
				.renderGroup=${m}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`},oo=K`
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
	${Rt}
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
`,io=K`
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
`,se=n=>{const e=parseInt(n,10);return isFinite(e)?e:void 0},ao=n=>{const{config:e}=n,{settings:t,setSettings:r,collapsed:o}=e,i=Re({collapsed:o,settings:t.columns,setSettings:$(a=>r(l=>({...l,columns:a})),[r])});return{...e,onDown:$(a=>{a.target.closest(".pull")&&(i.handle=a.currentTarget)},[i]),onDragStart:$(a=>{const{target:l}=a,s=se(l.dataset.index);if(!i.handle?.contains(l)||s==null)return a.preventDefault();i.handle=null,a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("omnitable/sort-index",s),a.dataTransfer.setData("text/plain",s),setTimeout(()=>l.classList.add("drag"),0),l.addEventListener("dragend",u=>u.target.classList.remove("drag"),{once:!0})},[i]),onDragEnter:$(a=>{const l=a.currentTarget;l===a.target&&(a.preventDefault(),a.dataTransfer.dropEffect="move",l.classList.add("dragover"))},[]),onDragOver:$(a=>{a.preventDefault(),a.currentTarget.classList.add("dragover")},[]),onDragLeave:$(a=>{const l=a.currentTarget;l.contains(a.relatedTarget)||l.classList.remove("dragover")},[]),onDrop:$(a=>{const l=se(a.dataTransfer.getData("omnitable/sort-index")),s=se(a.currentTarget.dataset.index),{settings:u,setSettings:c}=i;a.currentTarget.classList.remove("dragover"),a.preventDefault();const m=u.slice();m.splice(s+(l>=s?0:-1),0,m.splice(l,1)[0]),c(m)},[i]),onToggle:$(a=>{const{settings:l,setSettings:s}=i,u=l.map(m=>({...m,disabled:m.disabled||i.collapsed?.some(h=>h.name===m.name)})),c=se(a.target.closest("[data-index]")?.dataset.index);u.splice(c,1,{...l[c],disabled:!a.target.checked,priority:a.target.checked?l.reduce((m,h)=>Math.max(m,h.priority),0)+1:l[c].priority}),s(u)},[i])}},lo=[dn({apply({availableHeight:n,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,n)}px`})}}),...mn],so=({onDragStart:n,onDragEnter:e,onDragOver:t,onDragLeave:r,onDrop:o,onDown:i,onToggle:a,collapsed:l,filters:s})=>(u,c)=>{const m=!!l?.find(p=>p.name===u.name),h=!u.disabled&&!m;return d` <div
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
			<button class="pull">${Ar}</button>
			<label class="title" ?has-filter=${!Le(s[u.name]?.filter)}
				>${u.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${h}
				@click=${a}
				.indeterminate=${m}
			/>
		</div>`},uo=n=>{const{settings:e,settingsId:t,onSave:r,onReset:o,hasChanges:i,opened:a,setOpened:l,...s}=ao(n);return d` <div class="headline">
			${_("Sort and filter")}
			<button
				class="close"
				@click=${u=>{const c=u.currentTarget;c?.focus(),c?.blur()}}
			>
				${Vr}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${a.columns}
				@click=${()=>l(u=>({...u,columns:!u.columns}))}
				part="columns columns-heading"
			>
				${_("Columns")} ${Se}
			</div>
			<cosmoz-collapse
				?opened="${a.columns}"
				part="columns columns-content"
			>
				<div class="list">${e.columns?.map(so(s))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${a.sort}
				@click=${()=>l(u=>({...u,sort:!u.sort}))}
			>
				${_("Sort on")} ${Se}
			</div>
			<cosmoz-collapse ?opened=${a.sort}> ${Lr()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${a.group}
				@click=${()=>l(u=>({...u,group:!u.group}))}
				part="groups groups-heading"
			>
				${_("Group on")} ${Se}
			</div>
			<cosmoz-collapse ?opened=${a.group} part="groups groups-heading"
				>${Tr()}</cosmoz-collapse
			>
		</div>

		${D(t,()=>d`<div class="buttons">
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
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",E(uo,{styleSheets:[Te(oo)]}));const co=({config:n,newLayout:e})=>d`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${lo}"
	>
		${D(e,()=>d`<div class="headerDots" slot="button">...</div>`,()=>d` <svg
					viewBox="0 0 24 24"
					width="24"
					slot="button"
					fill="currentColor"
				>
					<circle cx="10" cy="18" r="2"></circle>
					<circle cx="10" cy="12" r="2"></circle>
					<circle cx="10" cy="6" r="2"></circle>
				</svg>`)}
		${D(n?.badge,()=>d`<div class="badge" slot="button"></div>`)}
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${n}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",E(co,{styleSheets:[Te(io)]}));const fe=["sortOn","descending","groupOn","groupOnDescending"],ue=n=>e=>typeof e=="object"&&e!==null&&"name"in e&&e.name===n,mo=(n=[],e=[],t=[])=>{const r=e.filter(a=>n.some(ue(a.name))),o=n.filter(a=>a.name!=null&&!e.some(ue(a.name))&&!t.some(ue(a.name))),i=t.filter(a=>!e.some(ue(a.name)));return[...r,...i.flatMap(a=>{const l=n.find(s=>s.name===a.name);return l?{...a,title:l.title??a.title??"",minWidth:parseInt(l.minWidth??"0",10)}:[]}),...o.map(a=>{const{name:l,title:s,priority:u,minWidth:c,width:m,flex:h}=a;return{name:l??"",title:s??"",priority:u??0,minWidth:parseInt(c??"0",10),width:parseInt(m??"0",10),flex:parseInt(h??"0",10)}})]},po=(n,e)=>({...e,...Oe(Array.from(fe))(n),columns:n.columns?.map(Oe(["name","priority","width","flex","disabled"]))}),go=({columns:n,settings:e,savedSettings:t,initial:r})=>({...Object.fromEntries(fe.flatMap(i=>r?.[i]!=null?[[i,r[i]]]:[])),...t?Oe(Array.from(fe))(t):{},...e,columns:mo(n,e?.columns,t?.columns)}),ho=({prefix:n="omnitable-"}={})=>({write:async(t,r)=>{const o=n+t;try{r?localStorage.setItem(o,JSON.stringify(r)):localStorage.removeItem(o)}catch(i){console.error(i)}},read:async t=>{if(t)try{const r=localStorage.getItem(n+t);return r==null?void 0:JSON.parse(r)}catch(r){console.error(r)}}}),fo=$t(ho),bo=()=>{const n=Ee(fo);return I(()=>n(),[n])},xo=(n,e,t,r)=>{const[o,i]=M(),{read:a,write:l}=bo();return T(async()=>{n&&i(await a(n))},[n,a]),{settingsId:n,savedSettings:o,onSave:$(async()=>{if(!n)return;const s=po(e,o);await l(n,s),t(),i(s)},[e,o]),onReset:$(async s=>{t(),s.shiftKey&&(await l(n),i()),r?.()},[r]),hasChanges:e!=null}},vo=({settingsId:n,host:e})=>{const t=I(()=>Object.fromEntries(fe.map(b=>[b,e[b]])),[]),r=Me(),o=$(()=>{r.current?.(t)},[t]),[i,a]=M(),[l,s]=M({columns:!0,sort:!0}),{savedSettings:u,...c}=xo(n,i,a,o),{enabledColumns:m}=e,h=En(e,{enabledColumns:m}),p=I(()=>go({columns:h,settings:i,savedSettings:u,initial:t}),[h,i,u]),z=I(()=>p.columns.map(b=>h.find(y=>y.name===b.name)).filter(Boolean),[h,...p.columns.map(b=>b.name)]);return{...c,opened:l,setOpened:s,settings:p,columns:z,setSettings:a,resetRef:r}},ht=n=>Number.isFinite(n)?n:0,yo=(n,e)=>{const t=[];let[r,o]=n.reduce(([c,m],{width:h,flex:p})=>[c+h,m+p],[0,0]),i=e-r,a=ht(i/o),l=0,s=0,u=0;for(let c=0;c<n.length;c++){const{width:m,minWidth:h,flex:p}=n[c],z=i>=0?a*p:m*i/r;if(h>m+z){l+=m,s+=h,u+=p,t[c]=h;continue}if(p===0){l+=m,s+=m,t[c]=m;continue}}r-=l,i=e-s-r,o-=u,a=ht(i/o);for(let c=0;c<n.length;c++){if(t[c]!=null)continue;const{width:m,flex:h}=n[c],p=i>=0?a*h:m*i/r;t[c]=m+p}return t},be=Symbol("index"),$o=(n,e)=>{if(typeof n.findLastIndex=="function")return n.findLastIndex(e);for(let t=n.length-1;t>=0;t--)if(e(n[t],t,n))return t;return-1},wo=(n,e)=>{const t=$o(n,a=>a!=null&&a>0),r=(a,l)=>`.cell[name="${a}"], cosmoz-omnitable-skeleton::part(cell-${a}){width: ${Math.floor(l)}px;padding: 0 min(3px, ${l/2}px)}`,o=a=>`cosmoz-omnitable-resize-nub[name="${a}"]{display:none}`,i=a=>`cosmoz-omnitable-resize-nub[name="${a}"], .cell[name="${a}"]{display:none}`;return e.map((a,l)=>{const s=n[l];if(s==null||s===0)return i(a.name);const u=r(a.name,s);return l===t?`${u}
${o(a.name)}`:u}).join(`
`)},Mt=(n,e,t)=>{const r=n.filter(l=>!l.hidden),o=r.reduce((l,{width:s})=>l+s,0);if(r.length>1&&o>e)return Mt(r.slice(1),e,t);const i=r.reduce(([l,s],u,c)=>[Math.max(l,u.index),u.index>l?c:s],[-1,-1])[1];return i!==-1&&(r[i].flex=1),yo(r,e).reduce((l,s,u)=>(l[r[u].index]=s,l),new Array(t).fill(void 0))},zo=(n,e)=>n.length===0?".cell {display: none;}":wo(n,e),Co=({host:n,canvasWidth:e,layout:t,setSettings:r})=>{const o=Me();o.current=i=>r(a=>{const l=a.columns,{detail:{newWidth:s,column:u}}=i,c=l.findIndex(p=>p.name===u.name),m=[],h=l.reduce((p,z)=>Math.max(p,z.priority),-1/0);for(let p=0;p<t.length;p++)if(m[p]={...l[p]},p<c&&t[p]&&(m[p].width=t[p],m[p].flex=0,m[p].priority=h),p===c){const z=t.reduce((b,y,F)=>F<c&&y?b-y:b,e);m[p].width=Math.min(z,Math.max(s,l[p].minWidth)),m[p].flex=0,m[p].priority=h}return{...a,columns:m}}),T(()=>{const i=a=>o.current?.(a);return n.addEventListener("column-resize",i),()=>n.removeEventListener("column-resize",i)},[])},So=(n,e)=>T(()=>{const t=([o])=>{o.contentRect?.width!==0&&requestAnimationFrame(()=>e(o.contentRect?.width-20-44-24))},r=new ResizeObserver(t);return r.observe(n),()=>r.unobserve(n)},[]),ko=n=>{const[e,t]=M(()=>n.getBoundingClientRect().width);return So(n,t),e},_o=(n,e)=>{const t=I(()=>{let r=!1,o;const i=()=>{if(!r)return;o=requestAnimationFrame(i),n()&&(r=!1)};return{start:()=>{r=!0,cancelAnimationFrame(o),o=requestAnimationFrame(i)},stop:()=>{r=!1,cancelAnimationFrame(o)}}},[]);T(()=>{t.start()},e),T(()=>()=>t.stop(),[])},Io=(n=0,e=0)=>Math.abs(n-e)<.1,Fo=(n,e=1.9,t=pn)=>{const r=Re({target:n}),o=$(()=>{if(r.tween||(r.tween=r.target),r.target.every((i,a)=>r.tween[a]===i))return t(r.tween),!0;r.tween=r.target.map((i,a)=>Io(r.tween[a],i)?i:(r.tween[a]??0)+((i??0)-(r.tween[a]??0))/e||0),t(r.tween)},[]);_o(o,[n])},Oo=({canvasWidth:n,groupOnColumn:e,config:t,miniColumn:r})=>I(()=>{if(!Array.isArray(t)||n==null||n===0)return[];const o=t.map((i,a)=>({minWidth:i.minWidth,width:i.width,flex:i.flex,priority:i.priority,name:i.name,index:a,hidden:i.name===e?.name||i.disabled})).map(i=>r?{...i,hidden:r.name!==i.name}:i).sort(({index:i,priority:a},{index:l,priority:s})=>a===s?l-i:a-s);return Mt(o,n,o.length)},[n,e,t]),Do=({host:n,canvasWidth:e,columns:t})=>{const r=n.miniBreakpoint??480,o=I(()=>e<=r,[e,r]),i=I(()=>o?t?.filter(u=>u.mini!=null).sort((u,c)=>(u.mini??0)-(c.mini??0)):[],[t,o]),[a,...l]=i??[],s=!!a;return T(()=>{n.toggleAttribute("mini",s)},[s]),{isMini:s&&o,miniColumn:a,miniColumns:l}},Vo=n=>{const e=I(()=>new CSSStyleSheet,[]);return T(()=>{n.shadowRoot.adoptedStyleSheets=[...n.shadowRoot.adoptedStyleSheets,e]},[]),e},Ao=({host:n,columns:e,settings:t,setSettings:r,resizeSpeedFactor:o,sortAndGroupOptions:i})=>{const a=ko(n),{isMini:l,miniColumn:s,miniColumns:u}=Do({host:n,canvasWidth:a,columns:e}),{groupOnColumn:c}=i,m=Oo({canvasWidth:a,groupOnColumn:c,miniColumn:s,config:t.columns}),h=Vo(n),p=I(()=>t.columns.reduce((b,y,F)=>m[F]!=null||y.name===c?.name||y.disabled?b:[...b,e.find(g=>g.name===y.name)],[]),[e,t,m]),z=Re({columns:t.columns});return Fo(m,o,b=>{const y=zo(b,z.columns);h.replace(y)}),Co({host:n,canvasWidth:a,layout:m,setSettings:b=>r(b(t))}),{isMini:l,collapsedColumns:p,miniColumns:u}},Eo=({host:n,...e})=>{const{csvFilename:t="omnitable.csv",xlsxFilename:r="omnitable.xlsx",xlsxSheetname:o="Omnitable",topPlacement:i="top-end"}=n;return{csvFilename:t,xlsxFilename:r,xlsxSheetname:o,topPlacement:i,...e}},To=({host:n,selectedItems:e,data:t,sortAndGroupOptions:r,collapsedColumns:o,settings:i,filterFunctions:a,settingS:l,filters:s,...u})=>{const c=t&&t.length>0&&e.length===t.length,m=b=>{b.target.checked?n.shadowRoot.querySelector("#groupedList").selectAll():n.shadowRoot.querySelector("#groupedList").deselectAll()},{groupOnColumn:h}=r,p=I(()=>[h,...o,...i.columns.filter(b=>b.disabled)].some(b=>b&&Object.keys(a).includes(b.name)),[a,i,o]),z=I(()=>({...l,collapsed:o,badge:p,filters:s}),[l,o,p,s]);return T(()=>{const b=n.shadowRoot.querySelector("#tableContent"),y=new ResizeObserver(F=>requestAnimationFrame(()=>{n.style.setProperty("--ot-height",F[0]?.contentRect.height+"px")}));return y.observe(b),()=>y.unobserve(b)},[]),{allSelected:c,onAllCheckboxChange:m,data:t,settingsConfig:z,filters:s,groupOnColumn:h,sortAndGroup:r.sortAndGroup,...u}},Nt=d`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,Lo=n=>n?"groupRow groupRow-folded":"groupRow",Ro=({item:n,index:e})=>t=>D(t?.length>0,()=>d`
				<div class="itemRow-minis" part="item-minis">
					${t.map(r=>d`<div
								class="itemRow-mini"
								part="item-mini item-mini-${r.name}"
							>
								${(r.renderMini??r.renderCell)(r,{item:n,index:e})}
							</div>`)}
				</div>
			`),Mo=({columns:n,collapsedColumns:e,miniColumns:t,onItemClick:r,onCheckboxChange:o,dataIsValid:i,groupOnColumn:a,onItemChange:l,rowPartFn:s})=>(u,c,{selected:m,expanded:h,toggleCollapse:p})=>d`
		<div
			?selected=${m}
			part="${["itemRow",`itemRow-${u[be]}`,s?.(u,c)].filter(Boolean).join(" ")}"
			.dataIndex=${u[be]}
			.dataItem=${u}
			class="itemRow"
			@click=${r}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${m}
					.dataItem=${u}
					@input=${o}
					?disabled=${!i}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${n}
					.index=${c}
					.selected=${m}
					.expanded=${h}
					.item=${u}
					.groupOnColumn=${a}
					.onItemChange=${l}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${Le(e.length)}"
					?aria-expanded="${h}"
					@click="${p}"
				>
					${Nt}
				</button>
			</div>
			${Ro({item:u,index:c})(t)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${e}
			.item=${u}
			.index=${c}
			?selected=${m}
			?expanded=${h}
			.groupOnColumn=${a}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,No=({onCheckboxChange:n,dataIsValid:e,groupOnColumn:t})=>(r,o,{selected:i,folded:a,toggleFold:l})=>d` <div
			class="${Lo(a)}"
			part="groupRow groupRow-${r[be]}"
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
				${Nt}
			</button>
		</div>`,jo=({host:n,error:e,dataIsValid:t,processedItems:r,columns:o,collapsedColumns:i,miniColumns:a,sortAndGroupOptions:l,rowPartFn:s,...u})=>{const{loading:c=!1,displayEmptyGroups:m=!1,compareItemsFn:h}=n,p=Me({shiftKey:!1,ctrlKey:!1}),z=$(g=>{const k=g.target.dataItem,f=g.target.checked;p.current.shiftKey?n.shadowRoot.querySelector("#groupedList").toggleSelectTo(k,f):p.current.ctrlKey?(g.target.checked=!0,n.shadowRoot.querySelector("#groupedList").selectOnly(k)):n.shadowRoot.querySelector("#groupedList").toggleSelect(k,f),g.preventDefault(),g.stopPropagation()},[]);T(()=>{const g=({shiftKey:k,ctrlKey:f})=>{p.current={shiftKey:k,ctrlKey:f}};return window.addEventListener("keydown",g),window.addEventListener("keyup",g),()=>{window.removeEventListener("keydown",g),window.removeEventListener("keyup",g)}},[]);const b=$(g=>{const k=g.composedPath();k.slice(0,k.indexOf(g.currentTarget)).find(v=>v.matches?.("a, .checkbox, .expand"))||n.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:g.currentTarget.dataItem,index:g.currentTarget.dataIndex}}))},[]),{groupOnColumn:y}=l,F=$((g,k)=>f=>Tn(n,g,k,f),[]);return{...u,processedItems:r,dataIsValid:t,filterIsTooStrict:t&&r.length<1,loading:c,compareItemsFn:h,displayEmptyGroups:m,error:e,renderItem:I(()=>Mo({columns:o,collapsedColumns:i,miniColumns:a,onItemClick:b,onCheckboxChange:z,dataIsValid:t,groupOnColumn:y,onItemChange:F,rowPartFn:s}),[o,i,b,z,t,y,F,s]),renderGroup:I(()=>No({onCheckboxChange:z,dataIsValid:t,groupOnColumn:y}),[z,t,y])}},Po=(n,e)=>{if(n===e)return 0;if(n==null)return-1;if(e==null)return 1;const t=typeof n,r=typeof e;return t==="object"&&r==="object"?n.toString()<e.toString()?-1:1:t==="number"&&r==="number"?n-e:t==="string"&&r==="string"?n<e?-1:1:t==="boolean"&&r==="boolean"?n?-1:1:(console.warn("unsupported sort",t,n,r,e),0)},ke=(n,e)=>(t,r)=>Po(n(t),n(r))*(e?-1:1),Bo=n=>n.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),ft=(n,e)=>{!n||!e||Object.entries(e).forEach(([t,r])=>{n[B].__ownChange=!0,n[B][t]=r,n[B].__ownChange=!1,n[B].dispatchEvent(new CustomEvent(`${Bo(t)}-changed`,{bubbles:!0,detail:{value:r}}))})},_e=(n,e)=>Object.assign(n,{[be]:e}),ce=Symbol("unparsed"),Go=({data:n,columns:e,hashParam:t,sortAndGroupOptions:r,noLocalSort:o,noLocalFilter:i})=>{const{groupOnColumn:a,groupOnDescending:l,sortOnColumn:s,descending:u}=r,c=$(([f,v])=>{const x=e.find(({name:w})=>w===f);return x==null?[f,void 0]:[f,v.filter&&x.serializeFilter(x,v.filter)]},[e]),m=$(([f,v])=>{const x=e.find(({name:S})=>S===f);if(x==null)return[f,{[ce]:v}];const w={filter:x.deserializeFilter(x,v)};return ft(x,w),[f,w]},[e]),[h,p]=Y({},t,{multi:!0,suffix:"-filter--",write:c,read:m}),z=$((f,v)=>p(x=>{const w=ve(v,x[f]);return ft(e.find(S=>S.name===f),w),{...x,[f]:{...x[f],...w}}}),[e,p]),b=I(()=>Object.values(h).map(f=>f.filter),[h]),y=I(()=>Object.fromEntries(e.map(f=>[f.name,!f.noLocalFilter&&f.getFilterFn(f,h[f.name]?.filter)]).filter(([,f])=>!!f)),[e,...b]),F=I(()=>!Array.isArray(n)||n.length===0?[]:Object.entries(y).length===0||i?n.slice():n.filter(f=>Object.values(y).every(v=>v(f))),[n,y,i]),g=I(()=>{if(!o&&!a&&s!=null&&s.sortOn!=null)return F.slice().sort(ke(f=>s.getComparableValue({...s,valuePath:s.sortOn},f),u));if(a!=null&&a.groupOn!=null){const f=F.reduce((v,x)=>{const w=a.getComparableValue({...a,valuePath:a.groupOn},x);if(w===void 0)return v;let S=v.find(R=>R.id===w);return S?(S.items.push(x),v):(S={id:w,name:w,items:[x]},[...v,S])},[]);return f.sort(ke(v=>a.getComparableValue({...a,valuePath:a.groupOn},v.items[0]),l)),!s||o?f:f.filter(v=>Array.isArray(v.items)).map(v=>(v.items.sort(ke(x=>s.getComparableValue({...s,valuePath:s.sortOn},x),u)),v))}return F},[F,a,l,s,u,o]),k=I(()=>{let f=0,v=0;const x=[];return g.forEach(w=>{if(Array.isArray(w.items)){_e(w,v++),w.items.forEach(S=>{_e(S,f++),x.push(S)});return}return _e(w,f++),x.push(w)},[]),x},[g]);return T(()=>{p(f=>Object.values(f).some(x=>x[ce]!=null)?Object.fromEntries(Object.entries(f).map(([x,w])=>w[ce]==null?[x,w]:m([x,w[ce]]))):f)},[m]),{processedItems:g,visibleData:k,filters:h,filterFunctions:y,setFilterState:z}},Ho=n=>{const e=r=>{const o=n.data.indexOf(r);if(o<0)return null;const i=n.data.splice(o,1);if(n.data=n.data.slice(),Array.isArray(i)&&i.length>0)return i[0]},t=(r,o)=>{n.data.splice(r,1,o),n.data=n.data.slice()};return{removeItem:e,removeItems(r){const o=[];for(let i=r.length-1;i>=0;i-=1){const a=n.removeItem(r[i]);a!=null&&o.push(a)}return o},replaceItemAtIndex:t,replaceItem(r,o){const i=n.data.indexOf(r);if(i>-1)return t(i,o)},selectItem(r){n.shadowRoot.querySelector("#groupedList").select(r)},selectAll(){n.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){n.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(r){n.shadowRoot.querySelector("#groupedList").deselect(r)},isItemSelected(r){return n.shadowRoot.querySelector("#groupedList").isItemSelected(r)}}},Wo=({host:n,visibleData:e,filters:t,...r})=>{const{setFilterState:o}=r,i=I(()=>Ho(n),[]);De(r,Object.values(r)),De(i,Object.values(i)),T(()=>{const l=s=>o(s.detail.name,u=>({...u,...s.detail.state}));return n.addEventListener("legacy-filter-changed",l),()=>n.removeEventListener("legacy-filter-changed",l)},[]),P("visibleData",e),P("sortedFilteredGroupedItems",r.sortedFilteredGroupedItems),P("selectedItems",r.selectedItems),P("sortOn",r.sortOn),P("descending",r.descending),P("isMini",r.isMini);const a=I(()=>Object.fromEntries(Object.entries(t).filter(([,{filter:l}])=>l!==void 0).map(([l,{filter:s}])=>[l,s])),[t]);P("filters",a,Object.values(a))},qo=n=>{const{hashParam:e,settingsId:t,data:r,resizeSpeedFactor:o,noLocal:i,noLocalSort:a=i,noLocalFilter:l=i,error:s,rowPartFn:u}=n,c=vo({settingsId:t,host:n}),{settings:m,setSettings:h,columns:p,resetRef:z}=c,b=jr(p,e,m,h,z),{processedItems:y,visibleData:F,filters:g,setFilterState:k,filterFunctions:f}=Go({data:r,columns:p,hashParam:e,sortAndGroupOptions:b,noLocalSort:a,noLocalFilter:l}),{isMini:v,collapsedColumns:x,miniColumns:w}=Ao({host:n,columns:p,settings:m,setSettings:h,resizeSpeedFactor:o,sortAndGroupOptions:b}),S=r&&Array.isArray(r)&&r.length>0,[R,H]=M([]);return Wo({host:n,visibleData:F,sortedFilteredGroupedItems:y,columns:p,filters:g,setFilterState:k,selectedItems:R,isMini:v,...b}),{header:To({host:n,selectedItems:R,sortAndGroupOptions:b,dataIsValid:S,data:r,columns:p,filters:g,collapsedColumns:x,settings:m,filterFunctions:f,settingS:c,setFilterState:k,hideSelectAll:n.hideSelectAll===!0}),list:jo({host:n,error:s,dataIsValid:S,processedItems:y,setSelectedItems:H,columns:p,collapsedColumns:x,miniColumns:w,sortAndGroupOptions:b,rowPartFn:u}),footer:Eo({host:n,selectedItems:R,columns:p})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||Ie(this._renderFn(this._item,this._index),this)}});const Xo={group:Symbol("group")},we=(n,e)=>(e.has(n)||e.set(n,{}),e.get(n)),Uo=(n,e)=>!!we(n,e).expanded,Ko=(n,e)=>!!we(n,e).folded,Ve=n=>n?n.items instanceof Array:!1,Yo=n=>{if(!Array.isArray(n)||n.length===0)return;const e=Array.isArray(n[0]?.items);if(!n.every(r=>Array.isArray(r.items)===e))throw new Error("Data must be homogeneous.")},Jo=(n,e,t)=>Array.isArray(n)?(Yo(n),n.reduce((o,i)=>{const a=i;return a.items?a.items.length?we(i,t).folded?o.concat(i):o.concat(i,a.items.map(l=>Object.assign(l,{[Xo.group]:i}))):e?o.concat(i):o:o.concat(i)},[])):void 0,Qo=(n,...e)=>typeof n=="function"?n(...e):n,Zo=(n,e)=>n===e,ei=()=>{const[n,e]=M(()=>[new WeakMap]);return{setItemState:$((r,o)=>e(([i])=>{const a=we(r,i);return Object.assign(a,Qo(o,a)),[i]}),[]),state:n[0],signal:n}},ti=()=>{const{setItemState:n,state:e,signal:t}=ei(),r=$((i,a)=>{Ve(i)&&n(i,l=>({folded:a!==void 0?a:!l.folded}))},[]),o=$((i,a)=>{Ve(i)||n(i,l=>({expanded:a!==void 0?!a:!l.expanded}))},[]);return{state:e,signal:t,toggleFold:r,toggleCollapse:o}},ni=({initial:n,compareItemsFn:e,data:t,flatData:r})=>{const[o,i]=M(n),[a,l]=M(),s=$(g=>o.includes(g),[o]),u=$(g=>g?.items?.every(s)??!1,[s]),c=$(g=>s(g)||u(g),[s,u]),m=$(g=>{const f=g.items??[g];i(v=>[...v,...f.filter(x=>!v.includes(x))]),l(g)},[]),h=$(g=>{const f=g.items??[g];i(v=>v.filter(x=>!f.includes(x))),l(g)},[]),p=$(g=>{i(g.items?.slice()||[g]),l(g)},[]),z=$(()=>{i(t.flatMap(g=>g.items||g)),l(void 0)},[t]),b=$(()=>{i([]),l(void 0)},[]),y=$((g,k=!c(g))=>k?m(g):h(g),[c]),F=$((g,k)=>{if(!r)return;const f=a?r.findIndex(w=>e(w,a)):-1;if(f<0)return y(g,k);const[v,x]=[f,r.indexOf(g)].sort((w,S)=>w-S);r.slice(v,x+1).forEach((w,S,R)=>{S>0&&S<R.length-1&&Ve(w)||y(w,k)}),l(g)},[r,e,y]);return T(()=>i(g=>g.length>0&&r?r.filter(k=>g.find(f=>e(k,f))):g),[r]),{selectedItems:o,isItemSelected:s,isGroupSelected:u,isSelected:c,select:m,deselect:h,selectOnly:p,selectAll:z,deselectAll:b,toggleSelect:y,toggleSelectTo:F}},ri={host:{position:"relative",display:"flex",flexDirection:"column"}},oi=n=>{const{data:e,renderItem:t,renderGroup:r,displayEmptyGroups:o,compareItemsFn:i=Zo}=n,{toggleFold:a,toggleCollapse:l,state:s,signal:u}=ti(),c=I(()=>Jo(e,o,s),[e,o,u]),{selectedItems:m,isItemSelected:h,isGroupSelected:p,isSelected:z,select:b,deselect:y,selectOnly:F,selectAll:g,deselectAll:k,toggleSelect:f,toggleSelectTo:v}=ni({initial:[],compareItemsFn:i,data:e,flatData:c}),x=$((S,R)=>Array.isArray(S.items)?r(S,R,{selected:p(S),folded:Ko(S,s),toggleSelect:H=>f(S,typeof H=="boolean"?H:void 0),toggleFold:()=>a(S)}):t(S,R,{selected:m.includes(S),expanded:Uo(S,s),toggleSelect:H=>f(S,typeof H=="boolean"?H:void 0),toggleCollapse:()=>l(S)}),[t,r,m,f,u]);vt(()=>{Object.assign(n.style,ri.host)},[]),P("selectedItems",m);const w={toggleFold:a,toggleCollapse:l,isItemSelected:h,isGroupSelected:p,isSelected:z,select:b,deselect:y,selectOnly:F,selectAll:g,deselectAll:k,toggleSelect:f,toggleSelectTo:v};return De(w,Object.values(w)),{renderRow:x,flatData:c}},ii=({renderRow:n,flatData:e})=>gn({items:e,renderItem:(t,r)=>d`<cosmoz-grouped-list-row
				.item=${t}
				.index=${r}
				.renderFn=${n}
			></cosmoz-grouped-list-row>`}),ai=n=>ii(oi(n));customElements.define("cosmoz-grouped-list",E(ai,{useShadowDOM:!1}));const li=n=>window.ShadyCSS?.ApplyShim?.transformCssText?.(n)||n,si=n=>{const{header:e,list:t,footer:r}=qo(n);return d`
		<style>
			${hn([],()=>li(Ur))}
		</style>

		<div class="mainContainer">
			${Zr(e)}
			<div class="tableContent" id="tableContent">
				${ro(e,t)}
			</div>
			${Qr(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`};customElements.define("cosmoz-omnitable",class extends E(si,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","loading","mini-breakpoint"]}){connectedCallback(){super.connectedCallback(),ze(this,"selectedItems",[]),ze(this,"visibleData",[]),ze(this,"sortedFilteredGroupedItems",[])}});const xe=`
	<slot name="actions" slot="actions"></slot>
`;d(Object.assign([xe],{raw:[xe]}));Ae(Object.assign([xe],{raw:[xe]}));const ui=()=>d`<style>
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
</style>`;customElements.define("cz-spinner",E(ui));const bt=(n,e,t)=>{let r=String(n),o=-1;const i=t,a=e-r.length;for(;++o<a;)r=i+r;return r},O=(n,e)=>Math.floor(Math.random()*(e-n+1))+n,ci=()=>"2015-"+bt(O(1,12),2,"0")+"-"+bt(O(1,28),2,"0"),di=()=>{const n=O(0,20);return n===1?new Date(2015,3,2,14,26,10,299):n===2?new Date(2016,4,2,10,9,10,444):n===3?new Date(2016,4,2,10,9,10,443):n===4?new Date(2016,4,2,10,9,10,442):new Date(O(2014,2017),O(1,12),O(1,28),O(0,23),O(0,59),O(0,59),O(0,999))},jt=(n,e,t)=>{const r=O(n,e),o=[],i=["Lorem ipsum dolor sit amet","Nunc tristique","Curabitur vestibulum","Cras laoreet","Himenaeos","maximus diam purus at mauris"],a=["SEK","USD","EUR","AUD"];let l=0;for(let s=0;s<r;s+=1){const u="Group "+s,c=s*2+1;for(let m=0;m<c;m+=1){const h=[],p=[],z=l%10;for(let b=0;b<z;b+=1)h.push("Item "+b),p.push({name:"Item "+b,value:"item-value-"+b});o.push({id:l,name:u+" item "+m,value:O(0,1e4),bool:O(0,100)>50,object:{value:O(0,1e4),label:"Random string "+O(1,t)},sub:{subProp:i[l%i.length]},randomString:"Random string "+O(1,t),randomString2:"Random string 2 "+O(1,t),randomString3:"Random string 3 "+O(1,t),randomString4:"Random string 4 "+O(1,t),date:di(),dateJSON:ci(),amount:{amount:O(10,100),currency:a[l%a.length]},group:u,list:h,objectList:p}),l+=1}}return o},fi={title:"Components/ComsmozOmnitableFullDemo",component:"cosmoz-omnitable",tags:["autodocs"],args:{loading:!1,locale:"en",sortOn:"",groupOn:"",descending:!1,groupOnDescending:!1,hashParam:"",settingsId:"",selectedItems:[],disabled:!1},argTypes:{loading:{control:"boolean",description:"Show loading state",table:{defaultValue:{summary:"false"}}},locale:{control:"select",options:["en","fr","sv"],description:"Language locale",table:{defaultValue:{summary:"en"}}},selectedItems:{control:"object",description:"Show selected items"},data:{control:"object",description:"Show specified items"},sortOn:{control:"text",description:'Column property name to sort on (e.g., "amount", "date", "id")'},groupOn:{control:"text",description:'Column property name to group on (e.g., "amount", "date", "id")'},descending:{control:"boolean",description:"Sort on descending"},groupOnDescending:{control:"boolean",description:"Group on descending"},hashParam:{control:"text",description:"Hash parameter for URL state management"},settingsId:{control:"text",description:"ID for storing table settings"},disabled:{control:"boolean",description:"Hide one column",table:{defaultValue:{summary:"false"}}}},render:n=>d`
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
                    ${no({styles:"vertical-align: middle; fill: currentColor;"})}
                    <span>Remove items</span>
                </paper-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log("Current hash:",window.location.hash)}},de={args:{data:jt(10,10,10)}},me={args:{data:jt(2,2,10)}},pe={args:{data:[]}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...de.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...me.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...pe.parameters?.docs?.source}}};const bi=["TableWithLargeData","TableWithSmallData","TableWithNoData"];export{de as TableWithLargeData,pe as TableWithNoData,me as TableWithSmallData,bi as __namedExportsOrder,fi as default};
