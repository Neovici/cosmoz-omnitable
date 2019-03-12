(function () {
	'use strict';

	const setupOmnitableFixture = (omnitableFixtureName, data, done) => {
		const omnitable = fixture(omnitableFixtureName);
		omnitable.data = data;
		omnitable._columnObserver.flush();
		flush(() => {
			omnitable.flush();
			done(omnitable);
		});
		return omnitable;
	};

	Object.assign(window, { setupOmnitableFixture });
}());
