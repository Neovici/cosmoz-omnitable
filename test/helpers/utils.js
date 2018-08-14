(function () {
	'use strict';

	const setupOmnitableFixture = (omnitableFixtureName, data, callback) => {
		const omnitable = fixture(omnitableFixtureName);
		omnitable.data = data;
		if (omnitable.visibleColumns != null && omnitable.visibleColumns.length) {
			callback(omnitable);
		} else {
			// In Polymer 1.x, the visible-columns-changed event will be fire multiple times,
			// causing done to be called multiple times, which mocha does not allow.
			// So using a flag to prevent multiple calls to done.
			const onVisible = () => {
				const columns = omnitable.visibleColumns;
				if (Array.isArray(columns) && columns.length > 0) {
					omnitable.removeEventListener('visible-columns-changed', onVisible);
					Polymer.Base.async(() => callback(omnitable), 60);
				}
			};

			omnitable.addEventListener('visible-columns-changed', onVisible);
		}

		omnitable.notifyResize();
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

