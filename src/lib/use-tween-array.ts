import { useCallback, useEffect, useMemo } from '@pionjs/pion';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { noop } from '@neovici/cosmoz-utils/function';
import { TweenedLayout } from './use-layout';

interface AnimationLoop {
	start: () => void;
	stop: () => void;
}

interface TweenState {
	target: TweenedLayout;
	tween?: TweenedLayout;
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

export const isCloseEnough = (
	a: number | undefined = 0,
	b: number | undefined = 0,
) => Math.abs((a ?? 0) - (b ?? 0)) < 0.1;

export const useTweenArray = (
	target: TweenedLayout,
	speedFactor = 1.9,
	callback: (tween: TweenedLayout) => void = noop,
): void => {
	const state = useMeta<TweenState>({ target });

	const animate = useCallback(() => {
		if (!state.tween) state.tween = state.target;

		if (state.target.every((t, idx) => state.tween![idx] === t)) {
			callback(state.tween);
			return true;
		}

		state.tween = state.target.map((t, idx) =>
			isCloseEnough(state.tween![idx], t)
				? t
				: (state.tween![idx] ?? 0) +
						((t ?? 0) - (state.tween![idx] ?? 0)) / speedFactor || 0,
		);

		callback(state.tween);
	}, []);

	useAnimationLoop(animate, [target]);
};
