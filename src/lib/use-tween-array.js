import { useCallback, useEffect, useMemo } from '@pionjs/pion';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { noop } from '@neovici/cosmoz-utils/function';

const useAnimationLoop = (animate, trigger) => {
	const animationLoop = useMemo(() => {
		let running = false,
			af;

		const animationLoop = () => {
			if (!running) return;
			af = requestAnimationFrame(animationLoop);
			const stop = animate();
			if (stop) running = false;
		};

		return {
			start: () => {
				running = true;
				cancelAnimationFrame(af);
				af = requestAnimationFrame(animationLoop);
			},
			stop: () => {
				running = false;
				cancelAnimationFrame(af);
			},
		};
	}, []);

	useEffect(() => {
		animationLoop.start();
	}, trigger);

	useEffect(() => () => animationLoop.stop(), []);
};

export const isCloseEnough = (a = 0, b = 0) => Math.abs(a - b) < 0.1,
	// eslint-disable-next-line max-lines-per-function
	useTweenArray = (target, speedFactor = 1.9, callback = noop) => {
		const state = useMeta({ target }),
			// [tween, setTween] = useState(target),
			animate = useCallback(() => {
				if (!state.tween) state.tween = state.target;

				if (state.target.every((t, idx) => state.tween[idx] === t)) {
					callback(state.tween);
					return true;
				}

				state.tween = state.target.map((t, idx) =>
					isCloseEnough(state.tween[idx], t)
						? t
						: (state.tween[idx] ?? 0) +
								((t ?? 0) - (state.tween[idx] ?? 0)) / speedFactor || 0,
				);

				callback(state.tween);
			}, []);

		useAnimationLoop(animate, [target]);
	};
