const notifyResize = (target, index) =>
	target.dispatchEvent(
		new CustomEvent('update-item-size', {
			bubbles: true,
			detail: { index },
		})
	);

export { notifyResize };
