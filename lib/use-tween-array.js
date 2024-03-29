import { useCallback, useEffect, useRef, useState } from '@pionjs/pion';

export const isCloseEnough = (a = 0, b = 0) => Math.abs(a - b) < 0.1,
	// eslint-disable-next-line max-lines-per-function
	useTweenArray = (target, speedFactor = 1.9) => {
		const state = useRef({
				request: undefined,
				target,
				running: false,
			}),
			[tween, setTween] = useState(target),
			animate = useCallback(() => {
				if (!state.current.running) {
					return;
				}

				state.current.request = requestAnimationFrame(animate);

				setTween((tween) => {
					const target = state.current.target;

					if (target.every((t, idx) => tween[idx] === t)) {
						state.current.running = false;
						return tween;
					}

					return target.map((t, idx) =>
						isCloseEnough(tween[idx], t)
							? t
							: (tween[idx] ?? 0) +
									((t ?? 0) - (tween[idx] ?? 0)) / speedFactor || 0,
					);
				});
			}, []);

		useEffect(() => {
			state.current.request = requestAnimationFrame(animate);
			return () => cancelAnimationFrame(state.current.request);
		}, []);

		useEffect(() => {
			if (state.current.target.length === 0 && target.length > 0) {
				setTween(target);
			}

			state.current.target = target;

			if (state.current.running) return;

			state.current.running = true;
			state.current.request = requestAnimationFrame(animate);
		}, [target]);

		return tween;
	};
