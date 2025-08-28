import { useEffect, useState } from '@pionjs/pion';

const isFocused = (t) => t.matches(':focus-within');

export const useFocus = (host) => {
	const [focused, setFocused] = useState();
	const [closed, setClosed] = useState();
	const onToggle = (e) => {
		const target = e.currentTarget;
		const currentlyFocused = isFocused(target);

		if (currentlyFocused) {
			setFocused(true);
			setClosed(false);
		} else {
			target.focus();
			setFocused(true);
			setClosed(false);
		}

		host.dispatchEvent(
			new CustomEvent('opened-changed', {
				detail: { value: !closed },
				bubbles: true,
			}),
		);
	};

	useEffect(() => {
		if (!focused) {
			return;
		}

		const handler = (e) => {
			if (e.defaultPrevented) {
				return;
			}

			if (e.key === 'Escape' && !closed) {
				e.preventDefault();
				setClosed(true);
			} else if (['ArrowUp', 'Up'].includes(e.key) && closed) {
				e.preventDefault();
				setClosed(false);
			}
		};

		document.addEventListener('keydown', handler, true);
		return () => document.removeEventListener('keydown', handler, true);
	}, [focused]);

	return {
		focused,
		closed,
		active: focused && !closed,
		onToggle,
		onFocus: (e) => {
			const focused = isFocused(e.currentTarget);
			setFocused(focused);
			// If the host lost focus, close the dropdown
			if (!focused) {
				setClosed(true);
				host.dispatchEvent(
					new CustomEvent('opened-changed', {
						detail: { value: false },
						bubbles: true,
					}),
				);
			}
		},
		setClosed,
	};
};

const fevs = ['focusin', 'focusout'];
export const useHostFocus = (host) => {
	const thru = useFocus(host);
	const { onFocus } = thru;

	useEffect(() => {
		host.setAttribute('tabindex', '0');

		fevs.forEach((ev) => host.addEventListener(ev, onFocus));
		return () => {
			fevs.forEach((ev) => host.removeEventListener(ev, onFocus));
		};
	}, []);

	return thru;
};
