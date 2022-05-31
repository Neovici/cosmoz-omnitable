const notifyResize = (target, index) =>
	target.dispatchEvent(
		new CustomEvent('update-item-size', {
			bubbles: true,
			detail: { index },
		})
	),
	indexSymbol = Symbol('index');

export { notifyResize, indexSymbol };
