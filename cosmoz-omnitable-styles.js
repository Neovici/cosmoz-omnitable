const checkbox = `
.checkbox {
		box-sizing: border-box;
		width: 18px;
		height: 18px;
		background: transparent;
		border-radius: 4px;
		appearance: none;
		outline: none;
		position: relative;
		user-select: none;
		cursor: pointer;
		display: inline-block;
		box-shadow: 0 0 0 2px rgba(0,0,0, 0.16) inset;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		vertical-align: middle;
		transition: background-color 140ms;
		margin: 1px 12px;
		flex: none;
	}

	.checkbox:checked {
	    background-color: var(--paper-checkbox-checked-color, var(--primary-color));
	    box-shadow: none;
	}

	.checkbox:checked::before {
		content: "";
		position: absolute;
		box-sizing: content-box;
		width: 5px;
		height: 10px;
		border: 2.4px solid #fff;
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
		box-shadow: 0 0 0 2px rgba(0, 0, 0, 1) inset, 0 0 2px 6px #2021240f;
	}

	.checkbox:checked:hover {
		box-shadow: 0 0 2px 6px #2021240f;
	}
`;

export { checkbox };
export default `<style>
	:host {
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
	}

	:host a {
		color: var(--primary-link-color, inherit);
	}

	/* The wrapping div that contains the header, the table content and the footer */
	.mainContainer {
		background-color: #fff;
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
	}

	[hidden] {
		display: none;
	}

	cosmoz-omnitable-header-row .external-values-false {
		--paper-input-container-color: var(--cosmoz-omnitable-local-filter-header-color);
	}

	cosmoz-omnitable-header-row .external-values-true {
		--paper-input-container-color: var(--cosmoz-omnitable-remote-filter-header-color);
	}

	.header > cosmoz-omnitable-header-row {
		flex: auto;
	}
	.header-cell {
		 --paper-input-container: {
			padding-top: 0;
		 }
	}

	.header-cell > * {
		width: 100%;
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
		top: 19px;
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

	.tableContent {
		overflow-y: auto;
		min-height: 90px;
		display: flex;
		flex-direction: column;
		position: relative;
		flex: auto;
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
		background-color: rgba(255, 255, 255, 0.8);
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

	.tableContent-empty.overlay paper-spinner-lite {
		height: 48px;
		min-height: 48px;
		width: 48px;
		min-width: 48px;
		margin-right: 24px;
		--paper-spinner-color: #333;
		--paper-spinner-stroke-width: 6px;
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
		will-change: transform;
	}

	#groupedList {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.footer {
		display: flex;
		align-items: center;
		border-top: solid 1px #e8e8e8;
		background-color: #f5f5f5;
		min-height: 25px;
		height: 63px;
		margin-bottom: 1px; /* Chrome overflow rendering bug? When only component in a view */
	}

	.footer-controls {
		display: flex;
		align-items: center;
		flex: auto;
	}

	.footer-control {
		margin-left: 3%;
		display: flex;
		align-items: center;
	}

	.footer-tableStats {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		margin-right: 3%;
	}

	.footer-tableStats :first-child {
		margin-bottom: 5px;
	}

	.footer-control-label {
		margin-right: 10px;
	}

	.item-row-wrapper {
		display: block;
		width: 100%;
	}

	.itemRow {
		border-bottom-color: #e2e2e2;
		border-bottom-width: 1px;
		border-bottom-style: var(--cosmoz-omnitable-item-row-border-bottom-style, solid);
		/* set a min-height for rows so that rows with empty values are visible */
		min-height: var(--item-row-min-height, 24px);
		padding-right: 8px;
		display: flex;
		align-items: center;
	}

	.itemRow[selected] {
		background-color: rgb(195, 212, 248) !important;
		@apply --cosmoz-omnitable-selected-row;
	}

	.itemRow[highlighted] {
		background-color: rgba(195, 212, 248, 0.5);
		@apply --cosmoz-omnitable-hightlighted-row;
	}

	.tableContent .itemRow-cell paper-dropdown-menu {
		margin-top:-20px;
	}

	cosmoz-omnitable-item-expand[expanded] {
		display: flex;
		flex-direction: column;
		padding: 5px 4%;
		line-height: 1.3em;
		border-bottom: solid 1px #e2e2e2;
		background-color: #fafafa;
	}

	cosmoz-omnitable-item-expand[hidden],
	cosmoz-omnitable-item-expand:not([expanded]) {
		display: none !important;
	}

	.groupRow {
		display: flex;
		align-items: center;
		background-color: #efefef;
		font-weight: 400;
		color: #48515b;
		border-bottom: solid 1px #d6d6d6;
	}

	.groupRow.groupRow-folded {
		/* Add here style rules for folded group rows */
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
		color: white;
		overflow: hidden;
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

	#dropdownExtra paper-button, #dropdownExtra ::slotted(paper-button) {
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		@apply --cosmoz-bottom-bar-menu-item;
	}

	#dropdownExtra paper-button:hover, #dropdownExtra ::slotted(paper-button:hover) {
		background: #eee;
	}

	#dropdownExtra {
		padding: 0;
	}

	#listboxSizer {
		max-height: 0;
		padding: 0 !important;
	}

	#dropdownExtraButton {
		color: var(--cosmoz-bottom-bar-menubutton-color, var(--light-primary-color));
		background-color: var(--cosmoz-bottom-bar-menubutton-background-color, var(--dark-primary-color));
	}

	.boolean-cell[editable] {
		overflow: initial;
	}

	.itemRow:hover {
		box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
	}
	.groupRow:hover .checkbox:not(:checked):not(:hover),
	.itemRow:hover .checkbox:not(:checked):not(:hover) {
		box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.54) inset;
	}
	.groupRow:hover .fold:not(:hover),
	.itemRow:hover .expand:not(:hover) {
		color: rgba(0, 0, 0, 0.54);
	}

	${ checkbox }

	.all {
		margin-bottom: 14px;
	}

	.expand {
		width: 24px;
		height: 24px;
		padding: 0;
		flex: none;
	}

	.expand, .fold {
		color: rgba(0, 0, 0, 0.16);
	}

	.expand:hover, .fold:hover {
		color: #000;
	}
</style>`;
