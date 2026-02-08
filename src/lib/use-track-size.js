import { useEffect } from '@pionjs/pion';

export const SCROLLBAR_WIDTH = 20;
export const CHECKBOX_WIDTH = 44;
export const EXPAND_BUTTON_WIDTH = 24;
export const LAYOUT_OFFSET =
	SCROLLBAR_WIDTH + CHECKBOX_WIDTH + EXPAND_BUTTON_WIDTH;

export const useTrackSize = (host, setCanvasWidth) =>
	useEffect(() => {
		const onResize = ([entry]) => {
				if (entry.contentRect?.width === 0) {
					return;
				}

				const nextWidth = entry.contentRect?.width - LAYOUT_OFFSET;
				requestAnimationFrame(() =>
					setCanvasWidth((prev) => (prev === nextWidth ? prev : nextWidth)),
				);
			},
			observer = new ResizeObserver(onResize);

		observer.observe(host);
		return () => observer.unobserve(host);
	}, []);
