import { useEffect, useRef, useState } from 'haunted';

export const
	isCloseEnough = (a = 0, b = 0) => Math.abs(a - b) < 0.1,
	useTweenArray = (target, speedFactor = 1.9) => {
		const
			requestRef = useRef(),
			targetRef = useRef(target),
			runningRef = useRef(false),
			[tween, setTween] = useState(target),

			animate = () => {
				requestRef.current = requestAnimationFrame(animate);

				if (!runningRef.current) {
					return;
				}

				setTween(tween => {
					const target = targetRef.current;

					if (target.every((t, idx) => tween[idx] === t)) {
						runningRef.current = false;
						return tween;
					}

					return target.map((t, idx) =>
						isCloseEnough(tween[idx], t)
							? t
							: (tween[idx] ?? 0) + ((t ?? 0) - (tween[idx] ?? 0)) / speedFactor || 0);
				});
			};

		useEffect(() => {
			requestRef.current = requestAnimationFrame(animate);
			return () => cancelAnimationFrame(requestRef.current);
		}, []);

		useEffect(() => {
			if (targetRef.current.length === 0 && target.length > 0) {
				setTween(target);
			}
			targetRef.current = target;
			runningRef.current = true;
		}, [target]);

		return tween;
	};
