import { StateUpdater, useEffect } from '@pionjs/pion';

export const SCROLLBAR_WIDTH = 20;
export const CHECKBOX_WIDTH = 44;
export const EXPAND_BUTTON_WIDTH = 24;
export const LAYOUT_OFFSET =
	SCROLLBAR_WIDTH + CHECKBOX_WIDTH + EXPAND_BUTTON_WIDTH;

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
					setCanvasWidth(entry.contentRect?.width - LAYOUT_OFFSET),
				);
			},
			observer = new ResizeObserver(onResize);

		observer.observe(host);
		return () => observer.unobserve(host);
	}, []);
