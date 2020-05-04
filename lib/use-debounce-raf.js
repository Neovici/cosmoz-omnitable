import { useState, useEffect } from "haunted";

/**
 * Debounces a value by updating it via a double requestAnimationFrame call.
 *
 * Double RAF is useful for ensuring that animations start before expensive rendering is done.
 * It helps provide smoother user experience by making animations feel reactive.
 * Normal rendering would block the animation from starting.
 *
 * In the context of haunted, the double RAF call makes sure the value is updated *after* all
 * hooks have been processed and the rendering has been done. Effectively all rapid, intermediary
 * state changes will be skipped.
 *
 * @param {any} value the value to debounce
 */
export function useDebounceRaf(value) {
	// State and setters for debounced value
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(
		() => {
			let double;
			// Update debounced value after double RAF
			const handler = requestAnimationFrame(() => {
				double = requestAnimationFrame(() => setDebouncedValue(value));
			});

			// Cancel the animation frames if value changes (also on unmount)
			// This is how we prevent debounced value from updating if value is changed.
			// RAF gets cleared and restarted.
			return () => {
				cancelAnimationFrame(handler)
				cancelAnimationFrame(double);
			};
		},
		[value] // Only re-call effect if value changes
	);

	return debouncedValue;
}
