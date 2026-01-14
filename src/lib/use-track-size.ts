import { StateUpdater, useEffect } from '@pionjs/pion';

export const useTrackSize = (
	host: HTMLElement,
	setCanvasWidth: StateUpdater<number>,
) =>
	useEffect(() => {
		const onResize = ([entry]: ResizeObserverEntry[]) => {
				if (entry.contentRect?.width === 0) {
					return;
				}

				requestAnimationFrame(() =>
					setCanvasWidth(
						entry.contentRect.width -
							20 /* scrollbar width */ -
							44 /* checkbox width */ -
							24 /* expand button width */,
					),
				);
			},
			observer = new ResizeObserver(onResize);

		observer.observe(host);
		return () => observer.unobserve(host);
	}, []);
