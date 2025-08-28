export const useFloating = (host) => {
	const showDropdown = (element, trigger) => {
		const rect = trigger.getBoundingClientRect();
		element.style.position = 'fixed';
		element.style.top = `${rect.bottom + 2}px`;
		element.style.left = `${rect.left}px`;
		element.style.minWidth = `${rect.width}px`;
		element.style.zIndex = '1000';
		element.style.display = 'block';
	};

	const hideDropdown = (element) => (element.style.display = 'none');

	const setFloating = (element) => {
		if (!element) return;
		const trigger = host.shadowRoot.querySelector('.control');
		if (!closed && trigger) {
			showDropdown(element, trigger);
		} else {
			hideDropdown(element);
		}
	};

	return {
		setFloating,
	};
};
