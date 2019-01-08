(function () {
	'use strict';

	const setupOmnitableFixture = (omnitableFixtureName, data, done) => {
		const omnitable = fixture(omnitableFixtureName);
		omnitable.data = data;
		flush(() => {
			omnitable.flushDebouncer('adjustColumns');
			omnitable.flushDebouncer('updateColumns');
			omnitable.flushDebouncer('filterItems');
			omnitable.flushDebouncer('groupItems');
			omnitable.flushDebouncer('sortItems');
			done(omnitable);
		});
		return omnitable;
	};

	// Detect dom type: dom=shadow vs wc-shadydom=true
	const getDomType = () => {
		// match GET parameter named 'dom'
		let param = window.location.search.match(/(\?|&)dom\=([^&]*)/), // eslint-disable-line no-useless-escape
			dom;
		if (Array.isArray(param) && param.length > 0) {
			dom = decodeURIComponent(param[2]);
		}
		const domType = dom && dom === 'shadow' ? ' | Using shadow DOM' : ' | Using shady DOM';
		return domType;
	};

	const onColumnReady = (omnitable, columnIndex, done) => {
		const checkReady = () => {
			const {visibleColumns: visible, columns} = omnitable;
			if (visible && visible.length > 0) {
				omnitable.removeEventListener('visible-columns-changed', checkReady);
				Polymer.Base.async(() => done(columns[columnIndex]), 30);
			}
		};
		omnitable.addEventListener('visible-columns-changed', checkReady);
		omnitable.notifyResize();
		checkReady();
	};

	Object.assign(window, {setupOmnitableFixture, getDomType, onColumnReady});
}());

