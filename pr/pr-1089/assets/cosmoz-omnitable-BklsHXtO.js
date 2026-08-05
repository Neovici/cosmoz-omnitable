import{x as Gt,g as _,P as V,e as qt,D as Wt,t as Xt,a as Kt,h as bt,m as Ut,b as xt,s as Qt,c as ye,d as Yt,f as Jt,i as Qe,j as Ye,n as Zt,k as en,o as tn,l as yt,N as nn,p as rn,q as Je,r as on,u as ln,v as an,w as sn,y as un,z as vt}from"./cosmoz-collapse-Cp8zVZk6.js";import{C as q,g as T,b as d,n as F,D as cn,f as $t,F as dn,G as ve,H as Ve,I as C,k as R,x as zt,J,K as P,L as Ee,M as wt,N as $e,l as O,A as Te,u as E,o as Ze,O as K,p as ze,B as St,q as S,P as Ct,Q as Me,R as _t,S as mn,T as De,m as Re,U as pn,V as It,W as Le,X,Y as gn,s as hn}from"./iframe-Nyks0eTd.js";const fn=q`
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
`,bn=()=>d`
	<style>
		${fn}
	</style>
	${Gt({className:"icon",width:"18",height:"18"})}
`;customElements.define("cosmoz-clear-button",T(bn));const G=({valuePath:n},e)=>_(e,n),xn=G,yn=G,vn=({valuePath:n},e)=>t=>{const r=_(t,n);return r==null?!1:r.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},$n=(n,e)=>e===""||e==null?null:e,M=n=>class extends n{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:"left"},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return G(e,t)}toXlsxValue(e,t){return xn(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return $n(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t=="string")try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return yn(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,r){super._propertiesChanged(e,t,r),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},zn=n=>e=>n(t=>{if(t.inputValue===void 0&&e.target.value==="")return t;clearTimeout(t.t);const r=setTimeout(()=>n(i=>({...i,filter:i.inputValue})),1e3);return{...t,inputValue:e.target.value,t:r}}),wn=n=>()=>n(e=>({...e,filter:e.inputValue})),Sn=n=>e=>{e.keyCode===13&&(e.preventDefault(),n(t=>({...t,filter:t.inputValue})))},Cn=n=>e=>n(t=>({...t,headerFocused:e.detail.value})),_n=n=>()=>n(e=>({...e,filter:null,inputValue:null})),In=n=>n!=null&&n!=="";class Fn extends M(V){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===""))return vn(e,t)}renderCell(e,{item:t}){return d`<span class="default-column">${G(e,t)}</span>`}renderEditCell(e,{item:t},r){return d`<cosmoz-input
			variant="inline"
			type="text"
			@change=${o=>r(o.target.value)}
			.value=${G(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:r,headerFocused:i},o){return d`<cosmoz-input
			variant="inline"
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${r??t}
			@value-changed=${zn(o)}
			focused=${i}
			@focused-changed=${Cn(o)}
			@keydown=${Sn(o)}
			@blur=${wn(o)}
		>
			${F(!e.disabledFiltering,()=>d`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${In(t)}
						light
						@click=${_n(o)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",Fn);const kn=["label","value","slot","always-float-label","disabled","variant"],On=$t`
	${cn}

	.wrap {
		height: 40px;
	}

	#input {
		margin-top: -4px;
	}
`,An=n=>{const{label:e,value:t,slot:r}=n,i=d`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${t||""}
	</div>`;return dn(i,{label:e})};customElements.define("cosmoz-omnitable-dropdown-input",T(An,{observedAttributes:kn,styleSheets:[On]}));const te=({title:n,tooltip:e="",filterText:t="",onOpenedChanged:r,content:i,align:o="left",externalValues:l=null})=>{const a={filtered:!!t,...l!=null&&{[`external-values-${l}`]:!0}};return d`
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
			class=${qt({...a,dropdown:!0})}
			title=${e||""}
		>
			<cosmoz-omnitable-dropdown-input
				variant="inline"
				class="input"
				slot="button"
				.label=${n}
				.placeholder=${n}
				.value=${t??""}
				text-align=${o}
				?always-float-label=${t?.length>0}
			></cosmoz-omnitable-dropdown-input>
			<div class="dropdown-content">${i}</div>
		</cosmoz-dropdown>
	`},Ft=n=>n?typeof n.close=="function"?n:Ft(n.parentElement):null,Ne=n=>class extends n{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:"left"},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,t,r){if(e==null||e==="")return;const i=typeof e=="number"?e:Number(e);if(Number.isNaN(i))return;if(r==null||t==null)return i;const o=this.toNumber(t);return o==null?i:r(i,o)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let r=e;return t!=null&&(r=this.get(t,e)),this.toValue(r)}renderValue(){}getInputString(e,t=this.valuePath){const r=this.toValue(this.get(t,e));return this._toInputString(r)}_computeRange(e){const t=e.base,r=Array.isArray(t)&&t.length&&t.map(i=>this.toValue(i)).filter(i=>i!=null);return!r||r.length<1?{min:null,max:null}:r.reduce((i,o)=>({min:this.toValue(o,i.min,Math.min),max:this.toValue(o,i.max,Math.max)}),{})}_computeLimit(e,t,r,i){if(!e)return;const o=t.base,l=this.toValue(r),a=this.toValue(i),s=l??this.toValue(e.min),u=a??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(u,this._fromInputString(o.max,"max"),Math.min),toMin:this.toValue(s,this._fromInputString(o.min,"min"),Math.max),toMax:u}}_computeFilterText(e){if(e.base==null)return;const t=e.base,r=this.toValue(t.min),i=this.toValue(t.max),o=[];return r!=null&&o.push(this.renderValue(r)),o.push(" - "),i!=null&&o.push(this.renderValue(i)),o.length>1?o.join(""):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const t=this.toValue(e);return t??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){const r=e.path.split(".")[1];this.__inputChangePath=r||null,t&&(this._limitInputDebouncer=Wt.debounce(this._limitInputDebouncer,Xt.after(600),()=>{this._limitInput(),this._updateFilter()}),Kt(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const t=e.currentTarget,r=Array.from(t.parentElement.querySelectorAll("cosmoz-input")),i=r[r.findIndex(a=>a===t)+1],o=!i,l=r[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!o)i.focus();else{const a=this._limitInput();this._updateFilter(),a||this._closeParent(t)}break;case 9:(o&&!e.shiftKey||l&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){const t=Ft(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:r}){(t==="focus"||r?.value===!0)&&setTimeout(()=>{e.querySelector("cosmoz-input:focus")||e.querySelector("cosmoz-input")?.focus()},100)}_limitInput(){const e=this._filterInput,t=this.__inputChangePath,r=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,r==null)return!1;const i=this._limit,o=t==="min"?"from":"to",l=this.get(o+"Min",i),a=this.get(o+"Max",i),s=this.toValue(r,l,Math.max),u=this.toValue(s,a,Math.min);return this.getComparableValue(r)!==this.getComparableValue(u)?(this.set(["_filterInput",t],this._toInputString(u,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,t=this.filter,r=this._fromInputString(e.min,"min"),i=this._fromInputString(e.max,"max");this.getComparableValue(r)===this.getComparableValue(t,"min")&&this.getComparableValue(i)===this.getComparableValue(t,"max")||this.set("filter",{min:r,max:i})}_filterChanged(e){if(this._filterInput==null)return;const t=this._filterInput,r=e.base,i=this._fromInputString(t.min,"min"),o=this._fromInputString(t.max,"max");this.getComparableValue(i)===this.getComparableValue(r,"min")&&this.getComparableValue(o)===this.getComparableValue(r,"max")||(this.set("_filterInput",{min:this._toInputString(r.min),max:this._toInputString(r.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(ve(e,{active:t})).then(r=>{const{min:i,max:o}=r??{};Object.assign(this,{...i!=null?{min:i}:{},...o!=null?{max:o}:{}})})}},ne=n=>class extends n{static get template(){return bt`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();const e=this;Ve(e.render(),e.$.output)}_propertiesChanged(e,t,r){super._propertiesChanged(e,t,r);const i=this;requestAnimationFrame(()=>Ve(i.render(),i.$.output))}};class Vn extends Ne(ne(V)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, _formatters)"},headerFocused:{type:Boolean,value:!1}}}static get observers(){return["_valuesChanged(autodetect, currency, values)"]}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return d`
			${F(this.disabled,()=>d`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??""}
					></cosmoz-omnitable-dropdown-input>
				`,()=>d`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:d`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${C("Minimum amount")}
								label=${C("Min amount")}
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
								title=${C("Maximum amount")}
								label=${C("Max amount")}
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
				`)}
		`}_valuesChanged(e,t,r){if(!Array.isArray(r)||r.length<1||!e&&t)return;const i=r.reduce((l,a)=>{if(a.currency){const s=a.currency;l[s]=(l[s]||0)+1}return l},{});let o=Object.keys(i)[0];Object.keys(i).reduce((l,a)=>{const s=Math.max(l,i[a]);return s===i[a]&&(o=a),s},0),this.set("currency",o)}toAmount(e,t,r){if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const i=this.toNumber(e.amount);if(i==null||Number.isNaN(i))return null;const o={currency:e.currency,amount:i};if(r==null||t==null)return o;const l=this.toAmount(t);if(l==null)return o;const a=this.rates||{},s=o.amount*(a[o.currency]||1),u=l.amount*(a[l.currency]||1);return this.toNumber(s,u,r)===s?o:l}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){const r=super.getComparableValue(e,t);if(r==null)return;const i=this.toNumber(r.amount),o=this.rates;return o==null?i:i*(o[r.currency]||1)}getString(e,t=this.valuePath){const r=this.toValue(this.get(t,e));return r===void 0?"":r===null?"Invalid value":this.renderValue(r)}getCurrency(e,t){const r=this.get(t,e);return r&&r.currency}getFormatter(e,t){const r=t||"",i=e+r||"",o=this._formatters=this._formatters||{};return o[i]||(o[i]=new Intl.NumberFormat(t||void 0,{style:"currency",currency:e})),o[i]}renderValue(e){const t=this.toAmount(e);return t==null?"":this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){const t=e.target,r=t.value,i=e.model.item,o=this.get(this.valuePath,i),l=Number(r),a={amount:l,currency:o.currency};this.set(this.valuePath,a,i),this._fireItemChangeEvent(i,this.valuePath,o,this.renderValue.bind(this))}_toInputString(e){const t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){const t=this.rates;if(t==null)return this._toInputString(e);const r=this.toValue(e);return r==null?null:(this.toNumber(r.amount)*(t[r.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){const r=this.toNumber(e);if(r!=null)return this.toValue({amount:r,currency:t&&this.get(["filter",t,"currency"])||this.currency})}}customElements.define("cosmoz-omnitable-amount-range-input",Vn);const D=(n,e,t)=>{if(n==null||n==="")return;const r=typeof n=="number"?n:Number(n);if(!Number.isNaN(r))return r},kt=n=>{const e=D(n);return e==null?null:e.toString()},En=({valuePath:n},e)=>{const t=D(n?_(e,n):e);return kt(t)},et=n=>{const e=kt(n);return e??""},U=({valuePath:n,maximumFractionDigits:e},t)=>{if(t==null)return;const r=n?_(t,n):t,i=D(r);if(i!=null)return e!==null?D(i.toFixed(e)):i},Tn=Ut((n,e,t)=>{const r={localeMatcher:"best fit"};return e!==null&&(r.minimumFractionDigits=e),t!==null&&(r.maximumFractionDigits=t),new Intl.NumberFormat(n||void 0,r)}),tt=({valuePath:n,locale:e,minimumFractionDigits:t,maximumFractionDigits:r},i)=>{const o=n?_(i,n):i;if(o==null)return"";const l=D(o);return l==null?void 0:Tn(e,t,r).format(l)},Dn=(n,e)=>t=>{const r=U(n,t);if(r==null)return!1;const i=U({...n,valuePath:"min"},e),o=U({...n,valuePath:"max"},e);return!(r<(i??-1/0)||r>(o??1/0))},ee=(n={},e,t,r)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const i=D(e.amount);return i==null||Number.isNaN(i)?null:{currency:e.currency,amount:i}},Q=({valuePath:n,rates:e},t)=>{if(t==null)return;let r=t;n!=null&&(r=_(t,n));const i=ee(e,r);if(i==null)return;const o=D(i.amount);return e==null||o==null?o:o*(e?.[i.currency]||1)},Ln=(n,e)=>t=>{const r=Q(n,t);if(r===void 0)return!1;const i=Q({...n,valuePath:"min"},e),o=Q({...n,valuePath:"max"},e);return i===void 0||o===void 0?!0:!(r<i||r>o)},ie={},Mn=(n,e)=>{const r=n+(e||"")||"";return ie[r]||(ie[r]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:n})),ie[r]},Rn=(n,e,t)=>{const r=ee(n,e);return r==null?"":Mn(r.currency,t).format(r.amount)},nt=({valuePath:n,rates:e,locale:t},r)=>{const i=ee(e,n?_(r,n):void 0);return i===void 0?"":i===null?"Invalid value":Rn(e,i,t)},rt=n=>n?n.amount+n.currency:"",it=n=>{if(n==null||n==="")return;const e=n.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(e)||e.length<0))return{amount:Number(e[1]),currency:e[2]}},Nn=({valuePath:n},e)=>n?_(e,n)?.currency:null,jn=({valuePath:n},e)=>n?_(e,n)?.amount:void 0,N=Symbol("column"),Pn=n=>{let e=!0;const t=n.map(r=>r.name);return n.forEach(r=>{r.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",r))}),n.forEach(r=>{t.indexOf(r.name)!==t.lastIndexOf(r.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",r))}),e},Bn=(n,e)=>{const t=n.valuePath??n.name;return{name:n.name,title:n.title,valuePath:t,groupOn:n.groupOn??t,sortOn:n.sortOn??t,noSort:n.noSort,disabledFiltering:e||n.disabledFiltering,minWidth:n.minWidth,width:n.width,flex:n.flex,priority:n.priority,getString:n.getString,getComparableValue:n.getComparableValue,serializeFilter:n.serializeFilter,deserializeFilter:n.deserializeFilter,toXlsxValue:n.toXlsxValue,renderHeader:n.renderHeader,renderCell:n.renderCell,renderEditCell:n.renderEditCell,renderGroup:n.renderGroup,cellTitleFn:n.cellTitleFn,headerTitleFn:n.headerTitleFn,getFilterFn:n.getFilterFn,headerCellClass:n.headerCellClass,cellClass:n.cellClass,editable:n.editable,values:n.values,source:xt(n.computeSource),noLocalFilter:n.noLocalFilter,mini:n.mini,renderMini:n.renderMini,align:n.align,headerAlign:n.headerAlign,loading:n.loading,externalValues:n.externalValues,computeSource:n.computeSource,trueLabel:n.trueLabel,falseLabel:n.falseLabel,valueProperty:n.valueProperty,textProperty:n.textProperty,emptyLabel:n.emptyLabel,emptyValue:n.emptyValue,min:n.min,max:n.max,locale:n.locale,autoupdate:n.autoupdate,maximumFractionDigits:n.maximumFractionDigits,minimumFractionDigits:n.minimumFractionDigits,currency:n.currency,rates:n.rates,autodetect:n.autodetect,ownerTree:n.ownerTree,keyProperty:n.keyProperty,...n.getConfig?.(n),[N]:n}},Hn=n=>n.isOmnitableColumn&&!n.hidden,Gn=n=>{const e=n.filter(Hn);return Pn(e)?e:[]},qn=(n,e,t)=>(Array.isArray(e)?n.filter(i=>e.includes(i.name)):n.filter(i=>!i.disabled)).map(i=>Bn(i,t)),Wn=(n,{enabledColumns:e,disabledFiltering:t})=>{const[r,i]=R([]);return zt(()=>{let o,l=[];const a=n.shadowRoot.querySelector("#columnsSlot"),s=c=>()=>{const m=a.assignedNodes({flatten:!0});if(c)l=m;else{const g=m.filter(y=>!l.includes(y)),p=l.filter(y=>!m.includes(y)),h=[...g,...p].some(y=>y.isOmnitableColumn);if(l=m,!h)return}i(qn(Gn(m),e,t))},u=c=>{cancelAnimationFrame(o),o=requestAnimationFrame(s(c?.type==="cosmoz-column-prop-changed"))};return u(),a.addEventListener("slotchange",u),n.addEventListener("cosmoz-column-prop-changed",u),()=>{a.removeEventListener("slotchange",u),n.removeEventListener("cosmoz-column-prop-changed",u),cancelAnimationFrame(o)}},[e,t]),r},Ot=(n,e)=>Array.isArray(n)?n.map(t=>_(t,e)).filter((t,r,i)=>t!=null&&i.indexOf(t)===r):void 0,re=({externalValues:n,values:e,valuePath:t},r)=>{if(n)return n;if(typeof e=="function")return e;if(t!==void 0)return Ot(r,t)},Xn=(n,e,t,r)=>{const{valuePath:i}=e,o=i!==void 0?_(t,i):void 0;if(r===o)return;i!==void 0&&Qt(t,i,r);const l={item:t,valuePath:i,value:r,oldValue:o,column:e[N]};n.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:l}))};class Kn extends M(V){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell"},headerCellClass:{type:String,value:"amount-header-cell"},align:{type:String,value:"right"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=Q({...e,valuePath:"min"},t),i=Q({...e,valuePath:"max"},t);if(!(r==null&&i==null))return Ln(e,t)}getString(e,t){return nt(e,t)}toXlsxValue(e,t){return nt(e,t)}getComparableValue(e,t){return Q(e,t)}serializeFilter({rates:e},t){if(t==null)return;const r=ee(e,t.min),i=ee(e,t.max);if(!(r==null&&i==null))return rt(r)+"~"+rt(i)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:it(r[1]),max:it(r[2])}:null}renderCell(e,{item:t}){return d`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},r){return d`<cosmoz-input
			type="number"
			@change=${o=>r({amount:o.target.value,currency:_(t,e.valuePath)?.currency})}
			.value=${jn(e,t)}
		>
			<div slot="suffix">${Nn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:i,locale:o,rates:l,currency:a,autoupdate:s,autodetect:u,disabledFiltering:c,headerAlign:m,align:g},{filter:p},h,y){return d`<cosmoz-omnitable-amount-range-input
			.title=${e}
			?disabled=${c}
			.filter=${p}
			.values=${y}
			.rates=${l}
			.min=${t}
			.max=${r}
			.limits=${i}
			.locale=${o}
			.currency=${a}
			.autoupdate=${s}
			.autodetect=${u}
			.align=${m??g}
			@filter-changed=${({detail:{value:x}})=>h(b=>({...b,filter:x}))}
			@header-focused-changed=${({detail:{value:x}})=>h(b=>({...b,headerFocused:x}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return re(e,t)}}customElements.define("cosmoz-omnitable-column-amount",Kn);const Un=(n,e)=>{if(!Array.isArray(n))return;const t=[];return n.reduce((r,i)=>Array.isArray(i)?(i.forEach(o=>{r.push(o)}),r):(r.push(i),r),[]).filter((r,i,o)=>{if(o.indexOf(r)!==i)return!1;if(e){const l=_(r,e);if(t.indexOf(l)!==-1)return!1;t.push(l)}return!0})},Qn=(n,e,t)=>{if(n==null)return[];if(Array.isArray(n)){const r=Un(n,e);if(!r?.length)return[];const i=t??"label",o=l=>typeof l=="object"&&l!=null?String(_(l,i??"")??""):String(l??"");return r.sort((l,a)=>o(l).localeCompare(o(a)))}if(typeof n=="object"){const r=e??"id",i=t??"label";return Object.entries(n).map(([o,l])=>({[r]:o,[i]:l})).sort((o,l)=>String(o[i]??"").localeCompare(String(l[i]??"")))}return[]},je=(n,e,t)=>J(e&&_(n,e)).map(P(t)),Pe=({valuePath:n,textProperty:e},t)=>je(t,n,e).filter(r=>r!=null).join(", "),Yn=Pe,Jn=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:r},i)=>o=>{const l=P(n),a=J(_(o,e));return i.some(s=>a.length===0&&P(r||n)(s)===t||a.some(u=>l(u)===l(s)))},we=n=>e=>n(t=>({...t,filter:e})),Se=n=>e=>n(t=>({...t,headerFocused:e})),Ce=n=>e=>n(t=>({...t,query:e})),At=({emptyValue:n,emptyLabel:e,emptyProperty:t,textProperty:r,valueProperty:i},o)=>{const l=Qn(o,i,r);return!e||n===void 0||!r||!(t||i)||!l?l:[{[r]:e,[t||i]:n},...l]},Zn=(n,e)=>At(n,Ot(e,n.valuePath)),_e=n=>class extends n{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Pe(e,t)}toXlsxValue(e,t){return Yn(e,t)}getComparableValue({valuePath:e,valueProperty:t},r){const i=_(r,e);return t==null?i:J(i).map(P(t)).sort().join(" ")}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return Jn(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(r){const i=r;return console.error("Failed to deserialize filter value:",{error:i?.name,message:i?.message,filterLength:typeof t=="string"?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values=="function"?async(...r)=>At(e,await Promise.resolve(ve(e.values,...r))):Zn(e,t)}},er=({valuePath:n,textProperty:e,valueProperty:t},r)=>{const i=e?wt(e):P(t),o=J(n&&_(r,n)).map(i);return o.length>1?o.filter(Boolean).join(","):o[0]},tr=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:r},i)=>{const o=P(n),l=P(r||n),a=new Set(i.filter(m=>m.excluded).map(m=>o(m.item))),s=new Set(i.filter(m=>!m.excluded).map(m=>o(m.item))),u=i.some(m=>m.excluded&&l(m.item)===t),c=i.some(m=>!m.excluded&&l(m.item)===t);return m=>{const g=J(_(m,e)).map(o);return g.length===0?!u&&(c||s.size===0):!g.some(p=>a.has(p))&&(s.size===0||g.some(p=>s.has(p)))}};let nr=class extends _e(M(V)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return d`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return d`<cosmoz-input
			type="text"
			@change=${o=>r(o.target.value)}
			.value=${G(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},i,o){return d`<cosmoz-autocomplete-excluding
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${e.title}
			.source=${o}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[N]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			@opened-changed=${l=>Se(i)(l.detail.value)}
			@value-changed=${Ee(we(i))}
			@text-changed=${Ee(Ce(i))}
			>${F(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return er(e,t)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return tr(e,t)}};customElements.define("cosmoz-omnitable-column-autocomplete-excluding",nr);const rr=({valuePath:n,textProperty:e,valueProperty:t},r)=>{const i=e?wt(e):P(t),o=J(n&&_(r,n)).map(i);return o.length>1?o.filter(Boolean).join(","):o[0]};class ir extends _e(M(V)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return d`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return d`<cosmoz-input
			type="text"
			@change=${o=>r(o.target.value)}
			.value=${G(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},i,o){return d`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${e.title}
			.source=${o}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[N]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			.onChange=${we(i)}
			@opened-changed=${l=>Se(i)(l.detail.value)}
			.onText=${Ce(i)}
			>${F(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return rr(e,t)}}customElements.define("cosmoz-omnitable-column-autocomplete",ir);const Be=(n,e)=>e.find(({value:t})=>n===t),or=(n,e,t)=>{const r=Be(e,t);return r?r.text:n},ot=(n,e,t,r)=>or(n,_(e,t),r),lr=({valuePath:n},e,t)=>Be(_(e,n),t),ar=n=>e=>{n(t=>({...t,filter:e?.[0]?.value??null}))},sr=n=>e=>{n(t=>({...t,headerFocused:e}))},ur=n=>e=>{n(t=>({...t,query:e}))},cr=n=>e=>n(e?.[0]?.value),lt=({valuePath:n,trueLabel:e,falseLabel:t},r)=>_(r,n)?e:t,dr=({valuePath:n},e)=>t=>_(t,n)===e,oe=xt((n,e)=>[{text:n,value:!0},{text:e,value:!1}]),mr=({valuePath:n,trueLabel:e,falseLabel:t},r)=>n?_(r,n)?e:t:"",pr=(n,e)=>{try{return JSON.parse(e)}catch{return null}};class gr extends M(V){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,t){return lt(e,t)}renderCell(e,{item:t}){return lt(e,t)}renderEditCell(e,{item:t},r){const{trueLabel:i,falseLabel:o}=e;return d`<cosmoz-autocomplete
			variant="inline"
			.title=${ot(e.title,t,e.valuePath,oe(i,o))}
			.source=${oe(i,o)}
			.textProperty=${"text"}
			.value=${lr(e,t,oe(i,o))}
			.onChange=${cr(r)}
			.limit=${1}
			>${F(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:r},i,o){return d`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			variant="inline"
			.label=${e.title}
			.title=${ot(e.title,t,e.valuePath,o)}
			.source=${o}
			.textProperty=${"text"}
			.value=${Be(t,o)}
			.text=${r}
			.onChange=${ar(i)}
			@opened-changed=${l=>sr(i)(l.detail.value)}
			.onText=${ur(i)}
			.limit=${1}
			>${F(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return oe(e,t)}getFilterFn(e,t){if(t!=null)return dr(e,t)}toXlsxValue(e,t){return mr(e,t)}deserializeFilter(e,t){return pr(e,t)}}customElements.define("cosmoz-omnitable-column-boolean",gr);const He=n=>class extends Ne(n){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"}}}toDate(e,t,r){if(e==null||e==="")return;let i=e;if(i instanceof Date||(typeof e=="string"&&(i=this.getAbsoluteISOString(i)),i=new Date(i)),Number.isNaN(i.getTime()))return null;if(r==null||t==null)return i;const o=this.toDate(t);if(o==null)return i;const l=this.getComparableValue(i),a=this.getComparableValue(o);return r(l,a)===l?i:o}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){const r=super.getComparableValue(e,t);if(r!=null)return this.toNumber(r.getTime())}getString(e,t=this.valuePath,r=this.formatter){const i=this.toValue(this.get(t,e));return i===void 0?"":i===null?"Invalid Date":this.renderValue(i,r)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const t=-new Date(e).getTimezoneOffset()/60;return(t<0?"-":"+")+["0",Math.abs(t)].join("").substr(-2)+":00"}renderValue(e,t=this.formatter){if(t==null)return;const r=this.toValue(e);if(r!=null)return t.format(r)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){const t=e.currentTarget,r=t.value,i=e.model.item,o=this.get(this.valuePath,i),l=this._fromInputString(r);this.set(this.valuePath,l,i),this._fireItemChangeEvent(i,this.valuePath,o,this.renderValue.bind(this))}_toLocalISOString(e){return ye(e)}};class hr extends He(ne(V)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return d`
			${F(this.disabled,()=>d`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??""}
					></cosmoz-omnitable-dropdown-input>
				`,()=>d`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:d`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${C("From date")}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${C("Until date")}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){const r=this.toDate(e);if(r!=null)return t==="min"&&r.setHours(0,0,0,0),t==="max"&&r.setHours(23,59,59),r}_filterInputChanged(e,t){const r=e.path.split(".")[1],i=r&&e.value;if(i&&i.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}}customElements.define("cosmoz-omnitable-date-range-input",hr);const fr=n=>{const e=-new Date(n).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},Ge=n=>n.length===19?n+fr(n):n,Vt=n=>{if(n==null||n==="")return;let e=n;return!(e instanceof Date)&&(typeof n=="string"&&(e=Ge(e)),e=Yt(e),!e)||Number.isNaN(e.getTime())?null:e},j=({valuePath:n},e)=>{if(e==null)return;let t=e;n!=null&&(t=_(e,n));const r=Vt(t);if(r!=null)return D(r.getTime())},A=(n,e,t)=>{const r=Vt(n);return r??null},qe=(n,e)=>{if(e==null)return;const t=A(n);if(t!=null)return e.format(t)},le={},br=n=>{const e=n||"";return le[e]||(le[e]=new Intl.DateTimeFormat(n||void 0)),le[e]},at=({valuePath:n,locale:e},t)=>{let r=_(t,n||"");return r===void 0?"":(r=A(r),r===null?"Invalid Date":qe(r,br(e)))},Et=n=>{const e=A(n);if(e==null)return null;const t=ye(e);return t==null?null:t.slice(0,10)},xr=({valuePath:n},e)=>Et(_(e,n||"")),Tt=(n,e)=>{const t=A(n);if(t!=null)return t},st=n=>{const e=Et(n);return e??""},yr=({valuePath:n},e)=>{if(!n)return"";const t=A(_(e,n));if(!t)return"";const r=A(ye(t));return r?(r.setHours(0,0,0,0),r):""},Dt=(n,e)=>t=>{const r=j(n,t);if(r==null)return!1;const i=j({...n,valuePath:"min"},e),o=j({...n,valuePath:"max"},e);return!(r<(i??-1/0)||r>(o??1/0))};class vr extends M(V){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=j({...e,valuePath:"min"},t),i=j({...e,valuePath:"max"},t);if(!(r==null&&i==null))return Dt(e,t)}getString(e,t){return at(e,t)}toXlsxValue(e,t){return yr(e,t)}getComparableValue(e,t){return j(e,t)}serializeFilter(e,t){if(t==null)return;const r=A(t.min),i=A(t.max);if(!(r==null&&i==null))return st(r)+"~"+st(i)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:A(r[1]),max:A(r[2])}:null}renderCell(e,{item:t}){return d`<div class="omnitable-cell-date">
			${at(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return d`<cosmoz-input
			type="date"
			@change=${o=>r(Tt(o.target.value))}
			.value=${xr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:i,locale:o,disabledFiltering:l,headerAlign:a,align:s},{filter:u},c,m){return d`<cosmoz-omnitable-date-range-input
			.title=${e}
			?disabled=${l}
			.filter=${u}
			.values=${m}
			.min=${t}
			.max=${r}
			.limits=${i}
			.locale=${o}
			.align=${a??s}
			@filter-changed=${({detail:{value:g}})=>c(p=>({...p,filter:g}))}
			@header-focused-changed=${({detail:{value:g}})=>c(p=>({...p,headerFocused:g}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return re(e,t)}}customElements.define("cosmoz-omnitable-column-date",vr);class $r extends He(ne(V)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return d`
			${F(this.disabled,()=>d`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??""}
					></cosmoz-omnitable-dropdown-input>
				`,()=>d`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:d`
							<h3>${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${C("From date")}
								time-label=${C("From time")}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${C("To date")}
								time-label=${C("To time")}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){const t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-datetime-range-input",$r);const ae={},zr=n=>{const e=n||"";if(ae[e])return ae[e];const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return ae[e]=new Intl.DateTimeFormat(n||void 0,t),ae[e]},ke=({valuePath:n,locale:e},t)=>{const r=A(_(t,n||""));return r===void 0?"":r===null?"Invalid Date":qe(r,zr(e))},wr=({valuePath:n},e)=>n?_(e,n):"",ut=n=>{const e=A(n);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},ct=n=>{if(!(n==null||n==="")&&typeof n=="string")return A(n.replace(/\./gu,":")+"Z")};class dt extends M(V){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=j({...e,valuePath:"min"},t),i=j({...e,valuePath:"max"},t);if(!(r==null&&i==null))return Dt(e,t)}getString(e,t){return ke(e,t)}toXlsxValue(e,t){return wr(e,t)}getComparableValue(e,t){return j(e,t)}serializeFilter(e,t){if(t==null)return;const r=A(t.min),i=A(t.max);if(!(r==null&&i==null))return ut(r)+"~"+ut(i)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:ct(r[1]),max:ct(r[2])}:null}renderCell(e,{item:t}){return ke(e,t)}renderEditCell(e,{item:t},r){return d`<cosmoz-input
			type="text"
			@change=${o=>r(Tt(o.target.value))}
			.value=${ke(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:i,locale:o,filterStep:l,disabledFiltering:a,headerAlign:s,align:u},{filter:c},m,g){return d`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			?disabled=${a}
			.filter=${c}
			.values=${g}
			.min=${t}
			.max=${r}
			.limits=${i}
			.locale=${o}
			.filterStep=${l}
			.align=${s??u}
			@filter-changed=${({detail:{value:p}})=>m(h=>({...h,filter:p}))}
			@header-focused-changed=${({detail:{value:p}})=>m(h=>({...h,headerFocused:p}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return re(e,t)}}customElements.define(dt.is,dt);class Sr extends _e(M(V)){renderCell({valuePath:e,textProperty:t},{item:r}){const i=je(r,e,t).map(o=>d`<li>${o}</li>`);return d`
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
		`}renderEditCell(){return"not implemented"}renderHeader(e,{filter:t,query:r},i,o){return d`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${o}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${r}
			.onChange=${we(i)}
			@opened-changed=${l=>Se(i)(l.detail.value)}
			.onText=${Ce(i)}
			>${F(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",Sr);const Cr=q`
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
`,_r=({items:n})=>{const[e,t]=R(!1),r=Array.isArray(n)?n:[],i=O(()=>Math.max(0,r.length-1),[r]);if(r.length===0)return null;const o=r.length>2,l=r[0],a=o&&!e?[]:r.slice(1),s=u=>{u.stopPropagation(),u.preventDefault(),t(c=>!c)};return d`
		<ul>
			<li>
				<span>${l}</span>
			</li>
			<li class="see-more" ?hidden=${!o||e}>
				<a href="#" @click=${s}
					>${C("and {0} more",{0:i})}</a
				>
			</li>
			${a.map(u=>d`
					<li>
						<span class="item">${u}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!o||!e}>
				<a href="#" @click=${s}>${C("See less")}</a>
			</li>
		</ul>
	`};customElements.define("cosmoz-omnitable-column-list-data",T(_r,{styleSheets:[$e(Cr)]}));class Ir extends _e(M(V)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:r}){return d`<cosmoz-omnitable-column-list-data
			.items=${je(r,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},r){const i=o=>r(o.target.value.split(/,\s*/gu));return d`<cosmoz-input
			type="text"
			.value=${Pe(e,t)}
			@change=${i}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},i,o){return d`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			.textual=${e.textual}
			.column=${e}
			.label=${e.title}
			.source=${o}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[N]?.itemRenderer}
			.value=${t}
			.text=${r}
			.onChange=${we(i)}
			@opened-changed=${l=>Se(i)(l.detail.value)}
			.onText=${Ce(i)}
			>${F(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",Ir);class Fr extends Ne(ne(V)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},headerFocused:{type:Boolean,value:!1}}}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return d`
			${F(this.disabled,()=>d`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??""}
					></cosmoz-omnitable-dropdown-input>
				`,()=>d`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:d`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${C("From")}
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
								label=${C("To")}
								.value=${this._filterInput?.max}
								@value-changed=${t=>{this.set("_filterInput.max",t.detail.value)}}
								@blur=${t=>this._onBlur(t)}
								@keydown=${t=>this._onKeyDown(t)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,r){const i={localeMatcher:"best fit"};return t!==null&&(i.minimumFractionDigits=t),r!==null&&(i.maximumFractionDigits=r),new Intl.NumberFormat(e||void 0,i)}getComparableValue(e,t){if(e==null)return;let r=e;if(t!=null&&(r=this.get(t,e)),r=this.toValue(r),r==null)return;const i=this.maximumFractionDigits;return i!==null?this.toValue(r.toFixed(i)):r}renderValue(e,t=this.formatter){const r=this.toNumber(e);if(r!=null)return t.format(r)}}customElements.define("cosmoz-omnitable-number-range-input",Fr);class kr extends M(V){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:"right"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=U({...e,valuePath:"min"},t),i=U({...e,valuePath:"max"},t);if(!(r==null&&i==null))return Dn(e,t)}getString(e,t){return tt(e,t)}toXlsxValue({valuePath:e},t){return _(t,e)}getComparableValue(e,t){return U(e,t)}serializeFilter(e,t){if(t==null)return;const r=D(t.min),i=D(t.max);if(!(r==null&&i==null))return et(r)+"~"+et(i)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:D(r[1]),max:D(r[2])}:null}renderCell(e,{item:t}){return d`<div class="omnitable-cell-number">
			${tt(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return d`<cosmoz-input
			type="number"
			@change=${o=>r(o.target.value)}
			.value=${En(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:i,locale:o,maximumFractionDigits:l,minimumFractionDigits:a,autoupdate:s,disabledFiltering:u,headerAlign:c,align:m},{filter:g},p,h){return d`<cosmoz-omnitable-number-range-input
			.title=${e}
			?disabled=${u}
			.filter=${g}
			.values=${h}
			.min=${t}
			.max=${r}
			.limits=${i}
			.locale=${o}
			.maximumFractionDigits=${l}
			.minimumFractionDigits=${a}
			.autoupdate=${s}
			.align=${c??m}
			@filter-changed=${({detail:{value:y}})=>p(x=>({...x,filter:y}))}
			@header-focused-changed=${({detail:{value:y}})=>p(x=>({...x,headerFocused:y}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return re(e,t)}}customElements.define("cosmoz-omnitable-column-number",kr);class Or extends He(ne(V)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return d`
			${F(this.disabled,()=>d`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??""}
					></cosmoz-omnitable-dropdown-input>
				`,()=>d`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:d`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${C("From time")}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${C("Until time")}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return"1970-01-01"}toDate(e,t,r){const i=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(i,t,r)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let r=this._toInputString(t==null?e:this.get(t,e));if(r!=null&&(r=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+r)),r!=null))return this.toNumber(r.getTime())}_timeValueChanged(e){const t=e.target,r=t.value,i=e.model.item,o=this.toDate(i.date),l=this.toDate(o!=null?o.toISOString().slice(0,10)+"T"+r:r),a=s=>s;l==null&&(this.set(this.valuePath,l,i),this._fireItemChangeEvent(i,this.valuePath,o,a.bind(this)))}_computeFormatter(e){const t={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-time-range-input",Or);const Lt="1970-01-01",B=(n,e,t)=>{const r=typeof n=="string"&&n.length>3&&n.length<=9?Ge(Lt+"T"+n):n;return A(r)},se={},Ar=n=>{const e=n||"";if(se[e])return se[e];const t={hour:"numeric",minute:"numeric",second:"numeric"};return se[e]=new Intl.DateTimeFormat(n||void 0,t),se[e]},ge=({valuePath:n,locale:e},t)=>{const r=B(_(t,n||""));return r===void 0?"":r===null?"Invalid Date":qe(r,Ar(e))},Vr=(n,e)=>n.valuePath?ge(n,e):"",Er=n=>{const e=B(n);if(e==null)return null;const t=ye(e);return t&&t.slice(11,19)},Y=({valuePath:n},e)=>{if(e==null)return;const t=Er(n==null?e:_(e,n));if(t==null)return;const r=B(Ge(Lt+"T"+t));return r==null?r:D(r.getTime())},Tr=(n,e)=>t=>{const r=Y(n,t);if(r==null)return!1;const i=Y({...n,valuePath:"min"},e),o=Y({...n,valuePath:"max"},e);return i==null||o==null?!1:!(r<i||r>o)},mt=n=>{const e=B(n);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},pt=n=>{if(!(n==null||n===""))return B(typeof n=="string"?n.replace(/\./gu,":")+"Z":n)};class Dr extends M(V){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,t){const r=Y({...e,valuePath:"min"},t),i=Y({...e,valuePath:"max"},t);if(!(r==null&&i==null))return Tr(e,t)}getString(e,t){return ge(e,t)}toXlsxValue(e,t){return Vr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;const r=B(t.min),i=B(t.max);if(!(r==null&&i==null))return mt(r)+"~"+mt(i)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:pt(r[1]),max:pt(r[2])}:null}renderCell(e,{item:t}){return ge(e,t)}renderEditCell(e,{item:t},r){return d`<cosmoz-input
			type="text"
			@change=${o=>r(o.target.value)}
			.value=${ge(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,locale:i,filterStep:o,disabledFiltering:l,headerAlign:a,align:s},{filter:u},c,m){return d`<cosmoz-omnitable-time-range-input
			.title=${e}
			?disabled=${l}
			.filter=${u}
			.values=${m}
			.min=${t}
			.max=${r}
			.locale=${i}
			.filterStep=${o}
			.align=${a??s}
			@filter-changed=${({detail:{value:g}})=>c(p=>({...p,filter:g}))}
			@header-focused-changed=${({detail:{value:g}})=>c(p=>({...p,headerFocused:g}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return re(e,t)}}customElements.define("cosmoz-omnitable-column-time",Dr);const Lr=({column:n,item:e,selected:t,folded:r,group:i})=>{if(!n)return Te;const o=n.renderGroup??n.renderCell;return o?o(n,{item:e,selected:t,folded:r,group:i}):Te};customElements.define("cosmoz-omnitable-group-row",T(Lr,{useShadowDOM:!1}));const Mr=n=>{const{column:e}=n;return E(()=>{let t=0,r=0;const i=a=>{n.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+a.pageX-t),column:e}}))},o=()=>{document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",o)},l=a=>{t=a.pageX,r=n.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",i),document.addEventListener("pointerup",o)};return n.addEventListener("pointerdown",l),()=>n.removeEventListener("pointerdown",l)},[e]),Te};customElements.define("cosmoz-omnitable-resize-nub",T(Mr));const Mt=({column:n,on:e,descending:t,setOn:r,setDescending:i})=>{const{name:o,title:l}=n??{};return d`<button
		class="sg"
		title=${Ze(l)}
		data-on=${Ze(o===e&&(t?"desc":"asc")||void 0)}
		@click=${a=>{const u=a.currentTarget?.dataset.on;u||(r(o),i(!1)),u==="asc"?i(!0):u==="desc"&&(r(),i(!1))}}
	>
		<span>${l}</span> ${o===e?K({width:"12",height:"12"}):Jt({width:"12",height:"12"})}
	</button>`},Rt=({columns:n,...e})=>n?.map(t=>Mt({column:t,...e})),Rr=()=>d`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,groupOn:e,setGroupOn:t,groupOnDescending:r,setGroupOnDescending:i}={})=>Rt({columns:n?.filter?.(o=>o.groupOn),on:e,setOn:t,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,Nr=()=>d`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,sortOn:e,setSortOn:t,descending:r,setDescending:i}={})=>Rt({columns:n?.filter?.(o=>o.sortOn&&!o.noSort),on:e,setOn:t,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,Nt=n=>(e,t,r=St)=>{const i=en(),o=new URLSearchParams(i.hash.replace("#",""));return n(e,t,r,o),"#!"+Object.assign(i,{hash:o}).href.replace(location.origin,"")},jt=n=>n==null||n==="",jr=Nt((n,e,t,r)=>jt(t(e))?r.delete(n):r.set(n,t(e))),Pr=Nt((n,e,t,r)=>{const i=Object.entries(e),o=i.map(t).filter(([,a])=>a!==void 0);if(o.length===0&&i.length>0)return;const l=n;Array.from(r.keys()).filter(a=>a.startsWith(l)).forEach(a=>r.delete(a)),o.forEach(([a,s])=>jt(s)?r.delete(n+a):r.set(n+a,s))});function Z(n,e,{suffix:t="",read:r,write:i,ready:o=!0,multi:l}={}){const a=l?Pr:jr,s=ze({param:e,suffix:t,link:a,write:i??St}),u=O(()=>{if(e==null)return!1;if(l){const p=Qe(e+t);return Object.keys(p).length>0}return Ye(e+t)!==void 0},[]),[c,m]=R(()=>{if(e==null)return n;if(l){const h=Qe(e+t,r);return Object.keys(h).length>0?h:n}return Ye(e+t,r)??n}),g=S(p=>m(h=>{const y=ve(p,h);return s.param!=null&&Zt(s.link(s.param+s.suffix,y,s.write),null,{notify:!1}),y}),[]);return E(()=>{s.param==null||!o||u||n!=null&&g(n)},[o]),[c,g]}const Br=n=>[!0,"true",1,"yes","on"].includes(n),ue=n=>n===""||(n==null?void 0:Br(n)),ce=(n,e,t)=>S(r=>{n(r),t(i=>({...i,[e]:r}))},[n,e,t]),Hr=(n,e,{settings:t,setSettings:r,resetRef:i,ready:o=!0})=>{const[l,a]=Z(t.sortOn,e,{suffix:"-sortOn",ready:o}),[s,u]=Z(ue(t.descending),e,{suffix:"-descending",read:ue,ready:o}),[c,m]=Z(t.groupOn,e,{suffix:"-groupOn",ready:o}),[g,p]=Z(ue(t.groupOnDescending),e,{suffix:"-groupOnDescending",read:ue,ready:o}),h=O(()=>n.find(z=>z.name===l),[n,l]),y=O(()=>n.find(z=>z.name===c),[n,c]),x={groupOn:c,setGroupOn:ce(m,"groupOn",r),groupOnDescending:g,setGroupOnDescending:ce(p,"groupOnDescending",r),sortOn:l,setSortOn:ce(a,"sortOn",r),descending:s,setDescending:ce(u,"descending",r),columns:n},b=O(()=>x,Object.values(x)),v=S(z=>{a(z.sortOn),m(z.groupOn),u(z.descending),p(z.groupOnDescending)},[]);return E(()=>{i.current=v},[]),{...b,sortAndGroup:b,groupOnColumn:y,sortOnColumn:h}},We=Ct();customElements.define("sort-and-group-provider",We.Provider);customElements.define("sort-and-group-consumer",T(({render:n})=>n(Me(We)),{useShadowDOM:!1}));const Gr=({data:n,columns:e,groupOnColumn:t,filters:r,setFilterState:i,sortAndGroup:{sortOn:o,setSortOn:l,descending:a,setDescending:s}={}})=>_t(e,u=>u.name,u=>[d`<div
				class="cell ${u.headerCellClass} header-cell"
				align="${u.headerAlign??u.align??"left"}"
				part="cell header-cell cell-${u.name} header-cell-${u.name}"
				?hidden="${u===t}"
				title="${u.headerTitleFn(u)}"
				name="${u.name}"
			>
				${u.renderHeader(u,r[u.name]??{},c=>i(u.name,c),u.source(u,n))}
				${F(!u.noSort,()=>Mt({on:o,setOn:l,descending:a,setDescending:s,column:u}))}
			</div>`,d`<cosmoz-omnitable-resize-nub
				.column="${u}"
				name="${u.name}"
			></cosmoz-omnitable-resize-nub>`]),qr=({columns:n,settingsConfig:e,hideSelectAll:t,...r})=>{const i=Me(We);return d`
		${F(n,o=>Gr({columns:o,sortAndGroup:i,...r}))}
		${F(!t,()=>d` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`};customElements.define("cosmoz-omnitable-header-row",T(qr,{useShadowDOM:!1}));const Wr=q`
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
`,Xr=({column:n})=>d`
	<div class="label" title="${n.title}" part="item-expand-label">
		${n.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;customElements.define("cosmoz-omnitable-item-expand-line",T(Xr,{styleSheets:[$e(Wr)]}));const Kr=({columns:n,item:e,selected:t,expanded:r,groupOnColumn:i})=>tn(n,o=>d`<cosmoz-omnitable-item-expand-line
				.column=${o}
				?hidden=${o===i}
				exportparts="item-expand-label, item-expand-value"
				>${o.renderCell(o,{item:e,selected:t,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",T(Kr,{useShadowDOM:!1}));const Ur=(n,e,t)=>n.editable?n.renderEditCell(n,e,t(n,e.item)):n.renderCell(n,e),Qr=({columns:n,groupOnColumn:e,item:t,index:r,selected:i,expanded:o,onItemChange:l})=>_t(n,a=>a.name,a=>d`<div
				class="cell itemRow-cell ${a.cellClass??""}"
				align="${a.align??"left"}"
				part="cell itemRow-cell cell-${a.name} itemRow-cell-${a.name}"
				?hidden="${a===e}"
				?editable="${a.editable}"
				title="${a.cellTitleFn(a,t)}"
				name="${a.name}"
			>
				${Ur(a,{item:t,index:r,selected:i,expanded:o},l)}
			</div>`);customElements.define("cosmoz-omnitable-item-row",T(Qr,{useShadowDOM:!1}));const Pt=q`
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
`,Yr=q`
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

	${Pt}

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
`,gt=n=>{const e=n.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':n},Jr=(n,e,t)=>{const o=n.map(a=>gt(a.title)).join(";")+`
`,l=e.map(a=>n.map(s=>{const u=s.getString(s,a);return u==null?"":gt(String(u))}).join(";")+`
`);l.unshift(o),yt(new File(l,t,{type:"text/csv;charset=utf-8"}))},Zr=(n,e)=>{const t=n.map(i=>i.title),r=e.map(i=>n.map(o=>{const l=o.toXlsxValue(o,i);return l??""}));return r.unshift(t),r},ei=(n,e,t,r)=>{const i=Zr(n,e),o=new nn(t).addSheetFromData(i,r).generate();yt(new File([o],t,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},he=Symbol("index"),L=Symbol("All"),ti=(n,e)=>{if(typeof n.findLastIndex=="function")return n.findLastIndex(e);for(let t=n.length-1;t>=0;t--)if(e(n[t],t,n))return t;return-1},ni=({columns:n,selectedItems:e,setSelectedItems:t,csvFilename:r,xlsxFilename:i,xlsxSheetname:o,topPlacement:l,enableSelectAll:a,allSelected:s,allItemsCount:u})=>{const c=e===L,m=c||e.length>0,g=e!==L&&a&&s,p=y=>d`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${l}
		>
			${rn({slot:"button"})}
			<cosmoz-button
				@click=${()=>Jr(n,y,r)}
			>
				${C("Save selected items as CSV")}
			</cosmoz-button>
			<cosmoz-button
				@click=${()=>ei(n,y,i,o)}
			>
				${C("Save selected items as XLSX")}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,h=F(c,()=>u!==void 0?C("All {count} items selected",{count:u}):C("All items selected"),()=>C("{count} selected item",{count:e===L?0:e.length}));return d`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${m}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<span slot="info">
			${h}
			${F(g,()=>d`&nbsp;<span
							part="select-all-items"
							class="selectAllItems"
							role="button"
							tabindex="0"
							style="cursor: pointer; color: white;"
							@click=${()=>t(L)}
						>
							${C("Select all items")}
						</span>`)}
		</span>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${F(e!==L,()=>p(e))}
	</cosmoz-bottom-bar>`},ri=({allSelected:n,onAllCheckboxChange:e,sortAndGroup:t,dataIsValid:r,data:i,columns:o,filters:l,groupOnColumn:a,setFilterState:s,settingsConfig:u,hideSelectAll:c})=>d`<sort-and-group-provider .value=${t}>
		<div class="header" id="header" part="header">
			${F(!c,()=>d`<input
						class="checkbox all"
						type="checkbox"
						.checked=${n}
						@input=${e}
						?disabled=${!r}
						part="all"
					/>`)}
			${F(c,()=>d` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${u}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${i}
				.columns=${o}
				.filters=${l}
				.groupOnColumn=${a}
				.setFilterState=${s}
				.settingsConfig=${u}
				.hideSelectAll=${c}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`,ii=$t`
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
`,oi=({settingsConfig:n})=>{const{columns:e,collapsed:t}=n,r=e.filter(i=>!t.some(o=>o.name===i.name));return d`<div class="skeleton">
		${Array.from({length:5},()=>d`<div>
					<div class="checkbox"></div>
					${r.map(i=>d`<div
								class="cell"
								part=${`cell-${i.name}`}
								name=${i.name}
							></div>`)}
				</div>`)}
	</div>`};customElements.define("cosmoz-omnitable-skeleton",T(oi,{styleSheets:[ii]}));const li=(n,e)=>{const{settingsConfig:t}=n,{processedItems:r,dataIsValid:i,filterIsTooStrict:o,loading:l,displayEmptyGroups:a,compareItemsFn:s,selectedItems:u,setSelectedItems:c,renderItem:m,renderGroup:g,error:p}=e;return d`${F(!l&&!i&&!p,()=>d`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${Je({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
						<div class="tableContent-empty-message">
							<h3>${C("Working set empty")}</h3>
							<p>${C("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${F(o,()=>d`<div class="tableContent-empty">
					${Je({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div>
						<h3>${C("Filter too strict")}</h3>
						<p>${C("No matches for selection")}</p>
					</div>
				</div>`)}
		${F(l&&!r.length,()=>d`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${t}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${F(l&&r.length,()=>d`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${F(p,()=>d`<div class="tableContent-empty overlay">
					${on({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div class="tableContent-empty-message">
						<h3>${C("Error loading data")}</h3>
						<p>${p.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				.selectedItems=${u}
				@selected-items-changed=${Ee(c)}
				.displayEmptyGroups=${a}
				.compareItemsFn=${s}
				.renderItem=${m}
				.renderGroup=${g}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`},ai=q`
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
	${Pt}
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
`,si=q`
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
`,de=n=>{const e=parseInt(n??"",10);return isFinite(e)?e:void 0},ui=n=>{const{config:e}=n,{settings:t,setSettings:r,collapsed:i,requestTween:o}=e,l=ze({collapsed:i,settings:t.columns,requestTween:o,setSettings:S(a=>r(s=>({...s,columns:a})),[r])});return{...e,onDown:S(a=>{const s=a.target instanceof Element?a.target:null;!s||!s.closest(".pull")||(l.handle=a.currentTarget instanceof HTMLElement?a.currentTarget:null)},[l]),onDragStart:S(a=>{const s=a.target instanceof HTMLElement?a.target:null,u=de(s?.dataset.index);if(!s||!l.handle?.contains(s)||u==null)return a.preventDefault();l.handle=null,a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("omnitable/sort-index",String(u)),a.dataTransfer.setData("text/plain",String(u)),setTimeout(()=>s.classList.add("drag"),0),s.addEventListener("dragend",c=>{(c.target instanceof HTMLElement?c.target:null)?.classList.remove("drag")},{once:!0})},[l]),onDragEnter:S(a=>{const s=a.currentTarget instanceof HTMLElement?a.currentTarget:null;!s||s!==a.target||(a.preventDefault(),a.dataTransfer.dropEffect="move",s.classList.add("dragover"))},[]),onDragOver:S(a=>{a.preventDefault(),a.currentTarget instanceof HTMLElement&&a.currentTarget.classList.add("dragover")},[]),onDragLeave:S(a=>{const s=a.currentTarget instanceof HTMLElement?a.currentTarget:null;s&&(a.relatedTarget instanceof Node&&s.contains(a.relatedTarget)||s.classList.remove("dragover"))},[]),onDrop:S(a=>{const s=de(a.dataTransfer?.getData("omnitable/sort-index")),u=a.currentTarget instanceof HTMLElement?a.currentTarget:null,c=de(u?.dataset.index),{settings:m,setSettings:g,requestTween:p}=l;u?.classList.remove("dragover"),a.preventDefault();const h=m.slice();h.splice(c+(s>=c?0:-1),0,h.splice(s,1)[0]),p?.(),g(h)},[l]),onToggle:S(a=>{const{settings:s,setSettings:u,requestTween:c}=l,m=s.map(h=>({...h,disabled:h.disabled||l.collapsed?.some(y=>y.name===h.name)})),g=a.target instanceof HTMLInputElement?a.target:null,p=de((a.target instanceof Element?a.target:null)?.closest("[data-index]")?.getAttribute("data-index"));p!=null&&(m.splice(p,1,{...s[p],disabled:!g?.checked,priority:g?.checked?s.reduce((h,y)=>Math.max(h,y.priority??0),0)+1:s[p]?.priority}),c?.(),u(m))},[l])}},ci=[an({apply({availableHeight:n,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,n)}px`})}}),...ln],di=({onDragStart:n,onDragEnter:e,onDragOver:t,onDragLeave:r,onDrop:i,onDown:o,onToggle:l,collapsed:a,filters:s})=>(u,c)=>{const m=!!a?.find(p=>p.name===u.name),g=!u.disabled&&!m;return d` <div
			class="item"
			data-index=${c}
			@mousedown=${o}
			draggable="true"
			@dragstart=${n}
			@dragenter=${e}
			@dragover=${t}
			@dragleave=${r}
			@drop=${i}
		>
			<button class="pull">${un({width:"16",height:"16"})}</button>
			<label class="title" ?has-filter=${!vt(s[u.name]?.filter)}
				>${u.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${g}
				@click=${l}
				.indeterminate=${m}
			/>
		</div>`},mi=n=>{const{settings:e,settingsId:t,onSave:r,onReset:i,hasChanges:o,opened:l,setOpened:a,...s}=ui(n);return d` <div class="headline">
			<span> ${C("Sort and filter")} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${C("Close settings")}"
				@click=${u=>{const c=u.currentTarget instanceof HTMLElement?u.currentTarget:null;c?.focus(),c?.blur()}}
			>
				${mn({width:"16",height:"16"})}
			</cosmoz-button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${l.columns}
				@click=${()=>a(u=>({...u,columns:!u.columns}))}
				part="columns columns-heading"
			>
				${C("Columns")} ${K({width:"20",height:"20"})}
			</div>
			<cosmoz-collapse
				?opened="${l.columns}"
				part="columns columns-content"
			>
				<div class="list">${e.columns?.map(di(s))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${l.sort}
				@click=${()=>a(u=>({...u,sort:!u.sort}))}
			>
				${C("Sort on")} ${K({width:"20",height:"20"})}
			</div>
			<cosmoz-collapse ?opened=${l.sort}> ${Nr()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${l.group}
				@click=${()=>a(u=>({...u,group:!u.group}))}
				part="groups groups-heading"
			>
				${C("Group on")} ${K({width:"20",height:"20"})}
			</div>
			<cosmoz-collapse ?opened=${l.group} part="groups groups-heading"
				>${Rr()}</cosmoz-collapse
			>
		</div>

		${F(t,()=>d`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${i}
						?disabled=${!o}
					>
						${C("Reset")}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${r}
						?disabled=${!o}
					>
						${C("Save")}
					</cosmoz-button>
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",T(mi,{styleSheets:[$e(ai)]}));const pi=({config:n,newLayout:e})=>d`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${ci}"
	>
		<div title="${C("Sort and filter")}" slot="button">
			${F(e,()=>d`<div class="headerDots">...</div>`,()=>d` ${sn({width:"20",height:"20",styles:"color: var(--cz-color-text-primary)"})}`)}
			${F(n?.badge,()=>d`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${n}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",T(pi,{styleSheets:[$e(si)]}));const fe=["sortOn","descending","groupOn","groupOnDescending"],me=n=>e=>typeof e=="object"&&e!==null&&"name"in e&&e.name===n,gi=(n=[],e=[],t=[])=>{const r=e.filter(l=>n.some(me(l.name))),i=n.filter(l=>l.name!=null&&!e.some(me(l.name))&&!t.some(me(l.name))),o=t.filter(l=>!e.some(me(l.name)));return[...r,...o.flatMap(l=>{const a=n.find(s=>s.name===l.name);return a?{...l,title:a.title??l.title??"",minWidth:parseInt(a.minWidth??"0",10)}:[]}),...i.map(l=>{const{name:a,title:s,priority:u,minWidth:c,width:m,flex:g}=l;return{name:a??"",title:s??"",priority:u??0,minWidth:parseInt(c??"0",10),width:parseInt(m??"0",10),flex:parseInt(g??"0",10)}})]},hi=(n,e)=>({...e,...De(Array.from(fe))(n),columns:n.columns?.map(De(["name","priority","width","flex","disabled"]))}),fi=({columns:n,settings:e,savedSettings:t,initial:r})=>({...Object.fromEntries(fe.flatMap(o=>r?.[o]!=null?[[o,r[o]]]:[])),...t?De(Array.from(fe))(t):{},...e,columns:gi(n,e?.columns,t?.columns)}),bi=({prefix:n="omnitable-"}={})=>({write:async(t,r)=>{const i=n+t;try{r?localStorage.setItem(i,JSON.stringify(r)):localStorage.removeItem(i)}catch(o){console.error(o)}},read:async t=>{if(!t)return null;try{const r=localStorage.getItem(n+t);return r==null?null:JSON.parse(r)}catch(r){return console.error(r),null}}}),xi=Ct(bi),yi=()=>{const n=Me(xi);return O(()=>n(),[n])},vi=(n,e,t,r)=>{const[i,o]=R(n?void 0:null),{read:l,write:a}=yi();return E(async()=>{n&&o(await l(n))},[n,l]),{settingsId:n,savedSettings:i,onSave:S(async()=>{if(!n)return;const s=hi(e,i);await a(n,s),t(),o(s)},[e,i]),onReset:S(async s=>{t(),s.shiftKey&&(await a(n),o(null)),r?.()},[r]),hasChanges:e!=null}},$i=({settingsId:n,host:e})=>{const t=O(()=>Object.fromEntries(fe.map(x=>[x,e[x]])),[]),r=Re(),i=S(()=>{r.current?.(t)},[t]),[o,l]=R(),[a,s]=R({columns:!0,sort:!0}),{savedSettings:u,...c}=vi(n,o,l,i),{enabledColumns:m,disabledFiltering:g}=e,p=Wn(e,{enabledColumns:m,disabledFiltering:g}),h=O(()=>fi({columns:p,settings:o,savedSettings:u??void 0,initial:t}),[p,o,u]),y=O(()=>h.columns.map(x=>p.find(b=>b.name===x.name)).filter(x=>x!==void 0),[p,...h.columns.map(x=>x.name)]);return{...c,savedSettings:u,opened:a,setOpened:s,settings:h,columns:y,setSettings:l,resetRef:r}},ht=n=>Number.isFinite(n)?n:0,zi=(n,e)=>{const t=[];let[r,i]=n.reduce(([c,m],{width:g,flex:p})=>[c+g,m+p],[0,0]),o=e-r,l=ht(o/i),a=0,s=0,u=0;for(let c=0;c<n.length;c++){const{width:m,minWidth:g,flex:p}=n[c],h=o>=0?l*p:m*o/r;if(g>m+h){a+=m,s+=g,u+=p,t[c]=g;continue}if(p===0){a+=m,s+=m,t[c]=m;continue}}r-=a,o=e-s-r,i-=u,l=ht(o/i);for(let c=0;c<n.length;c++){if(t[c]!=null)continue;const{width:m,flex:g}=n[c],p=o>=0?l*g:m*o/r;t[c]=m+p}return t},wi=(n,e)=>{const t=ti(n,l=>l!=null&&l>0),r=(l,a)=>`.cell[name="${l}"], cosmoz-omnitable-skeleton::part(cell-${l}){width: ${Math.floor(a)}px;padding: 0 min(3px, ${a/2}px)}`,i=l=>`cosmoz-omnitable-resize-nub[name="${l}"]{display:none}`,o=l=>`cosmoz-omnitable-resize-nub[name="${l}"], .cell[name="${l}"]{display:none}`;return e.map((l,a)=>{const s=n[a];if(s==null||s===0)return o(l.name);const u=r(l.name,s);return a===t?`${u}
${i(l.name)}`:u}).join(`
`)},Bt=(n,e,t)=>{const r=n.filter(a=>!a.hidden),i=r.reduce((a,{width:s})=>a+s,0);if(r.length>1&&i>e)return Bt(r.slice(1),e,t);const o=r.reduce(([a,s],u,c)=>[Math.max(a,u.index),u.index>a?c:s],[-1,-1])[1];return o!==-1&&(r[o].flex=1),zi(r,e).reduce((a,s,u)=>(a[r[u].index]=s,a),new Array(t).fill(void 0))},Si=(n,e)=>n.length===0?".cell {display: none;}":wi(n,e),Ci=20,_i=44,Ii=24,Ht=Ci+_i+Ii,Fi=(n,e)=>E(()=>{const t=([i])=>{i.contentRect?.width!==0&&e(i.contentRect.width-Ht)},r=new ResizeObserver(t);return r.observe(n),()=>r.unobserve(n)},[]),ki=n=>{const[e,t]=R(()=>n.getBoundingClientRect().width-Ht);return Fi(n,t),e},Oi=({canvasWidth:n,groupOnColumn:e,config:t,miniColumn:r})=>O(()=>{if(!Array.isArray(t)||n==null||n===0)return[];const i=t.map((o,l)=>({minWidth:o.minWidth,width:o.width,flex:o.flex,priority:o.priority,name:o.name,index:l,hidden:o.name===e?.name||o.disabled})).map(o=>r?{...o,hidden:r.name!==o.name}:o).sort(({index:o,priority:l},{index:a,priority:s})=>l===s?a-o:l-s);return Bt(i,n,i.length)},[n,e,t]),Ai=({host:n,canvasWidth:e,columns:t})=>{const r=n.miniBreakpoint??480,i=O(()=>e<=r,[e,r]),o=O(()=>i?t?.filter(u=>u.mini!=null).sort((u,c)=>(u.mini??0)-(c.mini??0)):[],[t,i]),[l,...a]=o??[],s=!!l;return E(()=>{n.toggleAttribute("mini",s)},[s]),{isMini:s&&i,miniColumn:l,miniColumns:a}},Vi=({host:n,canvasWidth:e,layout:t,setSettings:r,requestTween:i})=>{const o=Re();o.current=l=>{i(),r(a=>{const s=a.columns,{detail:{newWidth:u,column:c}}=l,m=s.findIndex(h=>h.name===c.name),g=[],p=s.reduce((h,y)=>Math.max(h,y.priority),-1/0);for(let h=0;h<t.length;h++)if(g[h]={...s[h]},h<m&&t[h]&&(g[h].width=t[h],g[h].flex=0,g[h].priority=p),h===m){const y=t.reduce((x,b,v)=>v<m&&b?x-b:x,e);g[h].width=Math.min(y,Math.max(u,s[h].minWidth)),g[h].flex=0,g[h].priority=p}return{...a,columns:g}})},E(()=>{const l=a=>o.current?.(a);return n.addEventListener("column-resize",l),()=>n.removeEventListener("column-resize",l)},[])},Ei=(n,e)=>{const t=O(()=>{let r=!1,i;const o=()=>{if(!r)return;i=requestAnimationFrame(o),n()&&(r=!1)};return{start:()=>{r=!0,cancelAnimationFrame(i),i=requestAnimationFrame(o)},stop:()=>{r=!1,cancelAnimationFrame(i)}}},[]);E(()=>{t.start()},e),E(()=>()=>t.stop(),[])},Ti=(n=0,e=0)=>Math.abs(n-e)<.1,Di=(n,e=1.9,t=pn,r)=>{const i=ze({target:n,speedFactor:e,onConverge:r}),o=S(()=>{if(!i.tween)return i.tween=i.target,t(i.tween),i.onConverge?.(),!0;if(i.target.every((l,a)=>i.tween[a]===l))return t(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((l,a)=>Ti(i.tween[a],l)?l:(i.tween[a]??0)+((l??0)-(i.tween[a]??0))/i.speedFactor||0),t(i.tween),i.tween.every((l,a)=>l===i.target[a]))return i.onConverge?.(),!0},[]);Ei(o,[n])},Li=n=>{const e=O(()=>new CSSStyleSheet,[]);return E(()=>{n.shadowRoot.adoptedStyleSheets=[...n.shadowRoot.adoptedStyleSheets,e]},[]),e},Mi=({host:n,columns:e,settings:t,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:o})=>{const l=ki(n),{isMini:a,miniColumn:s,miniColumns:u}=Ai({host:n,canvasWidth:l,columns:e}),{groupOnColumn:c}=o,m=Oi({canvasWidth:l,groupOnColumn:c,miniColumn:s,config:t.columns}),g=Li(n),p=O(()=>t.columns.reduce((z,f,$)=>m[$]!=null||f.name===c?.name||f.disabled?z:[...z,e.find(w=>w.name===f.name)],[]),[e,t,m]),[h,y]=R(1),x=S(()=>y(i??1.9),[i]),b=S(()=>y(1),[]),v=ze({columns:t.columns});return Di(m,h,z=>{const f=Si(z,v.columns);g.replace(f)},b),Vi({host:n,canvasWidth:l,layout:m,setSettings:z=>r(z(t)),requestTween:x}),{isMini:a,collapsedColumns:p,miniColumns:u,requestTween:x}},Ri=({host:n,...e})=>{const{csvFilename:t="omnitable.csv",xlsxFilename:r="omnitable.xlsx",xlsxSheetname:i="Omnitable",topPlacement:o="top-end"}=n;return{csvFilename:t,xlsxFilename:r,xlsxSheetname:i,topPlacement:o,...e}},Ni=({host:n,selectedItems:e,data:t,sortAndGroupOptions:r,collapsedColumns:i,settings:o,filterFunctions:l,settingS:a,filters:s,requestTween:u,...c})=>{const m=e===L||t&&t.length>0&&e.length===t.length,g=x=>{x.target.checked?n.shadowRoot.querySelector("#groupedList").selectAll():n.shadowRoot.querySelector("#groupedList").deselectAll()},{groupOnColumn:p}=r,h=O(()=>[p,...i,...o.columns.filter(x=>x.disabled)].some(x=>x&&Object.keys(l).includes(x.name)),[l,o,i]),y=O(()=>({...a,collapsed:i,badge:h,filters:s,requestTween:u}),[a,i,h,s,u]);return E(()=>{const x=n.shadowRoot.querySelector("#tableContent"),b=new ResizeObserver(v=>requestAnimationFrame(()=>{n.style.setProperty("--ot-height",v[0]?.contentRect.height+"px")}));return b.observe(x),()=>b.unobserve(x)},[]),{allSelected:m,onAllCheckboxChange:g,data:t,settingsConfig:y,filters:s,groupOnColumn:p,sortAndGroup:r.sortAndGroup,...c}},ji=n=>n?"groupRow groupRow-folded":"groupRow",Pi=({item:n,index:e})=>t=>F(t?.length>0,()=>d`
				<div class="itemRow-minis" part="item-minis">
					${t.map(r=>d`<div
								class="itemRow-mini"
								part="item-mini item-mini-${r.name}"
							>
								${(r.renderMini??r.renderCell)(r,{item:n,index:e})}
							</div>`)}
				</div>
			`),Bi=({columns:n,collapsedColumns:e,miniColumns:t,onItemClick:r,onCheckboxChange:i,dataIsValid:o,groupOnColumn:l,onItemChange:a,rowPartFn:s})=>(u,c,{selected:m,expanded:g,toggleCollapse:p})=>d`
		<div
			?selected=${m}
			part="${["itemRow",`itemRow-${u[he]}`,s?.(u,c)].filter(Boolean).join(" ")}"
			.dataIndex=${u[he]}
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
					@input=${i}
					?disabled=${!o}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${n}
					.index=${c}
					.selected=${m}
					.expanded=${g}
					.item=${u}
					.groupOnColumn=${l}
					.onItemChange=${a}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${vt(e.length)}"
					?aria-expanded="${g}"
					@click="${p}"
				>
					${K({width:"16",height:"16"})}
				</button>
			</div>
			${Pi({item:u,index:c})(t)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${e}
			.item=${u}
			.index=${c}
			?selected=${m}
			?expanded=${g}
			.groupOnColumn=${l}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,Hi=({onCheckboxChange:n,dataIsValid:e,groupOnColumn:t})=>(r,i,{selected:o,folded:l,toggleFold:a})=>d` <div
			class="${ji(l)}"
			part="groupRow groupRow-${r[he]}"
		>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${o}
				.dataItem=${r}
				@input=${n}
				?disabled=${!e}
			/>
			<h3 class="groupRow-label">
				<div><span>${t?.title}</span>: &nbsp;</div>
				<cosmoz-omnitable-group-row
					.column=${t}
					.item=${r.items?.[0]}
					.selected=${o}
					.folded=${l}
					.group=${r}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${r.items.length}</div>
			<button class="expand" ?aria-expanded="${l}" @click=${a}>
				${K({width:"16",height:"16"})}
			</button>
		</div>`,Gi=({host:n,error:e,dataIsValid:t,processedItems:r,columns:i,collapsedColumns:o,miniColumns:l,sortAndGroupOptions:a,rowPartFn:s,...u})=>{const{loading:c=!1,displayEmptyGroups:m=!1,compareItemsFn:g}=n,p=Re({shiftKey:!1,ctrlKey:!1}),h=S(v=>{const z=v.target.dataItem,f=v.target.checked;p.current.shiftKey?n.shadowRoot.querySelector("#groupedList").toggleSelectTo(z,f):p.current.ctrlKey?(v.target.checked=!0,n.shadowRoot.querySelector("#groupedList").selectOnly(z)):n.shadowRoot.querySelector("#groupedList").toggleSelect(z,f),v.preventDefault(),v.stopPropagation()},[]);E(()=>{const v=({shiftKey:z,ctrlKey:f})=>{p.current={shiftKey:z,ctrlKey:f}};return window.addEventListener("keydown",v),window.addEventListener("keyup",v),()=>{window.removeEventListener("keydown",v),window.removeEventListener("keyup",v)}},[]);const y=S(v=>{const z=v.composedPath();z.slice(0,z.indexOf(v.currentTarget)).find($=>$.matches?.("a, .checkbox, .expand"))||n.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:v.currentTarget.dataItem,index:v.currentTarget.dataIndex}}))},[]),{groupOnColumn:x}=a,b=S((v,z)=>f=>Xn(n,v,z,f),[]);return{...u,processedItems:r,dataIsValid:t,filterIsTooStrict:t&&r.length<1,loading:c,compareItemsFn:g,displayEmptyGroups:m,error:e,renderItem:O(()=>Bi({columns:i,collapsedColumns:o,miniColumns:l,onItemClick:y,onCheckboxChange:h,dataIsValid:t,groupOnColumn:x,onItemChange:b,rowPartFn:s}),[i,o,y,h,t,x,b,s]),renderGroup:O(()=>Hi({onCheckboxChange:h,dataIsValid:t,groupOnColumn:x}),[h,t,x])}},qi=(n,e)=>{if(n===e)return 0;if(n==null)return-1;if(e==null)return 1;const t=typeof n,r=typeof e;return t==="object"&&r==="object"?n.toString()<e.toString()?-1:1:t==="number"&&r==="number"?n-e:t==="string"&&r==="string"?n<e?-1:1:t==="boolean"&&r==="boolean"?n?-1:1:(console.warn("unsupported sort",t,n,r,e),0)},Oe=(n,e)=>(t,r)=>qi(n(t),n(r))*(e?-1:1),Wi=n=>n.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),ft=(n,e)=>{!n||!e||Object.entries(e).forEach(([t,r])=>{n[N].__ownChange=!0,n[N][t]=r,n[N].__ownChange=!1,n[N].dispatchEvent(new CustomEvent(`${Wi(t)}-changed`,{bubbles:!0,detail:{value:r}}))})},Ae=(n,e)=>Object.assign(n,{[he]:e}),pe=Symbol("unparsed"),Xi=({data:n,columns:e,hashParam:t,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:o})=>{const{groupOnColumn:l,groupOnDescending:a,sortOnColumn:s,descending:u}=r,c=S(([f,$])=>{const w=e.find(({name:I})=>I===f);return w==null?[f,void 0]:[f,$.filter&&w.serializeFilter(w,$.filter)]},[e]),m=S(([f,$])=>{const w=e.find(({name:k})=>k===f);if(w==null)return[f,{[pe]:$}];const I={filter:w.deserializeFilter(w,$)};return ft(w,I),[f,I]},[e]),[g,p]=Z({},t,{multi:!0,suffix:"-filter--",write:c,read:m}),h=S((f,$)=>p(w=>{const I=ve($,w[f]);return ft(e.find(k=>k.name===f),I),{...w,[f]:{...w[f],...I}}}),[e,p]),y=O(()=>Object.values(g).map(f=>f.filter),[g]),x=O(()=>Object.fromEntries(e.map(f=>[f.name,!f.noLocalFilter&&f.getFilterFn(f,g[f.name]?.filter)]).filter(([,f])=>!!f)),[e,...y]),b=O(()=>!Array.isArray(n)||n.length===0?[]:Object.entries(x).length===0||o?n.slice():n.filter(f=>Object.values(x).every($=>$(f))),[n,x,o]),v=O(()=>{if(!i&&!l&&s!=null&&s.sortOn!=null)return b.slice().sort(Oe(f=>s.getComparableValue({...s,valuePath:s.sortOn},f),u));if(l!=null&&l.groupOn!=null){const f=b.reduce(($,w)=>{const I=l.getComparableValue({...l,valuePath:l.groupOn},w);if(I===void 0)return $;let k=$.find(W=>W.id===I);return k?(k.items.push(w),$):(k={id:I,name:I,items:[w]},[...$,k])},[]);return f.sort(Oe($=>l.getComparableValue({...l,valuePath:l.groupOn},$.items[0]),a)),!s||i?f:f.filter($=>Array.isArray($.items)).map($=>($.items.sort(Oe(w=>s.getComparableValue({...s,valuePath:s.sortOn},w),u)),$))}return b},[b,l,a,s,u,i]),z=O(()=>{let f=0,$=0;const w=[];return v.forEach(I=>{if(Array.isArray(I.items)){Ae(I,$++),I.items.forEach(k=>{Ae(k,f++),w.push(k)});return}return Ae(I,f++),w.push(I)},[]),w},[v]);return E(()=>{p(f=>Object.values(f).some(w=>w[pe]!=null)?Object.fromEntries(Object.entries(f).map(([w,I])=>I[pe]==null?[w,I]:m([w,I[pe]]))):f)},[m]),{processedItems:v,visibleData:z,filters:g,filterFunctions:x,setFilterState:h}},Ki=n=>{const e=r=>{const i=n.data.indexOf(r);if(i<0)return null;const o=n.data.splice(i,1);if(n.data=n.data.slice(),Array.isArray(o)&&o.length>0)return o[0]},t=(r,i)=>{n.data.splice(r,1,i),n.data=n.data.slice()};return{removeItem:e,removeItems(r){const i=[];for(let o=r.length-1;o>=0;o-=1){const l=n.removeItem(r[o]);l!=null&&i.push(l)}return i},replaceItemAtIndex:t,replaceItem(r,i){const o=n.data.indexOf(r);if(o>-1)return t(o,i)},selectItem(r){n.shadowRoot.querySelector("#groupedList").select(r)},selectAll(){n.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){n.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(r){n.shadowRoot.querySelector("#groupedList").deselect(r)},isItemSelected(r){return n.shadowRoot.querySelector("#groupedList").isItemSelected(r)}}},Ui=({host:n,visibleData:e,filters:t,...r})=>{const{setFilterState:i}=r,o=O(()=>Ki(n),[]),[l,a]=It("selectedItems",[]);Le(r,Object.values(r)),Le(o,Object.values(o)),E(()=>{const u=c=>i(c.detail.name,m=>({...m,...c.detail.state}));return n.addEventListener("legacy-filter-changed",u),()=>n.removeEventListener("legacy-filter-changed",u)},[]),X("visibleData",e),X("sortedFilteredGroupedItems",r.sortedFilteredGroupedItems),X("sortOn",r.sortOn),X("descending",r.descending),X("isMini",r.isMini);const s=O(()=>Object.fromEntries(Object.entries(t).filter(([,{filter:u}])=>u!==void 0).map(([u,{filter:c}])=>[u,c])),[t]);return X("filters",s,Object.values(s)),{selectedItems:l,setSelectedItems:a}},Qi=n=>{const{hashParam:e,settingsId:t,data:r,resizeSpeedFactor:i,noLocal:o,noLocalSort:l=o,noLocalFilter:a=o,error:s,rowPartFn:u}=n,c=$i({settingsId:t,host:n}),{settings:m,setSettings:g,columns:p,resetRef:h,savedSettings:y}=c,x=y!==void 0,b=Hr(p,e,{settings:m,setSettings:g,resetRef:h,ready:x}),{processedItems:v,visibleData:z,filters:f,setFilterState:$,filterFunctions:w}=Xi({data:r,columns:p,hashParam:e,sortAndGroupOptions:b,noLocalSort:l,noLocalFilter:a}),{isMini:I,collapsedColumns:k,miniColumns:W,requestTween:H}=Mi({host:n,columns:p,settings:m,setSettings:g,resizeSpeedFactor:i,sortAndGroupOptions:b}),Xe=r&&Array.isArray(r)&&r.length>0,{selectedItems:Fe,setSelectedItems:Ke}=Ui({host:n,visibleData:z,sortedFilteredGroupedItems:v,columns:p,filters:f,setFilterState:$,isMini:I,...b}),Ue=Ni({host:n,selectedItems:Fe,sortAndGroupOptions:b,dataIsValid:Xe,data:r,columns:p,filters:f,collapsedColumns:k,settings:m,filterFunctions:w,settingS:c,setFilterState:$,hideSelectAll:n.hideSelectAll===!0,requestTween:H});return{header:Ue,list:Gi({host:n,error:s,dataIsValid:Xe,processedItems:v,selectedItems:Fe,setSelectedItems:Ke,columns:p,collapsedColumns:k,miniColumns:W,sortAndGroupOptions:b,rowPartFn:u}),footer:Ri({host:n,selectedItems:Fe,allSelected:Ue.allSelected,setSelectedItems:Ke,columns:p,enableSelectAll:n.enableSelectAll,allItemsCount:n.allItemsCount})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||Ve(this._renderFn(this._item,this._index),this)}});const Yi={group:Symbol("group")},Ie=(n,e)=>(e.has(n)||e.set(n,{}),e.get(n)),Ji=(n,e)=>!!Ie(n,e).expanded,Zi=(n,e)=>!!Ie(n,e).folded,be=n=>n?n.items instanceof Array:!1,eo=n=>{if(!Array.isArray(n)||n.length===0)return;const e=Array.isArray(n[0]?.items);if(!n.every(r=>Array.isArray(r.items)===e))throw new Error("Data must be homogeneous.")},to=(n,e,t)=>Array.isArray(n)?(eo(n),n.reduce((i,o)=>{const l=o;return l.items?l.items.length?Ie(o,t).folded?i.concat(o):i.concat(o,l.items.map(a=>Object.assign(a,{[Yi.group]:o}))):e?i.concat(o):i:i.concat(o)},[])):void 0,no=(n,...e)=>typeof n=="function"?n(...e):n,ro=(n,e)=>n===e,io=()=>{const[n,e]=R(()=>[new WeakMap]);return{setItemState:S((r,i)=>e(([o])=>{const l=Ie(r,o);return Object.assign(l,no(i,l)),[o]}),[]),state:n[0],signal:n}},oo=()=>{const{setItemState:n,state:e,signal:t}=io(),r=S((o,l)=>{be(o)&&n(o,a=>({folded:l!==void 0?l:!a.folded}))},[]),i=S((o,l)=>{be(o)||n(o,a=>({expanded:l!==void 0?!l:!a.expanded}))},[]);return{state:e,signal:t,toggleFold:r,toggleCollapse:i}},lo=({compareItemsFn:n,data:e,flatData:t})=>{const[r,i]=It("selectedItems",()=>[]),[o,l]=R(),a=S(b=>r===L||r.includes(b),[r]),s=S(b=>r===L||(b?.items?.every(a)??!1),[r,a]),u=S(b=>a(b)||s(b),[a,s]),c=S(b=>{const z=b.items??[b];i(f=>f===L?f:[...f,...z.filter($=>!f.includes($))]),l(b)},[]),m=S(b=>{const z=b.items??[b];i(f=>f===L?(t??[]).filter($=>!be($)).filter($=>!z.includes($)):f.filter($=>!z.includes($))),l(b)},[t]),g=S(b=>{i(b.items?.slice()||[b]),l(b)},[]),p=S(()=>{i(e.flatMap(b=>b.items||b)),l(void 0)},[e]),h=S(()=>{i([]),l(void 0)},[]),y=S((b,v=!u(b))=>v?c(b):m(b),[u]),x=S((b,v)=>{if(!t)return;const z=o?t.findIndex(w=>n(w,o)):-1;if(z<0)return y(b,v);const[f,$]=[z,t.indexOf(b)].sort((w,I)=>w-I);t.slice(f,$+1).forEach((w,I,k)=>{I>0&&I<k.length-1&&be(w)||y(w,v)}),l(b)},[t,n,y]);return E(()=>i(b=>b!==L&&b.length>0&&t?t.filter(v=>b.find(z=>n(v,z))):b),[t]),{selectedItems:r,isItemSelected:a,isGroupSelected:s,isSelected:u,select:c,deselect:m,selectOnly:g,selectAll:p,deselectAll:h,toggleSelect:y,toggleSelectTo:x}},ao={host:{position:"relative",display:"flex",flexDirection:"column"}},so=n=>{const{data:e,renderItem:t,renderGroup:r,displayEmptyGroups:i,compareItemsFn:o=ro}=n,{toggleFold:l,toggleCollapse:a,state:s,signal:u}=oo(),c=O(()=>to(e,i,s),[e,i,u]),{selectedItems:m,isItemSelected:g,isGroupSelected:p,isSelected:h,select:y,deselect:x,selectOnly:b,selectAll:v,deselectAll:z,toggleSelect:f,toggleSelectTo:$}=lo({compareItemsFn:o,data:e,flatData:c}),w=S((k,W)=>Array.isArray(k.items)?r(k,W,{selected:p(k),folded:Zi(k,s),toggleSelect:H=>f(k,typeof H=="boolean"?H:void 0),toggleFold:()=>l(k)}):t(k,W,{selected:g(k),expanded:Ji(k,s),toggleSelect:H=>f(k,typeof H=="boolean"?H:void 0),toggleCollapse:()=>a(k)}),[t,r,m,f,u]);zt(()=>{Object.assign(n.style,ao.host)},[]);const I={toggleFold:l,toggleCollapse:a,isItemSelected:g,isGroupSelected:p,isSelected:h,select:y,deselect:x,selectOnly:b,selectAll:v,deselectAll:z,toggleSelect:f,toggleSelectTo:$};return Le(I,Object.values(I)),{renderRow:w,flatData:c}},uo=({renderRow:n,flatData:e})=>gn({items:e,renderItem:(t,r)=>d`<cosmoz-grouped-list-row
				.item=${t}
				.index=${r}
				.renderFn=${n}
			></cosmoz-grouped-list-row>`}),co=n=>uo(so(n));customElements.define("cosmoz-grouped-list",T(co,{useShadowDOM:!1}));const mo=n=>window.ShadyCSS?.ApplyShim?.transformCssText?.(n)||n,po=n=>{const{header:e,list:t,footer:r}=Qi(n);return d`
		<style>
			${hn([],()=>mo(Yr))}
		</style>

		<div class="mainContainer">
			${ri(e)}
			<div class="tableContent" id="tableContent">
				${li(e,t)}
			</div>
			${ni(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`};customElements.define("cosmoz-omnitable",T(po,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","disabled-filtering","loading","mini-breakpoint","inline","enable-select-all"]}));const xe=`
	<slot name="actions" slot="actions"></slot>
`;d(Object.assign([xe],{raw:[xe]}));bt(Object.assign([xe],{raw:[xe]}));
