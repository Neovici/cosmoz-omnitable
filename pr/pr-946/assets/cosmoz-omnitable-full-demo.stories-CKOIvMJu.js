import{d as m,w as Gt,D as Ae,A as xt}from"./iframe-BbxhXiMK.js";import{B as be,q as O,c as T,t as Q,g as z,P as V,u as N,a as vt,m as yt,s as Wt,D as qt,b as Xt,e as Ut,i as $e,h as Re,d as Kt,f as $t,r as Qt,j as Jt,k,l as Yt,n as J,p as W,o as Je,v as wt,w as we,x as Zt,y as en,z as tn,T as nn,A as E,C as I,E as w,F as on,G as rn,H as ln,I as an,J as sn,K as zt,L as Me,M as Ct,N as Ne,O as un,Q as St,R as cn,S as je,U as Ye,V as dn,W as Pe,X as mn,Y as pn,Z as Ee,_ as Be,$ as gn,a0 as Te,a1 as B,a2 as hn,a3 as Ie,a4 as fn}from"./cosmoz-collapse-1AqLBkxW.js";import"./preload-helper-PPVm8Dsz.js";const bn=({slot:n,title:e,className:t,width:o="24",height:r="24",styles:i}={})=>m`
  <svg
    slot=${be(n)}
    class=${`delete-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${o}
    height=${r}
    style=${be(i)}
  >
    ${O(e,()=>Gt`<title>${e}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`,xn=()=>m`<style>
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
</style>`;customElements.define("cz-spinner",T(xn));const vn=Q`
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
`,yn=()=>m`
	<style>
		${vn}
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
`;customElements.define("cosmoz-clear-button",T(yn));const q=({valuePath:n},e)=>z(e,n),$n=q,wn=q,zn=({valuePath:n},e)=>t=>{const o=z(t,n);return o==null?!1:o.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},Cn=(n,e)=>e===""||e==null?null:e,R=n=>class extends n{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:"right"},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return q(e,t)}toXlsxValue(e,t){return $n(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return Cn(e,t)}deserializeFilter(e,t){return t==null?null:typeof t=="string"?window.decodeURIComponent(t):t}getComparableValue(e,t){return wn(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,o){super._propertiesChanged(e,t,o),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},Sn=n=>e=>n(t=>{if(t.inputValue===void 0&&e.target.value==="")return t;clearTimeout(t.t);const o=setTimeout(()=>n(r=>({...r,filter:r.inputValue})),1e3);return{...t,inputValue:e.target.value,t:o}}),kn=n=>()=>n(e=>({...e,filter:e.inputValue})),_n=n=>e=>{e.keyCode===13&&(e.preventDefault(),n(t=>({...t,filter:t.inputValue})))},In=n=>e=>n(t=>({...t,headerFocused:e.detail.value})),Fn=n=>()=>n(e=>({...e,filter:null,inputValue:null})),On=n=>n!=null&&n!=="";class Dn extends R(V){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===""))return zn(e,t)}renderCell(e,{item:t}){return m`<span class="default-column">${q(e,t)}</span>`}renderEditCell(e,{item:t},o){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${q(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:o,headerFocused:r},i){return m`<cosmoz-input
			label=${e.title}
			.value=${o??t}
			@value-changed=${Sn(i)}
			focused=${r}
			@focused-changed=${In(i)}
			@keydown=${_n(i)}
			@blur=${kn(i)}
		>
			<cosmoz-clear-button
				suffix
				slot="suffix"
				?visible=${On(t)}
				light
				@click=${Fn(i)}
			></cosmoz-clear-button>
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",Dn);const j=Symbol("column"),Vn=n=>{let e=!0;const t=n.map(o=>o.name);return n.forEach(o=>{o.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",o))}),n.forEach(o=>{t.indexOf(o.name)!==t.lastIndexOf(o.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",o))}),e},An=n=>{const e=n.valuePath??n.name;return{name:n.name,title:n.title,valuePath:e,groupOn:n.groupOn??e,sortOn:n.sortOn??e,noSort:n.noSort,minWidth:n.minWidth,width:n.width,flex:n.flex,priority:n.priority,getString:n.getString,getComparableValue:n.getComparableValue,serializeFilter:n.serializeFilter,deserializeFilter:n.deserializeFilter,toXlsxValue:n.toXlsxValue,renderHeader:n.renderHeader,renderCell:n.renderCell,renderEditCell:n.renderEditCell,renderGroup:n.renderGroup,cellTitleFn:n.cellTitleFn,headerTitleFn:n.headerTitleFn,getFilterFn:n.getFilterFn,headerCellClass:n.headerCellClass,cellClass:n.cellClass,editable:n.editable,values:n.values,source:yt(n.computeSource),noLocalFilter:n.noLocalFilter,mini:n.mini,renderMini:n.renderMini,loading:n.loading,externalValues:n.externalValues,computeSource:n.computeSource,trueLabel:n.trueLabel,falseLabel:n.falseLabel,valueProperty:n.valueProperty,textProperty:n.textProperty,emptyLabel:n.emptyLabel,emptyValue:n.emptyValue,min:n.min,max:n.max,locale:n.locale,autoupdate:n.autoupdate,maximumFractionDigits:n.maximumFractionDigits,minimumFractionDigits:n.minimumFractionDigits,currency:n.currency,rates:n.rates,autodetect:n.autodetect,ownerTree:n.ownerTree,keyProperty:n.keyProperty,...n.getConfig?.(n),[j]:n}},En=n=>n.isOmnitableColumn&&!n.hidden,Tn=n=>{const e=n.filter(En);return Vn(e)?e:[]},Ln=(n,e)=>(Array.isArray(e)?n.filter(o=>e.includes(o.name)):n.filter(o=>!o.disabled)).map(An),Rn=(n,{enabledColumns:e})=>{const[t,o]=N([]);return vt(()=>{let r,i=[];const l=n.shadowRoot.querySelector("#columnsSlot"),a=u=>()=>{const d=l.assignedNodes({flatten:!0});if(u)i=d;else{const c=d.filter(v=>!i.includes(v)),g=i.filter(v=>!d.includes(v)),p=[...c,...g].some(v=>v.isOmnitableColumn);if(i=d,!p)return}o(Ln(Tn(d),e))},s=u=>{cancelAnimationFrame(r),r=requestAnimationFrame(a(u?.type==="cosmoz-column-prop-changed"))};return s(),l.addEventListener("slotchange",s),n.addEventListener("cosmoz-column-prop-changed",s),()=>{l.removeEventListener("slotchange",s),n.removeEventListener("cosmoz-column-prop-changed",s),cancelAnimationFrame(r)}},[e]),t},kt=(n,e)=>Array.isArray(n)?n.map(t=>z(t,e)).filter((t,o,r)=>t!=null&&r.indexOf(t)===o):void 0,ee=({externalValues:n,values:e,valuePath:t},o)=>{if(n)return n;if(typeof e=="function")return e;if(t!==void 0)return kt(o,t)},Mn=(n,e,t,o)=>{const{valuePath:r}=e,i=r!==void 0?z(t,r):void 0;if(o===i)return;r!==void 0&&Wt(t,r,o);const l={item:t,valuePath:r,value:o,oldValue:i,column:e[j]};n.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:l}))},_t=n=>n?typeof n.close=="function"?n:_t(n.parentElement):null,He=n=>class extends n{static get properties(){return{filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,t,o){if(e==null||e==="")return;const r=typeof e=="number"?e:Number(e);if(Number.isNaN(r))return;if(o==null||t==null)return r;const i=this.toNumber(t);return i==null?r:o(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let o=e;return t!=null&&(o=this.get(t,e)),this.toValue(o)}renderValue(){}getInputString(e,t=this.valuePath){const o=this.toValue(this.get(t,e));return this._toInputString(o)}_computeRange(e){const t=e.base,o=Array.isArray(t)&&t.length&&t.map(r=>this.toValue(r)).filter(r=>r!=null);return!o||o.length<1?{min:null,max:null}:o.reduce((r,i)=>({min:this.toValue(i,r.min,Math.min),max:this.toValue(i,r.max,Math.max)}),{})}_computeLimit(e,t,o,r){if(!e)return;const i=t.base,l=this.toValue(o),a=this.toValue(r),s=l??this.toValue(e.min),u=a??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(u,this._fromInputString(i.max,"max"),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,"min"),Math.max),toMax:u}}_computeFilterText(e){if(e.base==null)return;const t=e.base,o=this.toValue(t.min),r=this.toValue(t.max),i=[];return o!=null&&i.push(this.renderValue(o)),i.push(" - "),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(""):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const t=this.toValue(e);return t??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){const o=e.path.split(".")[1];this.__inputChangePath=o||null,t&&(this._limitInputDebouncer=qt.debounce(this._limitInputDebouncer,Xt.after(600),()=>{this._limitInput(),this._updateFilter()}),Ut(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const t=e.currentTarget,o=Array.from(t.parentElement.querySelectorAll("cosmoz-input")),r=o[o.findIndex(a=>a===t)+1],i=!r,l=o[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{const a=this._limitInput();this._updateFilter(),a||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||l&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){const t=_t(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:o}){(t==="focus"||o?.value===!0)&&setTimeout(()=>{e.querySelector("cosmoz-input:focus")||e.querySelector("cosmoz-input")?.focus()},100)}_limitInput(){const e=this._filterInput,t=this.__inputChangePath,o=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,o==null)return!1;const r=this._limit,i=t==="min"?"from":"to",l=this.get(i+"Min",r),a=this.get(i+"Max",r),s=this.toValue(o,l,Math.max),u=this.toValue(s,a,Math.min);return this.getComparableValue(o)!==this.getComparableValue(u)?(this.set(["_filterInput",t],this._toInputString(u,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,t=this.filter,o=this._fromInputString(e.min,"min"),r=this._fromInputString(e.max,"max");this.getComparableValue(o)===this.getComparableValue(t,"min")&&this.getComparableValue(r)===this.getComparableValue(t,"max")||this.set("filter",{min:o,max:r})}_filterChanged(e){if(this._filterInput==null)return;const t=this._filterInput,o=e.base,r=this._fromInputString(t.min,"min"),i=this._fromInputString(t.max,"max");this.getComparableValue(r)===this.getComparableValue(o,"min")&&this.getComparableValue(i)===this.getComparableValue(o,"max")||(this.set("_filterInput",{min:this._toInputString(o.min),max:this._toInputString(o.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve($e(e,{active:t})).then(o=>{const{min:r,max:i}=o??{};Object.assign(this,{...r!=null?{min:r}:{},...i!=null?{max:i}:{}})})}},te=n=>class extends n{static get template(){return Re`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),Ae(this.render(),this.$.output)}_propertiesChanged(e,t,o){super._propertiesChanged(e,t,o),requestAnimationFrame(()=>Ae(this.render(),this.$.output))}},Nn=["label","value","slot","always-float-label"],jn=$t`
	${Kt}

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
`,Pn=n=>{const{label:e,value:t,slot:o}=n,r=m`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${o}
	>
		${t||""}
	</div>`;return Qt(r,{label:e})};customElements.define("cosmoz-omnitable-dropdown-input",T(Pn,{observedAttributes:Nn,styleSheets:[jn]}));const ne=({title:n,tooltip:e="",filterText:t="",onOpenedChanged:o,content:r,horizontalAlign:i="left",externalValues:l=null})=>{const a={filtered:!!t,...l!=null&&{[`external-values-${l}`]:!0}};return m`
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
			@focus=${o}
			class=${`${Jt(a)} dropdown`}
			title=${e||""}
		>
			<cosmoz-omnitable-dropdown-input
				class="input"
				slot="button"
				.label=${n}
				.placeholder=${n}
				.value=${t??""}
				text-align=${i}
				?always-float-label=${t?.length>0}
			></cosmoz-omnitable-dropdown-input>
			<div class="dropdown-content">${r}</div>
		</cosmoz-dropdown>
	`};class Bn extends He(te(V)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, _formatters)"},headerFocused:{type:Boolean,value:!1}}}static get observers(){return["_valuesChanged(autodetect, currency, values)"]}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return m`
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

			${ne({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:m`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						title=${k("Minimum amount")}
						label=${k("Min amount")}
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
						title=${k("Maximum amount")}
						label=${k("Max amount")}
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
		`}_valuesChanged(e,t,o){if(!Array.isArray(o)||o.length<1||!e&&t)return;const r=o.reduce((l,a)=>{if(a.currency){const s=a.currency;l[s]=(l[s]||0)+1}return l},{});let i=Object.keys(r)[0];Object.keys(r).reduce((l,a)=>{const s=Math.max(l,r[a]);return s===r[a]&&(i=a),s},0),this.set("currency",i)}toAmount(e,t,o){if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;const i={currency:e.currency,amount:r};if(o==null||t==null)return i;const l=this.toAmount(t);if(l==null)return i;const a=this.rates||{},s=i.amount*(a[i.currency]||1),u=l.amount*(a[l.currency]||1);return this.toNumber(s,u,o)===s?i:l}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){const o=super.getComparableValue(e,t);if(o==null)return;const r=this.toNumber(o.amount),i=this.rates;return i==null?r:r*(i[o.currency]||1)}getString(e,t=this.valuePath){const o=this.toValue(this.get(t,e));return o===void 0?"":o===null?"Invalid value":this.renderValue(o)}getCurrency(e,t){const o=this.get(t,e);return o&&o.currency}getFormatter(e,t){const o=t||"",r=e+o||"",i=this._formatters=this._formatters||{};return i[r]||(i[r]=new Intl.NumberFormat(t||void 0,{style:"currency",currency:e})),i[r]}renderValue(e){const t=this.toAmount(e);return t==null?"":this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){const t=e.target,o=t.value,r=e.model.item,i=this.get(this.valuePath,r),l=Number(o),a={amount:l,currency:i.currency};this.set(this.valuePath,a,r),this._fireItemChangeEvent(r,this.valuePath,i,this.renderValue.bind(this))}_toInputString(e){const t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){const t=this.rates;if(t==null)return this._toInputString(e);const o=this.toValue(e);return o==null?null:(this.toNumber(o.amount)*(t[o.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){const o=this.toNumber(e);if(o!=null)return this.toValue({amount:o,currency:t&&this.get(["filter",t,"currency"])||this.currency})}}customElements.define("cosmoz-omnitable-amount-range-input",Bn);const L=(n,e,t)=>{if(n==null||n==="")return;const o=typeof n=="number"?n:Number(n);if(!Number.isNaN(o))return o},It=n=>{const e=L(n);return e==null?null:e.toString()},Hn=({valuePath:n},e)=>{const t=L(n?z(e,n):e);return It(t)},Ze=n=>{const e=It(n);return e??""},X=({valuePath:n,maximumFractionDigits:e},t)=>{if(t==null)return;const o=n?z(t,n):t,r=L(o);if(r!=null)return e!==null?L(r.toFixed(e)):r},Gn=Yt((n,e,t)=>{const o={localeMatcher:"best fit"};return e!==null&&(o.minimumFractionDigits=e),t!==null&&(o.maximumFractionDigits=t),new Intl.NumberFormat(n||void 0,o)}),et=({valuePath:n,locale:e,minimumFractionDigits:t,maximumFractionDigits:o},r)=>{const i=n?z(r,n):r;if(i==null)return"";const l=L(i);return l==null?void 0:Gn(e,t,o).format(l)},Wn=(n,e)=>t=>{const o=X(n,t);if(o==null)return!1;const r=X({...n,valuePath:"min"},e),i=X({...n,valuePath:"max"},e);return!(o<(r??-1/0)||o>(i??1/0))},Z=(n={},e,t,o)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const r=L(e.amount);return r==null||Number.isNaN(r)?null:{currency:e.currency,amount:r}},U=({valuePath:n,rates:e},t)=>{if(t==null)return;let o=t;n!=null&&(o=z(t,n));const r=Z(e,o);if(r==null)return;const i=L(r.amount);return e==null||i==null?i:i*(e?.[r.currency]||1)},qn=(n,e)=>t=>{const o=U(n,t);if(o===void 0)return!1;const r=U({...n,valuePath:"min"},e),i=U({...n,valuePath:"max"},e);return r===void 0||i===void 0?!0:!(o<r||o>i)},oe={},Xn=(n,e)=>{const o=n+(e||"")||"";return oe[o]||(oe[o]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:n})),oe[o]},Un=(n,e,t)=>{const o=Z(n,e);return o==null?"":Xn(o.currency,t).format(o.amount)},tt=({valuePath:n,rates:e,locale:t},o)=>{const r=Z(e,n?z(o,n):void 0);return r===void 0?"":r===null?"Invalid value":Un(e,r,t)},nt=n=>n?n.amount+n.currency:"",ot=n=>{if(n==null||n==="")return;const e=n.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(e)||e.length<0))return{amount:Number(e[1]),currency:e[2]}},Kn=({valuePath:n},e)=>n?z(e,n)?.currency:null,Qn=({valuePath:n},e)=>n?z(e,n)?.amount:void 0;class Jn extends R(V){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell align-right"},headerCellClass:{type:String,value:"amount-header-cell"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=U({...e,valuePath:"min"},t),r=U({...e,valuePath:"max"},t);if(!(o==null&&r==null))return qn(e,t)}getString(e,t){return tt(e,t)}toXlsxValue(e,t){return tt(e,t)}getComparableValue(e,t){return U(e,t)}serializeFilter({rates:e},t){if(t==null)return;const o=Z(e,t.min),r=Z(e,t.max);if(!(o==null&&r==null))return nt(o)+"~"+nt(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:ot(o[1]),max:ot(o[2])}:null}renderCell(e,{item:t}){return m`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},o){return m`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>o({amount:i.target.value,currency:z(t,e.valuePath)?.currency})}
			.value=${Qn(e,t)}
		>
			<div slot="suffix">${Kn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,rates:l,currency:a,autoupdate:s,autodetect:u},{filter:d},c,g){return m`<cosmoz-omnitable-amount-range-input
			.title=${e}
			.filter=${d}
			.values=${g}
			.rates=${l}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.currency=${a}
			.autoupdate=${s}
			.autodetect=${u}
			@filter-changed=${({detail:{value:p}})=>c(v=>({...v,filter:p}))}
			@header-focused-changed=${({detail:{value:p}})=>c(v=>({...v,headerFocused:p}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return ee(e,t)}}customElements.define("cosmoz-omnitable-column-amount",Jn);const Yn=(n,e)=>{if(!Array.isArray(n))return;const t=[];return n.reduce((o,r)=>Array.isArray(r)?(r.forEach(i=>{o.push(i)}),o):(o.push(r),o),[]).filter((o,r,i)=>{if(i.indexOf(o)!==r)return!1;if(e){const l=z(o,e);if(t.indexOf(l)!==-1)return!1;t.push(l)}return!0})},Zn=(n,e,t)=>{if(n==null)return[];if(Array.isArray(n)){const o=Yn(n,e);if(!o?.length)return o;const r=t??"label",i=l=>typeof l=="object"&&l!=null?String(z(l,r)??""):String(l??"");return o.sort((l,a)=>i(l).localeCompare(i(a)))}if(typeof n=="object"){const o=e??"id",r=t??"label";return Object.entries(n).map(([i,l])=>({[o]:i,[r]:l})).sort((i,l)=>String(i[r]??"").localeCompare(String(l[r]??"")))}return[]},Ge=(n,e,t)=>J(e&&z(n,e)).map(W(t)),We=({valuePath:n,textProperty:e},t)=>Ge(t,n,e).filter(o=>o!=null).join(", "),eo=We,to=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:o},r)=>i=>{const l=W(n),a=J(z(i,e));return r.some(s=>a.length===0&&W(o||n)(s)===t||a.some(u=>l(u)===l(s)))},ze=n=>e=>n(t=>({...t,filter:e})),Ce=n=>e=>n(t=>({...t,headerFocused:e})),Se=n=>e=>n(t=>({...t,query:e})),Ft=({emptyValue:n,emptyLabel:e,emptyProperty:t,textProperty:o,valueProperty:r},i)=>{const l=Zn(i,r,o);return!e||n===void 0||!o||!(t||r)||!l?l:[{[o]:e,[t||r]:n},...l]},no=(n,e)=>Ft(n,kt(e,n.valuePath)),ke=n=>class extends n{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return We(e,t)}toXlsxValue(e,t){return eo(e,t)}getComparableValue({valuePath:e,valueProperty:t},o){const r=z(o,e);return t==null?r:J(r).reduce((l,a)=>(l.push(z(a,t)),l),[]).sort().join(" ")}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return to(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){return JSON.parse(decodeURIComponent(t))}computeSource(e,t){return e.externalValues||typeof e.values=="function"?async(...o)=>Ft(e,await Promise.resolve($e(e.values,...o))):no(e,t)}},oo=({valuePath:n,textProperty:e,valueProperty:t},o)=>{const r=e?wt(e):W(t),i=J(n&&z(o,n)).map(r);return i.length>1?i.filter(Boolean).join(","):i[0]},ro=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:o},r)=>{const i=W(n),l=W(o||n),a=new Set(r.filter(c=>c.excluded).map(c=>i(c.item))),s=new Set(r.filter(c=>!c.excluded).map(c=>i(c.item))),u=r.some(c=>c.excluded&&l(c.item)===t),d=r.some(c=>!c.excluded&&l(c.item)===t);return c=>{const g=J(z(c,e)).map(i);return g.length===0?!u&&(d||s.size===0):!g.some(p=>a.has(p))&&(s.size===0||g.some(p=>s.has(p)))}};let io=class extends ke(R(V)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return m`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},o){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${q(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:o},r,i){return m`<cosmoz-autocomplete-excluding
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
			.itemRenderer=${e[j]?.itemRenderer}
			.value=${t}
			.text=${o}
			.limit=${e.limit}
			@opened-changed=${l=>Ce(r)(l.detail.value)}
			@value-changed=${Je(ze(r))}
			@text-changed=${Je(Se(r))}
			>${O(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return oo(e,t)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return ro(e,t)}};customElements.define("cosmoz-omnitable-column-autocomplete-excluding",io);const lo=({valuePath:n,textProperty:e,valueProperty:t},o)=>{const r=e?wt(e):W(t),i=J(n&&z(o,n)).map(r);return i.length>1?i.filter(Boolean).join(","):i[0]};class ao extends ke(R(V)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return m`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},o){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${q(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:o},r,i){return m`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[j]?.itemRenderer}
			.value=${t}
			.text=${o}
			.limit=${e.limit}
			.onChange=${ze(r)}
			@opened-changed=${l=>Ce(r)(l.detail.value)}
			.onText=${Se(r)}
			>${O(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return lo(e,t)}}customElements.define("cosmoz-omnitable-column-autocomplete",ao);const qe=(n,e)=>e.find(({value:t})=>n===t),so=(n,e,t)=>{const o=qe(e,t);return o?o.text:n},rt=(n,e,t,o)=>so(n,z(e,t),o),uo=({valuePath:n},e,t)=>qe(z(e,n),t),co=n=>e=>{n(t=>({...t,filter:e?.[0]?.value??null}))},mo=n=>e=>{n(t=>({...t,headerFocused:e}))},po=n=>e=>{n(t=>({...t,query:e}))},go=n=>e=>n(e?.[0]?.value),it=({valuePath:n,trueLabel:e,falseLabel:t},o)=>z(o,n)?e:t,ho=({valuePath:n},e)=>t=>z(t,n)===e,re=yt((n,e)=>[{text:n,value:!0},{text:e,value:!1}]),fo=({valuePath:n,trueLabel:e,falseLabel:t},o)=>n?z(o,n)?e:t:"",bo=(n,e)=>{try{return JSON.parse(e)}catch{return null}};class xo extends R(V){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,t){return it(e,t)}renderCell(e,{item:t}){return it(e,t)}renderEditCell(e,{item:t},o){const{trueLabel:r,falseLabel:i}=e;return m`<cosmoz-autocomplete
			no-label-float
			.title=${rt(e.title,t,e.valuePath,re(r,i))}
			.source=${re(r,i)}
			.textProperty=${"text"}
			.value=${uo(e,t,re(r,i))}
			.onChange=${go(o)}
			.limit=${1}
			>${O(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:o},r,i){return m`<cosmoz-autocomplete-ui
			.label=${e.title}
			.title=${rt(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${"text"}
			.value=${qe(t,i)}
			.text=${o}
			.onChange=${co(r)}
			@opened-changed=${l=>mo(r)(l.detail.value)}
			.onText=${po(r)}
			.limit=${1}
			>${O(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return re(e,t)}getFilterFn(e,t){if(t!=null)return ho(e,t)}toXlsxValue(e,t){return fo(e,t)}deserializeFilter(e,t){return bo(e,t)}}customElements.define("cosmoz-omnitable-column-boolean",xo);const Xe=n=>class extends He(n){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"}}}toDate(e,t,o){if(e==null||e==="")return;let r=e;if(r instanceof Date||(typeof e=="string"&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(o==null||t==null)return r;const i=this.toDate(t);if(i==null)return r;const l=this.getComparableValue(r),a=this.getComparableValue(i);return o(l,a)===l?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){const o=super.getComparableValue(e,t);if(o!=null)return this.toNumber(o.getTime())}getString(e,t=this.valuePath,o=this.formatter){const r=this.toValue(this.get(t,e));return r===void 0?"":r===null?"Invalid Date":this.renderValue(r,o)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const t=-new Date(e).getTimezoneOffset()/60;return(t<0?"-":"+")+["0",Math.abs(t)].join("").substr(-2)+":00"}renderValue(e,t=this.formatter){if(t==null)return;const o=this.toValue(e);if(o!=null)return t.format(o)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){const t=e.currentTarget,o=t.value,r=e.model.item,i=this.get(this.valuePath,r),l=this._fromInputString(o);this.set(this.valuePath,l,r),this._fireItemChangeEvent(r,this.valuePath,i,this.renderValue.bind(this))}_toLocalISOString(e){return we(e)}};class vo extends Xe(te(V)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return m`
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

			${ne({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:m`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="date"
						label=${k("From date")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						.value=${this._filterInput?.min}
						@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="date"
						label=${k("Until date")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						.value=${this._filterInput?.max}
						@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
					></cosmoz-input>
				`})}
		`}_fromInputString(e,t){const o=this.toDate(e);if(o!=null)return t==="min"&&o.setHours(0,0,0,0),t==="max"&&o.setHours(23,59,59),o}_filterInputChanged(e,t){const o=e.path.split(".")[1],r=o&&e.value;if(r&&r.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}}customElements.define("cosmoz-omnitable-date-range-input",vo);const yo=n=>{const e=-new Date(n).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},Ue=n=>n.length===19?n+yo(n):n,Ot=n=>{if(n==null||n==="")return;let e=n;return!(e instanceof Date)&&(typeof n=="string"&&(e=Ue(e)),e=Zt(e),!e)||Number.isNaN(e.getTime())?null:e},P=({valuePath:n},e)=>{if(e==null)return;let t=e;n!=null&&(t=z(e,n));const o=Ot(t);if(o!=null)return L(o.getTime())},A=(n,e,t)=>{const o=Ot(n);return o??null},Ke=(n,e)=>{if(e==null)return;const t=A(n);if(t!=null)return e.format(t)},ie={},$o=n=>{const e=n||"";return ie[e]||(ie[e]=new Intl.DateTimeFormat(n||void 0)),ie[e]},lt=({valuePath:n,locale:e},t)=>{let o=z(t,n||"");return o===void 0?"":(o=A(o),o===null?"Invalid Date":Ke(o,$o(e)))},Dt=n=>{const e=A(n);if(e==null)return null;const t=we(e);return t==null?null:t.slice(0,10)},wo=({valuePath:n},e)=>Dt(z(e,n||"")),Vt=(n,e)=>{const t=A(n);if(t!=null)return t},at=n=>{const e=Dt(n);return e??""},zo=({valuePath:n},e)=>{if(!n)return"";const t=A(z(e,n));if(!t)return"";const o=A(we(t));return o?(o.setHours(0,0,0,0),o):""},At=(n,e)=>t=>{const o=P(n,t);if(o==null)return!1;const r=P({...n,valuePath:"min"},e),i=P({...n,valuePath:"max"},e);return!(o<(r??-1/0)||o>(i??1/0))};class Co extends R(V){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=P({...e,valuePath:"min"},t),r=P({...e,valuePath:"max"},t);if(!(o==null&&r==null))return At(e,t)}getString(e,t){return lt(e,t)}toXlsxValue(e,t){return zo(e,t)}getComparableValue(e,t){return P(e,t)}serializeFilter(e,t){if(t==null)return;const o=A(t.min),r=A(t.max);if(!(o==null&&r==null))return at(o)+"~"+at(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:A(o[1]),max:A(o[2])}:null}renderCell(e,{item:t}){return m`<div class="omnitable-cell-date">
			${lt(e,t)}
		</div>`}renderEditCell(e,{item:t},o){return m`<cosmoz-input
			no-label-float
			type="date"
			@change=${i=>o(Vt(i.target.value))}
			.value=${wo(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i},{filter:l},a,s){return m`<cosmoz-omnitable-date-range-input
			.title=${e}
			.filter=${l}
			.values=${s}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			@filter-changed=${({detail:{value:u}})=>a(d=>({...d,filter:u}))}
			@header-focused-changed=${({detail:{value:u}})=>a(d=>({...d,headerFocused:u}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return ee(e,t)}}customElements.define("cosmoz-omnitable-column-date",Co);const le={},So=n=>{const e=n||"";if(le[e])return le[e];const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return le[e]=new Intl.DateTimeFormat(n||void 0,t),le[e]},Fe=({valuePath:n,locale:e},t)=>{const o=A(z(t,n||""));return o===void 0?"":o===null?"Invalid Date":Ke(o,So(e))},ko=({valuePath:n},e)=>n?z(e,n):"",st=n=>{const e=A(n);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},ut=n=>{if(!(n==null||n==="")&&typeof n=="string")return A(n.replace(/\./gu,":")+"Z")};class _o extends Xe(te(V)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return m`
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

			${ne({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:m`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-datetime-input
						date-label=${k("From date")}
						time-label=${k("From time")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.min}
						@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
					></cosmoz-datetime-input>
					<cosmoz-datetime-input
						date-label=${k("To date")}
						time-label=${k("To time")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.max}
						@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
					></cosmoz-datetime-input>
				`})}
		`}_toInputString(e){const t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-datetime-range-input",_o);class ct extends R(V){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=P({...e,valuePath:"min"},t),r=P({...e,valuePath:"max"},t);if(!(o==null&&r==null))return At(e,t)}getString(e,t){return Fe(e,t)}toXlsxValue(e,t){return ko(e,t)}getComparableValue(e,t){return P(e,t)}serializeFilter(e,t){if(t==null)return;const o=A(t.min),r=A(t.max);if(!(o==null&&r==null))return st(o)+"~"+st(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:ut(o[1]),max:ut(o[2])}:null}renderCell(e,{item:t}){return Fe(e,t)}renderEditCell(e,{item:t},o){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(Vt(i.target.value))}
			.value=${Fe(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,filterStep:l},{filter:a},s,u){return m`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			.filter=${a}
			.values=${u}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.filterStep=${l}
			@filter-changed=${({detail:{value:d}})=>s(c=>({...c,filter:d}))}
			@header-focused-changed=${({detail:{value:d}})=>s(c=>({...c,headerFocused:d}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return ee(e,t)}}customElements.define(ct.is,ct);class Io extends ke(R(V)){renderCell({valuePath:e,textProperty:t},{item:o}){const r=Ge(o,e,t).map(i=>m`<li>${i}</li>`);return m`
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
		`}renderEditCell(){return"not implemented"}renderHeader(e,{filter:t,query:o},r,i){return m`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${o}
			.onChange=${ze(r)}
			@opened-changed=${l=>Ce(r)(l.detail.value)}
			.onText=${Se(r)}
			>${O(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",Io);window.Cosmoz=window.Cosmoz||{};class dt extends en(tn(nn,V)){static get template(){return Re`
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
		`}static get is(){return"cosmoz-omnitable-column-list-data"}static get properties(){return{items:{type:Array},_expanded:{type:Boolean,value:!1},_othersCount:{type:Number,computed:"_computeOthersCount(items)"}}}static get observers(){return["_itemsLengthChanged(items.length)"]}_itemsLengthChanged(){requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent("expand",{bubbles:!0})))}_firstItem(e){if(e!=null&&e.length>0)return e[0]}_hideExpand(e,t){return e!==void 0&&e.length!==null?e.length<=2||t:!0}_hideCollapse(e,t){return e!==void 0&&e.length!==null?e.length<=2||!t:!0}_otherItems(e,t){if(e!=null&&(e.length<=2||t))return e.slice(1)}_computeOthersCount(e){if(e!=null)return e.length-1}_toggleExpand(e){this._expanded=!this._expanded,e.stopPropagation(),e.preventDefault()}}customElements.define(dt.is,dt);class Fo extends ke(R(V)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:o}){return m`<cosmoz-omnitable-column-list-data
			.items=${Ge(o,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},o){const r=i=>o(i.target.value.split(/,\s*/gu));return m`<cosmoz-input
			no-label-float
			type="text"
			.value=${We(e,t)}
			@change=${r}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:o},r,i){return m`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			.textual=${e.textual}
			.column=${e}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[j]?.itemRenderer}
			.value=${t}
			.text=${o}
			.onChange=${ze(r)}
			@opened-changed=${l=>Ce(r)(l.detail.value)}
			.onText=${Se(r)}
			>${O(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",Fo);class Oo extends He(te(V)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},headerFocused:{type:Boolean,value:!1}}}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return m`
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

			${ne({title:this.title,tooltip:this._tooltip,filterText:this._filterText,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,content:m`
					<h3>${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						label=${k("From")}
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
						label=${k("To")}
						.value=${this._filterInput?.max}
						@value-changed=${t=>{this.set("_filterInput.max",t.detail.value)}}
						@blur=${t=>this._onBlur(t)}
						@keydown=${t=>this._onKeyDown(t)}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
					></cosmoz-input>
				`})}
		`}_computeFormatter(e,t,o){const r={localeMatcher:"best fit"};return t!==null&&(r.minimumFractionDigits=t),o!==null&&(r.maximumFractionDigits=o),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let o=e;if(t!=null&&(o=this.get(t,e)),o=this.toValue(o),o==null)return;const r=this.maximumFractionDigits;return r!==null?this.toValue(o.toFixed(r)):o}renderValue(e,t=this.formatter){const o=this.toNumber(e);if(o!=null)return t.format(o)}}customElements.define("cosmoz-omnitable-number-range-input",Oo);class Do extends R(V){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell align-right"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=X({...e,valuePath:"min"},t),r=X({...e,valuePath:"max"},t);if(!(o==null&&r==null))return Wn(e,t)}getString(e,t){return et(e,t)}toXlsxValue({valuePath:e},t){return z(t,e)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;const o=L(t.min),r=L(t.max);if(!(o==null&&r==null))return Ze(o)+"~"+Ze(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:L(o[1]),max:L(o[2])}:null}renderCell(e,{item:t}){return m`<div class="omnitable-cell-number">
			${et(e,t)}
		</div>`}renderEditCell(e,{item:t},o){return m`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>o(i.target.value)}
			.value=${Hn(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,maximumFractionDigits:l,minimumFractionDigits:a,autoupdate:s},{filter:u},d,c){return m`<cosmoz-omnitable-number-range-input
			.title=${e}
			.filter=${u}
			.values=${c}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.maximumFractionDigits=${l}
			.minimumFractionDigsits=${a}
			.autoupdate=${s}
			@filter-changed=${({detail:{value:g}})=>d(p=>({...p,filter:g}))}
			@header-focused-changed=${({detail:{value:g}})=>d(p=>({...p,headerFocused:g}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return ee(e,t)}}customElements.define("cosmoz-omnitable-column-number",Do);const Et="1970-01-01",H=(n,e,t)=>{const o=typeof n=="string"&&n.length>3&&n.length<=9?Ue(Et+"T"+n):n;return A(o)},ae={},Vo=n=>{const e=n||"";if(ae[e])return ae[e];const t={hour:"numeric",minute:"numeric",second:"numeric"};return ae[e]=new Intl.DateTimeFormat(n||void 0,t),ae[e]},fe=({valuePath:n,locale:e},t)=>{const o=H(z(t,n||""));return o===void 0?"":o===null?"Invalid Date":Ke(o,Vo(e))},Ao=(n,e)=>n.valuePath?fe(n,e):"",Eo=n=>{const e=H(n);if(e==null)return null;const t=we(e);return t&&t.slice(11,19)},K=({valuePath:n},e)=>{if(e==null)return;const t=Eo(n==null?e:z(e,n));if(t==null)return;const o=H(Ue(Et+"T"+t));return o==null?o:L(o.getTime())},To=(n,e)=>t=>{const o=K(n,t);if(o==null)return!1;const r=K({...n,valuePath:"min"},e),i=K({...n,valuePath:"max"},e);return r==null||i==null?!1:!(o<r||o>i)},mt=n=>{const e=H(n);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},pt=n=>{if(!(n==null||n===""))return H(typeof n=="string"?n.replace(/\./gu,":")+"Z":n)};class Lo extends Xe(te(V)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return m`
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${ne({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:m`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="time"
						label=${k("From time")}
						step=${this.filterStep}
						.value=${this._filterInput.min}
						@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="time"
						label=${k("Until time")}
						step=${this.filterStep}
						.value=${this._filterInput.max}
						@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
					></cosmoz-input>
				`})}
		`}get _fixedDate(){return"1970-01-01"}toDate(e,t,o){const r=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(r,t,o)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let o=this._toInputString(t==null?e:this.get(t,e));if(o!=null&&(o=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+o)),o!=null))return this.toNumber(o.getTime())}_timeValueChanged(e){const t=e.target,o=t.value,r=e.model.item,i=this.toDate(r.date),l=this.toDate(i!=null?i.toISOString().slice(0,10)+"T"+o:o),a=s=>s;l==null&&(this.set(this.valuePath,l,r),this._fireItemChangeEvent(r,this.valuePath,i,a.bind(this)))}_computeFormatter(e){const t={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-time-range-input",Lo);class Ro extends R(V){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,t){const o=K({...e,valuePath:"min"},t),r=K({...e,valuePath:"max"},t);if(!(o==null&&r==null))return To(e,t)}getString(e,t){return fe(e,t)}toXlsxValue(e,t){return Ao(e,t)}getComparableValue(e,t){return K(e,t)}serializeFilter(e,t){if(t==null)return;const o=H(t.min),r=H(t.max);if(!(o==null&&r==null))return mt(o)+"~"+mt(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:pt(o[1]),max:pt(o[2])}:null}renderCell(e,{item:t}){return fe(e,t)}renderEditCell(e,{item:t},o){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${fe(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,locale:r,filterStep:i},{filter:l},a,s){return m`<cosmoz-omnitable-time-range-input
			.title=${e}
			.filter=${l}
			.values=${s}
			.min=${t}
			.max=${o}
			.locale=${r}
			.filterStep=${i}
			@filter-changed=${({detail:{value:u}})=>a(d=>({...d,filter:u}))}
			@header-focused-changed=${({detail:{value:u}})=>a(d=>({...d,headerFocused:u}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return ee(e,t)}}customElements.define("cosmoz-omnitable-column-time",Ro);const Mo=({column:n,item:e,selected:t,folded:o,group:r})=>n?(n.renderGroup??n.renderCell)(n,{item:e,selected:t,folded:o,group:r}):xt;customElements.define("cosmoz-omnitable-group-row",T(Mo,{useShadowDOM:!1}));const No=n=>{const{column:e}=n;return E(()=>{let t=0,o=0;const r=a=>{n.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(o+a.pageX-t),column:e}}))},i=()=>{document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i)},l=a=>{t=a.pageX,o=n.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",r),document.addEventListener("pointerup",i)};return n.addEventListener("pointerdown",l),()=>n.removeEventListener("pointerdown",l)},[e]),xt};customElements.define("cosmoz-omnitable-resize-nub",T(No));const jo=m`<svg
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
</svg>`,Po=m`
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
`,Oe=m` <svg
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
</svg>`,Bo=m`<svg
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
</svg> `,Tt=({column:n,on:e,descending:t,setOn:o,setDescending:r})=>{const{name:i,title:l}=n??{};return m`<button
		class="sg"
		title=${be(l)}
		data-on=${be(i===e&&(t?"desc":"asc")||void 0)}
		@click=${a=>{const u=a.currentTarget?.dataset.on;u||(o(i),r(!1)),u==="asc"?r(!0):u==="desc"&&(o(),r(!1))}}
	>
		<span>${l}</span> ${Bo}
	</button>`},Lt=({columns:n,...e})=>n?.map(t=>Tt({column:t,...e})),Ho=()=>m`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,groupOn:e,setGroupOn:t,groupOnDescending:o,setGroupOnDescending:r}={})=>Lt({columns:n?.filter?.(i=>i.groupOn),on:e,setOn:t,descending:o,setDescending:r})}
	>
	</sort-and-group-consumer>
`,Go=()=>m`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,sortOn:e,setSortOn:t,descending:o,setDescending:r}={})=>Lt({columns:n?.filter?.(i=>i.sortOn&&!i.noSort),on:e,setOn:t,descending:o,setDescending:r})}
	>
	</sort-and-group-consumer>
`,Rt=n=>(e,t,o=an)=>{const r=sn(),i=new URLSearchParams(r.hash.replace("#",""));return n(e,t,o,i),"#!"+Object.assign(r,{hash:i}).href.replace(location.origin,"")},Mt=n=>n==null||n==="",Wo=Rt((n,e,t,o)=>Mt(t(e))?o.delete(n):o.set(n,t(e))),qo=Rt((n,e,t,o)=>Object.entries(e).map(t).forEach(([r,i])=>Mt(i)?o.delete(n+r):o.set(n+r,i))),Y=(n,e,{suffix:t="",read:o,write:r,multi:i}={})=>{const[l,a]=i?[qo,on]:[Wo,rn],s=I(()=>e!=null&&a(e+t,o)!=null,[]),[u,d]=N(()=>e==null?n:a(e+t,o)??n),c=w(g=>d(p=>{const v=$e(g,p);return e!=null&&ln(l(e+t,v,r),null,{notify:!1}),v}),[e,t,l,r]);return E(()=>{e!=null&&(s||n!=null&&c(n))},[n,e,s,c]),[u,c]},Xo=n=>[!0,"true",1,"yes","on"].includes(n),se=n=>n===""||(n==null?void 0:Xo(n)),ue=(n,e,t)=>w(o=>{n(o),t(r=>({...r,[e]:o}))},[n,e,t]),Uo=(n,e,t,o,r)=>{const[i,l]=Y(t.sortOn,e,{suffix:"-sortOn"}),[a,s]=Y(se(t.descending),e,{suffix:"-descending",read:se}),[u,d]=Y(t.groupOn,e,{suffix:"-groupOn"}),[c,g]=Y(se(t.groupOnDescending),e,{suffix:"-groupOnDescending",read:se}),p=I(()=>n.find(h=>h.name===i),[n,i]),v=I(()=>n.find(h=>h.name===u),[n,u]),b={groupOn:u,setGroupOn:ue(d,"groupOn",o),groupOnDescending:c,setGroupOnDescending:ue(g,"groupOnDescending",o),sortOn:i,setSortOn:ue(l,"sortOn",o),descending:a,setDescending:ue(s,"descending",o),columns:n},x=I(()=>b,Object.values(b)),F=w(h=>{l(h.sortOn),d(h.groupOn),s(h.descending),g(h.groupOnDescending)},[]);return E(()=>{r.current=F},[]),{...x,sortAndGroup:x,groupOnColumn:v,sortOnColumn:p}},Qe=zt();customElements.define("sort-and-group-provider",Qe.Provider);customElements.define("sort-and-group-consumer",T(({render:n})=>n(Me(Qe)),{useShadowDOM:!1}));const Ko=({data:n,columns:e,groupOnColumn:t,filters:o,setFilterState:r,sortAndGroup:{sortOn:i,setSortOn:l,descending:a,setDescending:s}={}})=>Ct(e,u=>u.name,u=>[m`<div
				class="cell ${u.headerCellClass} header-cell"
				part="cell header-cell cell-${u.name} header-cell-${u.name}"
				?hidden="${u===t}"
				title="${u.headerTitleFn(u)}"
				name="${u.name}"
			>
				${u.renderHeader(u,o[u.name]??{},d=>r(u.name,d),u.source(u,n))}
				${O(!u.noSort,()=>Tt({on:i,setOn:l,descending:a,setDescending:s,column:u}))}
			</div>`,m`<cosmoz-omnitable-resize-nub
				.column="${u}"
				name="${u.name}"
			></cosmoz-omnitable-resize-nub>`]),Qo=({columns:n,settingsConfig:e,hideSelectAll:t,...o})=>{const r=Me(Qe);return m`
		${O(n,i=>Ko({columns:i,sortAndGroup:r,...o}))}
		${O(!t,()=>m` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`};customElements.define("cosmoz-omnitable-header-row",T(Qo,{useShadowDOM:!1}));const Jo=Q`
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
`,Yo=({column:n})=>m`
	<div class="label" title="${n.title}" part="item-expand-label">
		${n.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;customElements.define("cosmoz-omnitable-item-expand-line",T(Yo,{styleSheets:[Ne(Jo)]}));const Zo=({columns:n,item:e,selected:t,expanded:o,groupOnColumn:r})=>un(n,i=>m`<cosmoz-omnitable-item-expand-line
				.column=${i}
				?hidden=${i===r}
				exportparts="item-expand-label, item-expand-value"
				>${i.renderCell(i,{item:e,selected:t,expanded:o})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",T(Zo,{useShadowDOM:!1}));const er=(n,e,t)=>n.editable?n.renderEditCell(n,e,t(n,e.item)):n.renderCell(n,e),tr=({columns:n,groupOnColumn:e,item:t,index:o,selected:r,expanded:i,onItemChange:l})=>Ct(n,a=>a.name,a=>m`<div
				class="cell itemRow-cell ${a.cellClass??""}"
				part="cell itemRow-cell cell-${a.name} itemRow-cell-${a.name}"
				?hidden="${a===e}"
				?editable="${a.editable}"
				title="${a.cellTitleFn(a,t)}"
				name="${a.name}"
			>
				${er(a,{item:t,index:o,selected:r,expanded:i},l)}
			</div>`);customElements.define("cosmoz-omnitable-item-row",T(tr,{useShadowDOM:!1}));const Nt=Q`
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
`,nr=Q`
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

		text-transform: var(--cosmoz-omnitable-header-text-transform, none);
		--paper-font-subhead_-_font-weight: var(
			--cosmoz-omnitable-header-font-weight,
			normal
		);

		--cosmoz-input-font-family: var(
			--cosmoz-omnitable-header-font-family,
			'Roboto',
			'Noto',
			sans-serif
		);
		--cosmoz-input-font-size: var(
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

	${Nt}

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
`,gt=n=>{const e=n.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':n},or=(n,e,t)=>{const i=n.map(a=>gt(a.title)).join(";")+`
`,l=e.map(a=>n.map(s=>{const u=s.getString(s,a);return u==null?"":gt(String(u))}).join(";")+`
`);l.unshift(i),St(new File(l,t,{type:"text/csv;charset=utf-8"}))},rr=(n,e)=>{const t=n.map(r=>r.title),o=e.map(r=>n.map(i=>{const l=i.toXlsxValue(i,r);return l??""}));return o.unshift(t),o},ir=(n,e,t,o)=>{const r=rr(n,e),i=new cn(t).addSheetFromData(r,o).generate();St(new File([i],t,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},lr=({columns:n,selectedItems:e,csvFilename:t,xlsxFilename:o,xlsxSheetname:r,topPlacement:i})=>m`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!je(e.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${k("{count} selected item",{count:e.length})}
		</slot>
		<slot name="actions" id="actions"></slot>
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
				@click=${()=>or(n,e,t)}
			>
				${k("Save selected items as CSV")}
			</button>
			<button
				@click=${()=>ir(n,e,o,r)}
			>
				${k("Save selected items as XLSX")}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`,ar=({allSelected:n,onAllCheckboxChange:e,sortAndGroup:t,dataIsValid:o,data:r,columns:i,filters:l,groupOnColumn:a,setFilterState:s,settingsConfig:u,hideSelectAll:d})=>m`<sort-and-group-provider .value=${t}>
		<div class="header" id="header" part="header">
			${O(!d,()=>m`<input
						class="checkbox all"
						type="checkbox"
						.checked=${n}
						@input=${e}
						?disabled=${!o}
						part="all"
					/>`)}
			${O(d,()=>m` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${u}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${r}
				.columns=${i}
				.filters=${l}
				.groupOnColumn=${a}
				.setFilterState=${s}
				.settingsConfig=${u}
				.hideSelectAll=${d}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`,sr=$t`
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
`,ur=({settingsConfig:n})=>{const{columns:e,collapsed:t}=n,o=e.filter(r=>!t.some(i=>i.name===r.name));return m`<div class="skeleton">
		${Array.from({length:5},()=>m`<div>
					<div class="checkbox"></div>
					${o.map(r=>m`<div
								class="cell"
								part=${`cell-${r.name}`}
								name=${r.name}
							></div>`)}
				</div>`)}
	</div>`};customElements.define("cosmoz-omnitable-skeleton",T(ur,{styleSheets:[sr]}));const cr=(n,e)=>{const{settingsConfig:t}=n,{processedItems:o,dataIsValid:r,filterIsTooStrict:i,loading:l,displayEmptyGroups:a,compareItemsFn:s,setSelectedItems:u,renderItem:d,renderGroup:c,error:g}=e;return m`${O(!l&&!r&&!g,()=>m`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${Ye({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
						<div class="tableContent-empty-message">
							<h3>${k("Working set empty")}</h3>
							<p>${k("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${O(i,()=>m`<div class="tableContent-empty">
					${Ye({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div>
						<h3>${k("Filter too strict")}</h3>
						<p>${k("No matches for selection")}</p>
					</div>
				</div>`)}
		${O(l&&!o.length,()=>m`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${t}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${O(l&&o.length,()=>m`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${O(g,()=>m`<div class="tableContent-empty overlay">
					${dn({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div class="tableContent-empty-message">
						<h3>${k("Error loading data")}</h3>
						<p>${g.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${o}
				@selected-items-changed=${p=>u(p.detail.value)}
				.displayEmptyGroups=${a}
				.compareItemsFn=${s}
				.renderItem=${d}
				.renderGroup=${c}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`},dr=Q`
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
	${Nt}
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
`,mr=Q`
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
`,ce=n=>{const e=parseInt(n,10);return isFinite(e)?e:void 0},pr=n=>{const{config:e}=n,{settings:t,setSettings:o,collapsed:r}=e,i=Pe({collapsed:r,settings:t.columns,setSettings:w(l=>o(a=>({...a,columns:l})),[o])});return{...e,onDown:w(l=>{l.target.closest(".pull")&&(i.handle=l.currentTarget)},[i]),onDragStart:w(l=>{const{target:a}=l,s=ce(a.dataset.index);if(!i.handle?.contains(a)||s==null)return l.preventDefault();i.handle=null,l.dataTransfer.effectAllowed="move",l.dataTransfer.setData("omnitable/sort-index",s),l.dataTransfer.setData("text/plain",s),setTimeout(()=>a.classList.add("drag"),0),a.addEventListener("dragend",u=>u.target.classList.remove("drag"),{once:!0})},[i]),onDragEnter:w(l=>{const a=l.currentTarget;a===l.target&&(l.preventDefault(),l.dataTransfer.dropEffect="move",a.classList.add("dragover"))},[]),onDragOver:w(l=>{l.preventDefault(),l.currentTarget.classList.add("dragover")},[]),onDragLeave:w(l=>{const a=l.currentTarget;a.contains(l.relatedTarget)||a.classList.remove("dragover")},[]),onDrop:w(l=>{const a=ce(l.dataTransfer.getData("omnitable/sort-index")),s=ce(l.currentTarget.dataset.index),{settings:u,setSettings:d}=i;l.currentTarget.classList.remove("dragover"),l.preventDefault();const c=u.slice();c.splice(s+(a>=s?0:-1),0,c.splice(a,1)[0]),d(c)},[i]),onToggle:w(l=>{const{settings:a,setSettings:s}=i,u=a.map(c=>({...c,disabled:c.disabled||i.collapsed?.some(g=>g.name===c.name)})),d=ce(l.target.closest("[data-index]")?.dataset.index);u.splice(d,1,{...a[d],disabled:!l.target.checked,priority:l.target.checked?a.reduce((c,g)=>Math.max(c,g.priority),0)+1:a[d].priority}),s(u)},[i])}},gr=[pn({apply({availableHeight:n,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,n)}px`})}}),...mn],hr=({onDragStart:n,onDragEnter:e,onDragOver:t,onDragLeave:o,onDrop:r,onDown:i,onToggle:l,collapsed:a,filters:s})=>(u,d)=>{const c=!!a?.find(p=>p.name===u.name),g=!u.disabled&&!c;return m` <div
			class="item"
			data-index=${d}
			@mousedown=${i}
			draggable="true"
			@dragstart=${n}
			@dragenter=${e}
			@dragover=${t}
			@dragleave=${o}
			@drop=${r}
		>
			<button class="pull">${Po}</button>
			<label class="title" ?has-filter=${!je(s[u.name]?.filter)}
				>${u.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${g}
				@click=${l}
				.indeterminate=${c}
			/>
		</div>`},fr=n=>{const{settings:e,settingsId:t,onSave:o,onReset:r,hasChanges:i,opened:l,setOpened:a,...s}=pr(n);return m` <div class="headline">
			${k("Sort and filter")}
			<button
				class="close"
				@click=${u=>{const d=u.currentTarget;d?.focus(),d?.blur()}}
			>
				${jo}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${l.columns}
				@click=${()=>a(u=>({...u,columns:!u.columns}))}
				part="columns columns-heading"
			>
				${k("Columns")} ${Oe}
			</div>
			<cosmoz-collapse
				?opened="${l.columns}"
				part="columns columns-content"
			>
				<div class="list">${e.columns?.map(hr(s))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${l.sort}
				@click=${()=>a(u=>({...u,sort:!u.sort}))}
			>
				${k("Sort on")} ${Oe}
			</div>
			<cosmoz-collapse ?opened=${l.sort}> ${Go()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${l.group}
				@click=${()=>a(u=>({...u,group:!u.group}))}
				part="groups groups-heading"
			>
				${k("Group on")} ${Oe}
			</div>
			<cosmoz-collapse ?opened=${l.group} part="groups groups-heading"
				>${Ho()}</cosmoz-collapse
			>
		</div>

		${O(t,()=>m`<div class="buttons">
					<button
						class="button reset"
						@click=${r}
						?disabled=${!i}
					>
						${k("Reset")}
					</button>
					<button class="button" @click=${o} ?disabled=${!i}>
						${k("Save")}
					</button>
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",T(fr,{styleSheets:[Ne(dr)]}));const br=({config:n,newLayout:e})=>m`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${gr}"
	>
		<div title="${k("Sort and filter")}" slot="button">
			${O(e,()=>m`<div class="headerDots">...</div>`,()=>m` <svg viewBox="0 0 24 24" width="24" fill="currentColor">
						<circle cx="10" cy="18" r="2"></circle>
						<circle cx="10" cy="12" r="2"></circle>
						<circle cx="10" cy="6" r="2"></circle>
					</svg>`)}
			${O(n?.badge,()=>m`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${n}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",T(br,{styleSheets:[Ne(mr)]}));const xe=["sortOn","descending","groupOn","groupOnDescending"],de=n=>e=>typeof e=="object"&&e!==null&&"name"in e&&e.name===n,xr=(n=[],e=[],t=[])=>{const o=e.filter(l=>n.some(de(l.name))),r=n.filter(l=>l.name!=null&&!e.some(de(l.name))&&!t.some(de(l.name))),i=t.filter(l=>!e.some(de(l.name)));return[...o,...i.flatMap(l=>{const a=n.find(s=>s.name===l.name);return a?{...l,title:a.title??l.title??"",minWidth:parseInt(a.minWidth??"0",10)}:[]}),...r.map(l=>{const{name:a,title:s,priority:u,minWidth:d,width:c,flex:g}=l;return{name:a??"",title:s??"",priority:u??0,minWidth:parseInt(d??"0",10),width:parseInt(c??"0",10),flex:parseInt(g??"0",10)}})]},vr=(n,e)=>({...e,...Ee(Array.from(xe))(n),columns:n.columns?.map(Ee(["name","priority","width","flex","disabled"]))}),yr=({columns:n,settings:e,savedSettings:t,initial:o})=>({...Object.fromEntries(xe.flatMap(i=>o?.[i]!=null?[[i,o[i]]]:[])),...t?Ee(Array.from(xe))(t):{},...e,columns:xr(n,e?.columns,t?.columns)}),$r=({prefix:n="omnitable-"}={})=>({write:async(t,o)=>{const r=n+t;try{o?localStorage.setItem(r,JSON.stringify(o)):localStorage.removeItem(r)}catch(i){console.error(i)}},read:async t=>{if(t)try{const o=localStorage.getItem(n+t);return o==null?void 0:JSON.parse(o)}catch(o){console.error(o)}}}),wr=zt($r),zr=()=>{const n=Me(wr);return I(()=>n(),[n])},Cr=(n,e,t,o)=>{const[r,i]=N(),{read:l,write:a}=zr();return E(async()=>{n&&i(await l(n))},[n,l]),{settingsId:n,savedSettings:r,onSave:w(async()=>{if(!n)return;const s=vr(e,r);await a(n,s),t(),i(s)},[e,r]),onReset:w(async s=>{t(),s.shiftKey&&(await a(n),i()),o?.()},[o]),hasChanges:e!=null}},Sr=({settingsId:n,host:e})=>{const t=I(()=>Object.fromEntries(xe.map(b=>[b,e[b]])),[]),o=Be(),r=w(()=>{o.current?.(t)},[t]),[i,l]=N(),[a,s]=N({columns:!0,sort:!0}),{savedSettings:u,...d}=Cr(n,i,l,r),{enabledColumns:c}=e,g=Rn(e,{enabledColumns:c}),p=I(()=>yr({columns:g,settings:i,savedSettings:u,initial:t}),[g,i,u]),v=I(()=>p.columns.map(b=>g.find(x=>x.name===b.name)).filter(Boolean),[g,...p.columns.map(b=>b.name)]);return{...d,opened:a,setOpened:s,settings:p,columns:v,setSettings:l,resetRef:o}},ht=n=>Number.isFinite(n)?n:0,kr=(n,e)=>{const t=[];let[o,r]=n.reduce(([d,c],{width:g,flex:p})=>[d+g,c+p],[0,0]),i=e-o,l=ht(i/r),a=0,s=0,u=0;for(let d=0;d<n.length;d++){const{width:c,minWidth:g,flex:p}=n[d],v=i>=0?l*p:c*i/o;if(g>c+v){a+=c,s+=g,u+=p,t[d]=g;continue}if(p===0){a+=c,s+=c,t[d]=c;continue}}o-=a,i=e-s-o,r-=u,l=ht(i/r);for(let d=0;d<n.length;d++){if(t[d]!=null)continue;const{width:c,flex:g}=n[d],p=i>=0?l*g:c*i/o;t[d]=c+p}return t},ve=Symbol("index"),_r=(n,e)=>{if(typeof n.findLastIndex=="function")return n.findLastIndex(e);for(let t=n.length-1;t>=0;t--)if(e(n[t],t,n))return t;return-1},Ir=(n,e)=>{const t=_r(n,l=>l!=null&&l>0),o=(l,a)=>`.cell[name="${l}"], cosmoz-omnitable-skeleton::part(cell-${l}){width: ${Math.floor(a)}px;padding: 0 min(3px, ${a/2}px)}`,r=l=>`cosmoz-omnitable-resize-nub[name="${l}"]{display:none}`,i=l=>`cosmoz-omnitable-resize-nub[name="${l}"], .cell[name="${l}"]{display:none}`;return e.map((l,a)=>{const s=n[a];if(s==null||s===0)return i(l.name);const u=o(l.name,s);return a===t?`${u}
${r(l.name)}`:u}).join(`
`)},jt=(n,e,t)=>{const o=n.filter(a=>!a.hidden),r=o.reduce((a,{width:s})=>a+s,0);if(o.length>1&&r>e)return jt(o.slice(1),e,t);const i=o.reduce(([a,s],u,d)=>[Math.max(a,u.index),u.index>a?d:s],[-1,-1])[1];return i!==-1&&(o[i].flex=1),kr(o,e).reduce((a,s,u)=>(a[o[u].index]=s,a),new Array(t).fill(void 0))},Fr=(n,e)=>n.length===0?".cell {display: none;}":Ir(n,e),Or=({host:n,canvasWidth:e,layout:t,setSettings:o})=>{const r=Be();r.current=i=>o(l=>{const a=l.columns,{detail:{newWidth:s,column:u}}=i,d=a.findIndex(p=>p.name===u.name),c=[],g=a.reduce((p,v)=>Math.max(p,v.priority),-1/0);for(let p=0;p<t.length;p++)if(c[p]={...a[p]},p<d&&t[p]&&(c[p].width=t[p],c[p].flex=0,c[p].priority=g),p===d){const v=t.reduce((b,x,F)=>F<d&&x?b-x:b,e);c[p].width=Math.min(v,Math.max(s,a[p].minWidth)),c[p].flex=0,c[p].priority=g}return{...l,columns:c}}),E(()=>{const i=l=>r.current?.(l);return n.addEventListener("column-resize",i),()=>n.removeEventListener("column-resize",i)},[])},Dr=20,Vr=44,Ar=24,Pt=Dr+Vr+Ar,Er=(n,e)=>E(()=>{const t=([r])=>{r.contentRect?.width!==0&&requestAnimationFrame(()=>e(r.contentRect?.width-Pt))},o=new ResizeObserver(t);return o.observe(n),()=>o.unobserve(n)},[]),Tr=n=>{const[e,t]=N(()=>n.getBoundingClientRect().width-Pt);return Er(n,t),e},Lr=(n,e)=>{const t=I(()=>{let o=!1,r;const i=()=>{if(!o)return;r=requestAnimationFrame(i),n()&&(o=!1)};return{start:()=>{o=!0,cancelAnimationFrame(r),r=requestAnimationFrame(i)},stop:()=>{o=!1,cancelAnimationFrame(r)}}},[]);E(()=>{t.start()},e),E(()=>()=>t.stop(),[])},Rr=(n=0,e=0)=>Math.abs(n-e)<.1,Mr=(n,e=1.9,t=gn)=>{const o=Pe({target:n}),r=w(()=>{if(!o.tween)return o.tween=o.target,t(o.tween),!0;if(o.target.every((i,l)=>o.tween[l]===i))return t(o.tween),!0;o.tween=o.target.map((i,l)=>Rr(o.tween[l],i)?i:(o.tween[l]??0)+((i??0)-(o.tween[l]??0))/e||0),t(o.tween)},[]);Lr(r,[n])},Nr=({canvasWidth:n,groupOnColumn:e,config:t,miniColumn:o})=>I(()=>{if(!Array.isArray(t)||n==null||n===0)return[];const r=t.map((i,l)=>({minWidth:i.minWidth,width:i.width,flex:i.flex,priority:i.priority,name:i.name,index:l,hidden:i.name===e?.name||i.disabled})).map(i=>o?{...i,hidden:o.name!==i.name}:i).sort(({index:i,priority:l},{index:a,priority:s})=>l===s?a-i:l-s);return jt(r,n,r.length)},[n,e,t]),jr=({host:n,canvasWidth:e,columns:t})=>{const o=n.miniBreakpoint??480,r=I(()=>e<=o,[e,o]),i=I(()=>r?t?.filter(u=>u.mini!=null).sort((u,d)=>(u.mini??0)-(d.mini??0)):[],[t,r]),[l,...a]=i??[],s=!!l;return E(()=>{n.toggleAttribute("mini",s)},[s]),{isMini:s&&r,miniColumn:l,miniColumns:a}},Pr=n=>{const e=I(()=>new CSSStyleSheet,[]);return E(()=>{n.shadowRoot.adoptedStyleSheets=[...n.shadowRoot.adoptedStyleSheets,e]},[]),e},Br=({host:n,columns:e,settings:t,setSettings:o,resizeSpeedFactor:r,sortAndGroupOptions:i})=>{const l=Tr(n),{isMini:a,miniColumn:s,miniColumns:u}=jr({host:n,canvasWidth:l,columns:e}),{groupOnColumn:d}=i,c=Nr({canvasWidth:l,groupOnColumn:d,miniColumn:s,config:t.columns}),g=Pr(n),p=I(()=>t.columns.reduce((b,x,F)=>c[F]!=null||x.name===d?.name||x.disabled?b:[...b,e.find(h=>h.name===x.name)],[]),[e,t,c]),v=Pe({columns:t.columns});return Mr(c,r,b=>{const x=Fr(b,v.columns);g.replace(x)}),Or({host:n,canvasWidth:l,layout:c,setSettings:b=>o(b(t))}),{isMini:a,collapsedColumns:p,miniColumns:u}},Hr=({host:n,...e})=>{const{csvFilename:t="omnitable.csv",xlsxFilename:o="omnitable.xlsx",xlsxSheetname:r="Omnitable",topPlacement:i="top-end"}=n;return{csvFilename:t,xlsxFilename:o,xlsxSheetname:r,topPlacement:i,...e}},Gr=({host:n,selectedItems:e,data:t,sortAndGroupOptions:o,collapsedColumns:r,settings:i,filterFunctions:l,settingS:a,filters:s,...u})=>{const d=t&&t.length>0&&e.length===t.length,c=b=>{b.target.checked?n.shadowRoot.querySelector("#groupedList").selectAll():n.shadowRoot.querySelector("#groupedList").deselectAll()},{groupOnColumn:g}=o,p=I(()=>[g,...r,...i.columns.filter(b=>b.disabled)].some(b=>b&&Object.keys(l).includes(b.name)),[l,i,r]),v=I(()=>({...a,collapsed:r,badge:p,filters:s}),[a,r,p,s]);return E(()=>{const b=n.shadowRoot.querySelector("#tableContent"),x=new ResizeObserver(F=>requestAnimationFrame(()=>{n.style.setProperty("--ot-height",F[0]?.contentRect.height+"px")}));return x.observe(b),()=>x.unobserve(b)},[]),{allSelected:d,onAllCheckboxChange:c,data:t,settingsConfig:v,filters:s,groupOnColumn:g,sortAndGroup:o.sortAndGroup,...u}},Bt=m`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,Wr=n=>n?"groupRow groupRow-folded":"groupRow",qr=({item:n,index:e})=>t=>O(t?.length>0,()=>m`
				<div class="itemRow-minis" part="item-minis">
					${t.map(o=>m`<div
								class="itemRow-mini"
								part="item-mini item-mini-${o.name}"
							>
								${(o.renderMini??o.renderCell)(o,{item:n,index:e})}
							</div>`)}
				</div>
			`),Xr=({columns:n,collapsedColumns:e,miniColumns:t,onItemClick:o,onCheckboxChange:r,dataIsValid:i,groupOnColumn:l,onItemChange:a,rowPartFn:s})=>(u,d,{selected:c,expanded:g,toggleCollapse:p})=>m`
		<div
			?selected=${c}
			part="${["itemRow",`itemRow-${u[ve]}`,s?.(u,d)].filter(Boolean).join(" ")}"
			.dataIndex=${u[ve]}
			.dataItem=${u}
			class="itemRow"
			@click=${o}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${c}
					.dataItem=${u}
					@input=${r}
					?disabled=${!i}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${n}
					.index=${d}
					.selected=${c}
					.expanded=${g}
					.item=${u}
					.groupOnColumn=${l}
					.onItemChange=${a}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${je(e.length)}"
					?aria-expanded="${g}"
					@click="${p}"
				>
					${Bt}
				</button>
			</div>
			${qr({item:u,index:d})(t)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${e}
			.item=${u}
			.index=${d}
			?selected=${c}
			?expanded=${g}
			.groupOnColumn=${l}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,Ur=({onCheckboxChange:n,dataIsValid:e,groupOnColumn:t})=>(o,r,{selected:i,folded:l,toggleFold:a})=>m` <div
			class="${Wr(l)}"
			part="groupRow groupRow-${o[ve]}"
		>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${i}
				.dataItem=${o}
				@input=${n}
				?disabled=${!e}
			/>
			<h3 class="groupRow-label">
				<div><span>${t?.title}</span>: &nbsp;</div>
				<cosmoz-omnitable-group-row
					.column=${t}
					.item=${o.items?.[0]}
					.selected=${i}
					.folded=${l}
					.group=${o}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${o.items.length}</div>
			<button class="expand" ?aria-expanded="${l}" @click=${a}>
				${Bt}
			</button>
		</div>`,Kr=({host:n,error:e,dataIsValid:t,processedItems:o,columns:r,collapsedColumns:i,miniColumns:l,sortAndGroupOptions:a,rowPartFn:s,...u})=>{const{loading:d=!1,displayEmptyGroups:c=!1,compareItemsFn:g}=n,p=Be({shiftKey:!1,ctrlKey:!1}),v=w(h=>{const _=h.target.dataItem,f=h.target.checked;p.current.shiftKey?n.shadowRoot.querySelector("#groupedList").toggleSelectTo(_,f):p.current.ctrlKey?(h.target.checked=!0,n.shadowRoot.querySelector("#groupedList").selectOnly(_)):n.shadowRoot.querySelector("#groupedList").toggleSelect(_,f),h.preventDefault(),h.stopPropagation()},[]);E(()=>{const h=({shiftKey:_,ctrlKey:f})=>{p.current={shiftKey:_,ctrlKey:f}};return window.addEventListener("keydown",h),window.addEventListener("keyup",h),()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",h)}},[]);const b=w(h=>{const _=h.composedPath();_.slice(0,_.indexOf(h.currentTarget)).find($=>$.matches?.("a, .checkbox, .expand"))||n.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:h.currentTarget.dataItem,index:h.currentTarget.dataIndex}}))},[]),{groupOnColumn:x}=a,F=w((h,_)=>f=>Mn(n,h,_,f),[]);return{...u,processedItems:o,dataIsValid:t,filterIsTooStrict:t&&o.length<1,loading:d,compareItemsFn:g,displayEmptyGroups:c,error:e,renderItem:I(()=>Xr({columns:r,collapsedColumns:i,miniColumns:l,onItemClick:b,onCheckboxChange:v,dataIsValid:t,groupOnColumn:x,onItemChange:F,rowPartFn:s}),[r,i,b,v,t,x,F,s]),renderGroup:I(()=>Ur({onCheckboxChange:v,dataIsValid:t,groupOnColumn:x}),[v,t,x])}},Qr=(n,e)=>{if(n===e)return 0;if(n==null)return-1;if(e==null)return 1;const t=typeof n,o=typeof e;return t==="object"&&o==="object"?n.toString()<e.toString()?-1:1:t==="number"&&o==="number"?n-e:t==="string"&&o==="string"?n<e?-1:1:t==="boolean"&&o==="boolean"?n?-1:1:(console.warn("unsupported sort",t,n,o,e),0)},De=(n,e)=>(t,o)=>Qr(n(t),n(o))*(e?-1:1),Jr=n=>n.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),ft=(n,e)=>{!n||!e||Object.entries(e).forEach(([t,o])=>{n[j].__ownChange=!0,n[j][t]=o,n[j].__ownChange=!1,n[j].dispatchEvent(new CustomEvent(`${Jr(t)}-changed`,{bubbles:!0,detail:{value:o}}))})},Ve=(n,e)=>Object.assign(n,{[ve]:e}),me=Symbol("unparsed"),Yr=({data:n,columns:e,hashParam:t,sortAndGroupOptions:o,noLocalSort:r,noLocalFilter:i})=>{const{groupOnColumn:l,groupOnDescending:a,sortOnColumn:s,descending:u}=o,d=w(([f,$])=>{const y=e.find(({name:C})=>C===f);return y==null?[f,void 0]:[f,$.filter&&y.serializeFilter(y,$.filter)]},[e]),c=w(([f,$])=>{const y=e.find(({name:S})=>S===f);if(y==null)return[f,{[me]:$}];const C={filter:y.deserializeFilter(y,$)};return ft(y,C),[f,C]},[e]),[g,p]=Y({},t,{multi:!0,suffix:"-filter--",write:d,read:c}),v=w((f,$)=>p(y=>{const C=$e($,y[f]);return ft(e.find(S=>S.name===f),C),{...y,[f]:{...y[f],...C}}}),[e,p]),b=I(()=>Object.values(g).map(f=>f.filter),[g]),x=I(()=>Object.fromEntries(e.map(f=>[f.name,!f.noLocalFilter&&f.getFilterFn(f,g[f.name]?.filter)]).filter(([,f])=>!!f)),[e,...b]),F=I(()=>!Array.isArray(n)||n.length===0?[]:Object.entries(x).length===0||i?n.slice():n.filter(f=>Object.values(x).every($=>$(f))),[n,x,i]),h=I(()=>{if(!r&&!l&&s!=null&&s.sortOn!=null)return F.slice().sort(De(f=>s.getComparableValue({...s,valuePath:s.sortOn},f),u));if(l!=null&&l.groupOn!=null){const f=F.reduce(($,y)=>{const C=l.getComparableValue({...l,valuePath:l.groupOn},y);if(C===void 0)return $;let S=$.find(M=>M.id===C);return S?(S.items.push(y),$):(S={id:C,name:C,items:[y]},[...$,S])},[]);return f.sort(De($=>l.getComparableValue({...l,valuePath:l.groupOn},$.items[0]),a)),!s||r?f:f.filter($=>Array.isArray($.items)).map($=>($.items.sort(De(y=>s.getComparableValue({...s,valuePath:s.sortOn},y),u)),$))}return F},[F,l,a,s,u,r]),_=I(()=>{let f=0,$=0;const y=[];return h.forEach(C=>{if(Array.isArray(C.items)){Ve(C,$++),C.items.forEach(S=>{Ve(S,f++),y.push(S)});return}return Ve(C,f++),y.push(C)},[]),y},[h]);return E(()=>{p(f=>Object.values(f).some(y=>y[me]!=null)?Object.fromEntries(Object.entries(f).map(([y,C])=>C[me]==null?[y,C]:c([y,C[me]]))):f)},[c]),{processedItems:h,visibleData:_,filters:g,filterFunctions:x,setFilterState:v}},Zr=n=>{const e=o=>{const r=n.data.indexOf(o);if(r<0)return null;const i=n.data.splice(r,1);if(n.data=n.data.slice(),Array.isArray(i)&&i.length>0)return i[0]},t=(o,r)=>{n.data.splice(o,1,r),n.data=n.data.slice()};return{removeItem:e,removeItems(o){const r=[];for(let i=o.length-1;i>=0;i-=1){const l=n.removeItem(o[i]);l!=null&&r.push(l)}return r},replaceItemAtIndex:t,replaceItem(o,r){const i=n.data.indexOf(o);if(i>-1)return t(i,r)},selectItem(o){n.shadowRoot.querySelector("#groupedList").select(o)},selectAll(){n.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){n.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(o){n.shadowRoot.querySelector("#groupedList").deselect(o)},isItemSelected(o){return n.shadowRoot.querySelector("#groupedList").isItemSelected(o)}}},ei=({host:n,visibleData:e,filters:t,...o})=>{const{setFilterState:r}=o,i=I(()=>Zr(n),[]);Te(o,Object.values(o)),Te(i,Object.values(i)),E(()=>{const a=s=>r(s.detail.name,u=>({...u,...s.detail.state}));return n.addEventListener("legacy-filter-changed",a),()=>n.removeEventListener("legacy-filter-changed",a)},[]),B("visibleData",e),B("sortedFilteredGroupedItems",o.sortedFilteredGroupedItems),B("selectedItems",o.selectedItems),B("sortOn",o.sortOn),B("descending",o.descending),B("isMini",o.isMini);const l=I(()=>Object.fromEntries(Object.entries(t).filter(([,{filter:a}])=>a!==void 0).map(([a,{filter:s}])=>[a,s])),[t]);B("filters",l,Object.values(l))},ti=n=>{const{hashParam:e,settingsId:t,data:o,resizeSpeedFactor:r,noLocal:i,noLocalSort:l=i,noLocalFilter:a=i,error:s,rowPartFn:u}=n,d=Sr({settingsId:t,host:n}),{settings:c,setSettings:g,columns:p,resetRef:v}=d,b=Uo(p,e,c,g,v),{processedItems:x,visibleData:F,filters:h,setFilterState:_,filterFunctions:f}=Yr({data:o,columns:p,hashParam:e,sortAndGroupOptions:b,noLocalSort:l,noLocalFilter:a}),{isMini:$,collapsedColumns:y,miniColumns:C}=Br({host:n,columns:p,settings:c,setSettings:g,resizeSpeedFactor:r,sortAndGroupOptions:b}),S=o&&Array.isArray(o)&&o.length>0,[M,G]=N([]);return ei({host:n,visibleData:F,sortedFilteredGroupedItems:x,columns:p,filters:h,setFilterState:_,selectedItems:M,isMini:$,...b}),{header:Gr({host:n,selectedItems:M,sortAndGroupOptions:b,dataIsValid:S,data:o,columns:p,filters:h,collapsedColumns:y,settings:c,filterFunctions:f,settingS:d,setFilterState:_,hideSelectAll:n.hideSelectAll===!0}),list:Kr({host:n,error:s,dataIsValid:S,processedItems:x,setSelectedItems:G,columns:p,collapsedColumns:y,miniColumns:C,sortAndGroupOptions:b,rowPartFn:u}),footer:Hr({host:n,selectedItems:M,columns:p})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||Ae(this._renderFn(this._item,this._index),this)}});const ni={group:Symbol("group")},_e=(n,e)=>(e.has(n)||e.set(n,{}),e.get(n)),oi=(n,e)=>!!_e(n,e).expanded,ri=(n,e)=>!!_e(n,e).folded,Le=n=>n?n.items instanceof Array:!1,ii=n=>{if(!Array.isArray(n)||n.length===0)return;const e=Array.isArray(n[0]?.items);if(!n.every(o=>Array.isArray(o.items)===e))throw new Error("Data must be homogeneous.")},li=(n,e,t)=>Array.isArray(n)?(ii(n),n.reduce((r,i)=>{const l=i;return l.items?l.items.length?_e(i,t).folded?r.concat(i):r.concat(i,l.items.map(a=>Object.assign(a,{[ni.group]:i}))):e?r.concat(i):r:r.concat(i)},[])):void 0,ai=(n,...e)=>typeof n=="function"?n(...e):n,si=(n,e)=>n===e,ui=()=>{const[n,e]=N(()=>[new WeakMap]);return{setItemState:w((o,r)=>e(([i])=>{const l=_e(o,i);return Object.assign(l,ai(r,l)),[i]}),[]),state:n[0],signal:n}},ci=()=>{const{setItemState:n,state:e,signal:t}=ui(),o=w((i,l)=>{Le(i)&&n(i,a=>({folded:l!==void 0?l:!a.folded}))},[]),r=w((i,l)=>{Le(i)||n(i,a=>({expanded:l!==void 0?!l:!a.expanded}))},[]);return{state:e,signal:t,toggleFold:o,toggleCollapse:r}},di=({initial:n,compareItemsFn:e,data:t,flatData:o})=>{const[r,i]=N(n),[l,a]=N(),s=w(h=>r.includes(h),[r]),u=w(h=>h?.items?.every(s)??!1,[s]),d=w(h=>s(h)||u(h),[s,u]),c=w(h=>{const f=h.items??[h];i($=>[...$,...f.filter(y=>!$.includes(y))]),a(h)},[]),g=w(h=>{const f=h.items??[h];i($=>$.filter(y=>!f.includes(y))),a(h)},[]),p=w(h=>{i(h.items?.slice()||[h]),a(h)},[]),v=w(()=>{i(t.flatMap(h=>h.items||h)),a(void 0)},[t]),b=w(()=>{i([]),a(void 0)},[]),x=w((h,_=!d(h))=>_?c(h):g(h),[d]),F=w((h,_)=>{if(!o)return;const f=l?o.findIndex(C=>e(C,l)):-1;if(f<0)return x(h,_);const[$,y]=[f,o.indexOf(h)].sort((C,S)=>C-S);o.slice($,y+1).forEach((C,S,M)=>{S>0&&S<M.length-1&&Le(C)||x(C,_)}),a(h)},[o,e,x]);return E(()=>i(h=>h.length>0&&o?o.filter(_=>h.find(f=>e(_,f))):h),[o]),{selectedItems:r,isItemSelected:s,isGroupSelected:u,isSelected:d,select:c,deselect:g,selectOnly:p,selectAll:v,deselectAll:b,toggleSelect:x,toggleSelectTo:F}},mi={host:{position:"relative",display:"flex",flexDirection:"column"}},pi=n=>{const{data:e,renderItem:t,renderGroup:o,displayEmptyGroups:r,compareItemsFn:i=si}=n,{toggleFold:l,toggleCollapse:a,state:s,signal:u}=ci(),d=I(()=>li(e,r,s),[e,r,u]),{selectedItems:c,isItemSelected:g,isGroupSelected:p,isSelected:v,select:b,deselect:x,selectOnly:F,selectAll:h,deselectAll:_,toggleSelect:f,toggleSelectTo:$}=di({initial:[],compareItemsFn:i,data:e,flatData:d}),y=w((S,M)=>Array.isArray(S.items)?o(S,M,{selected:p(S),folded:ri(S,s),toggleSelect:G=>f(S,typeof G=="boolean"?G:void 0),toggleFold:()=>l(S)}):t(S,M,{selected:c.includes(S),expanded:oi(S,s),toggleSelect:G=>f(S,typeof G=="boolean"?G:void 0),toggleCollapse:()=>a(S)}),[t,o,c,f,u]);vt(()=>{Object.assign(n.style,mi.host)},[]),B("selectedItems",c);const C={toggleFold:l,toggleCollapse:a,isItemSelected:g,isGroupSelected:p,isSelected:v,select:b,deselect:x,selectOnly:F,selectAll:h,deselectAll:_,toggleSelect:f,toggleSelectTo:$};return Te(C,Object.values(C)),{renderRow:y,flatData:d}},gi=({renderRow:n,flatData:e})=>hn({items:e,renderItem:(t,o)=>m`<cosmoz-grouped-list-row
				.item=${t}
				.index=${o}
				.renderFn=${n}
			></cosmoz-grouped-list-row>`}),hi=n=>gi(pi(n));customElements.define("cosmoz-grouped-list",T(hi,{useShadowDOM:!1}));const fi=n=>window.ShadyCSS?.ApplyShim?.transformCssText?.(n)||n,bi=n=>{const{header:e,list:t,footer:o}=ti(n);return m`
		<style>
			${fn([],()=>fi(nr))}
		</style>

		<div class="mainContainer">
			${ar(e)}
			<div class="tableContent" id="tableContent">
				${cr(e,t)}
			</div>
			${lr(o)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`};customElements.define("cosmoz-omnitable",class extends T(bi,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","loading","mini-breakpoint"]}){connectedCallback(){super.connectedCallback(),Ie(this,"selectedItems",[]),Ie(this,"visibleData",[]),Ie(this,"sortedFilteredGroupedItems",[])}});const ye=`
	<slot name="actions" slot="actions"></slot>
`;m(Object.assign([ye],{raw:[ye]}));Re(Object.assign([ye],{raw:[ye]}));const bt=(n,e,t)=>{let o=String(n),r=-1;const i=t,l=e-o.length;for(;++r<l;)o=i+o;return o},D=(n,e)=>Math.floor(Math.random()*(e-n+1))+n,xi=()=>"2015-"+bt(D(1,12),2,"0")+"-"+bt(D(1,28),2,"0"),vi=()=>{const n=D(0,20);return n===1?new Date(2015,3,2,14,26,10,299):n===2?new Date(2016,4,2,10,9,10,444):n===3?new Date(2016,4,2,10,9,10,443):n===4?new Date(2016,4,2,10,9,10,442):new Date(D(2014,2017),D(1,12),D(1,28),D(0,23),D(0,59),D(0,59),D(0,999))},Ht=(n,e,t)=>{const o=D(n,e),r=[],i=["Lorem ipsum dolor sit amet","Nunc tristique","Curabitur vestibulum","Cras laoreet","Himenaeos","maximus diam purus at mauris"],l=["SEK","USD","EUR","AUD"];let a=0;for(let s=0;s<o;s+=1){const u="Group "+s,d=s*2+1;for(let c=0;c<d;c+=1){const g=[],p=[],v=[],b=a%10;for(let x=0;x<b;x+=1)g.push("Item "+x),p.push({name:"Item "+x,value:"item-value-"+x}),v.push({value:"cat-"+x,label:"Category "+x});r.push({id:a,name:u+" item "+c,value:D(0,1e4),bool:D(0,100)>50,object:{value:D(0,1e4),label:"Random string "+D(1,t)},sub:{subProp:i[a%i.length]},randomString:"Random string "+D(1,t),randomString2:"Random string 2 "+D(1,t),randomString3:"Random string 3 "+D(1,t),randomString4:"Random string 4 "+D(1,t),date:vi(),dateJSON:xi(),amount:{amount:D(10,100),currency:l[a%l.length]},group:u,list:g,objectList:p,categories:a%7===0?null:v}),a+=1}}return r},Si={title:"Components/ComsmozOmnitableFullDemo",component:"cosmoz-omnitable",tags:["autodocs"],args:{loading:!1,locale:"en",sortOn:"",groupOn:"",descending:!1,groupOnDescending:!1,hashParam:"",settingsId:"",selectedItems:[],disabled:!1},argTypes:{loading:{control:"boolean",description:"Show loading state",table:{defaultValue:{summary:"false"}}},locale:{control:"select",options:["en","fr","sv"],description:"Language locale",table:{defaultValue:{summary:"en"}}},selectedItems:{control:"object",description:"Show selected items"},data:{control:"object",description:"Show specified items"},sortOn:{control:"text",description:'Column property name to sort on (e.g., "amount", "date", "id")'},groupOn:{control:"text",description:'Column property name to group on (e.g., "amount", "date", "id")'},descending:{control:"boolean",description:"Sort on descending"},groupOnDescending:{control:"boolean",description:"Group on descending"},hashParam:{control:"text",description:"Hash parameter for URL state management"},settingsId:{control:"text",description:"ID for storing table settings"},disabled:{control:"boolean",description:"Hide one column",table:{defaultValue:{summary:"false"}}}},render:n=>m`
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
                    ${bn({styles:"vertical-align: middle; fill: currentColor;"})}
                    <span>Remove items</span>
                </paper-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log("Current hash:",window.location.hash)}},pe={args:{data:Ht(10,10,10)}},ge={args:{data:Ht(2,2,10)}},he={args:{data:[]}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...pe.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...ge.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...he.parameters?.docs?.source}}};const ki=["TableWithLargeData","TableWithSmallData","TableWithNoData"];export{pe as TableWithLargeData,he as TableWithNoData,ge as TableWithSmallData,ki as __namedExportsOrder,Si as default};
