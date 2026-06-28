import { noop } from '@neovici/cosmoz-utils/function';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback, useEffect, useMemo } from '@pionjs/pion';

interface AnimationLoop {
	start: () => void;
	stop: () => void;
}

interface TweenState {
	target: (number | undefined)[];
	tween?: (number | undefined)[];
	speedFactor: number;
	onConverge?: () => void;
}

const useAnimationLoop = (
	animate: () => boolean | undefined,
	trigger: unknown[],
) => {
	const animationLoop = useMemo((): AnimationLoop => {
		let running = false;
		let af: number;

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

export const isCloseEnough = (a = 0, b = 0) => Math.abs(a - b) < 0.1;

export const useTweenArray = (
	target: (number | undefined)[],
	speedFactor = 1.9,
	callback: (tween: (number | undefined)[]) => void = noop,
	onConverge?: () => void,
): void => {
	const state = useMeta<TweenState>({ target, speedFactor, onConverge });

	const animate = useCallback(() => {
		// On initial load, skip animation and apply target values immediately
		if (!state.tween) {
			state.tween = state.target;
			callback(state.tween);
			state.onConverge?.();
			return true;
		}

		if (state.target.every((t, idx) => state.tween![idx] === t)) {
			callback(state.tween);
			state.onConverge?.();
			return true;
		}

		// speedFactor === 1 snaps to target in a single frame
		state.tween = state.target.map((t, idx) =>
			isCloseEnough(state.tween![idx], t)
				? t
				: (state.tween![idx] ?? 0) +
						((t ?? 0) - (state.tween![idx] ?? 0)) / state.speedFactor || 0,
		);

		callback(state.tween);

		// Detect convergence in the same frame to avoid an extra redundant pass
		if (state.tween.every((t, idx) => t === state.target[idx])) {
			state.onConverge?.();
			return true;
		}
	}, []);

	useAnimationLoop(animate, [target]);
};
