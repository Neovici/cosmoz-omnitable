import { useCallback, useEffect, useRef, useState } from 'haunted';

export const isCloseEnough = (a = 0, b = 0) => Math.abs(a - b) < 0.1,
	// eslint-disable-next-line max-lines-per-function
	useTweenArray = (target, speedFactor = 1.9, onStart, onStable) => {
		const state = useRef({
				request: undefined,
				target,
				running: false,
				onStart: false,
				onStable: false,
			}),
			[tween, setTween] = useState(target),
			animate = useCallback(() => {
				state.current.request = requestAnimationFrame(animate);

				if (!state.current.running) {
					if (onStable && state.current.onStable) {
						state.current.onStable = false;
						requestAnimationFrame(onStable);
					}
					return;
				}

				setTween((tween) => {
					const target = state.current.target;

					if (target.every((t, idx) => tween[idx] === t)) {
						state.current.running = false;
						return tween;
					}

					if (onStart && state.current.onStart) {
						state.current.onStart = false;
						requestAnimationFrame(onStart);
					}

					return target.map((t, idx) =>
						isCloseEnough(tween[idx], t)
							? t
							: (tween[idx] ?? 0) +
									((t ?? 0) - (tween[idx] ?? 0)) / speedFactor || 0
					);
				});
			}, [onStart, onStable]);

		useEffect(() => {
			state.current.request = requestAnimationFrame(animate);
			return () => cancelAnimationFrame(state.current.request);
		}, []);

		useEffect(() => {
			if (state.current.target.length === 0 && target.length > 0) {
				setTween(target);
			}
			state.current.target = target;
			state.current.running = true;
			state.current.onStart = true;
			state.current.onStable = true;
		}, [target]);

		return tween;
	};
